"use client";

import {
  Suspense,
  useRef,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  type MutableRefObject,
} from 'react';
import { Canvas, useFrame, type RootState } from '@react-three/fiber';
import { OrbitControls, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

/** Where each clickable desk object leads, plus its hover label. */
export type RoomNav = {
  onNavigate: (href: string) => void;
  onHover: (label: string | null) => void;
};

/**
 * Hotspot — wraps a desk object, making it clickable + hover-aware.
 * Doesn't add its own transform (children keep their baked positions);
 * just attaches pointer handlers + a cursor. The label surfaces in the
 * bottom-center DOM chip (RoomLanding), not as an in-scene overlay.
 */
function Hotspot({
  href,
  label,
  nav,
  children,
}: {
  href: string;
  label: string;
  nav: RoomNav;
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        nav.onHover(label);
      }}
      onPointerOut={() => {
        setHovered(false);
        nav.onHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        nav.onNavigate(href);
      }}
    >
      {children}
    </group>
  );
}

const KEY_ROWS = [
  { z: -0.26, cols: [-1.26, -0.98, -0.7, -0.42, -0.14, 0.14, 0.42, 0.7, 0.98, 1.26], width: 0.2 },
  { z: -0.1, cols: [-1.28, -1.0, -0.72, -0.44, -0.16, 0.12, 0.4, 0.68, 0.96, 1.24], width: 0.22 },
  { z: 0.06, cols: [-1.3, -1.02, -0.74, -0.46, -0.18, 0.1, 0.38, 0.66, 0.94, 1.22], width: 0.22 },
  { z: 0.22, cols: [-1.08, -0.8, -0.52, -0.24, 0.04, 0.68, 1.02, 1.28], width: 0.24 },
] as const;

const LAPTOP_KEY_ROWS = [
  { z: -0.19, cols: [-0.37, -0.25, -0.13, -0.01, 0.11, 0.23, 0.35], width: 0.09 },
  { z: -0.07, cols: [-0.39, -0.27, -0.15, -0.03, 0.09, 0.21, 0.33], width: 0.09 },
  { z: 0.05, cols: [-0.4, -0.28, -0.16, -0.04, 0.08, 0.2, 0.32], width: 0.09 },
] as const;

const MONITOR_ART_PANELS = [
  { position: [-0.62, 0.14, 0.03] as [number, number, number], rotation: [0, 0, 0.18] as [number, number, number], size: [0.8, 1.35] as [number, number], color: '#4FE2FF', opacity: 0.36 },
  { position: [-0.02, -0.02, 0.035] as [number, number, number], rotation: [0, 0, -0.14] as [number, number, number], size: [1.12, 1.48] as [number, number], color: '#587BFF', opacity: 0.34 },
  { position: [0.54, 0.08, 0.04] as [number, number, number], rotation: [0, 0, 0.24] as [number, number, number], size: [0.95, 1.46] as [number, number], color: '#FF4FCB', opacity: 0.3 },
  { position: [0.2, -0.28, 0.045] as [number, number, number], rotation: [0, 0, -0.42] as [number, number, number], size: [1.95, 0.34] as [number, number], color: '#FFD56B', opacity: 0.2 },
];

const MAT_ART_PANELS = [
  { position: [-1.55, 0.022, -0.08] as [number, number, number], rotation: [0, 0, 0.18] as [number, number, number], size: [1.5, 0.8] as [number, number], color: '#D44D8B', opacity: 0.28 },
  { position: [-0.18, 0.023, 0.02] as [number, number, number], rotation: [0, 0, -0.16] as [number, number, number], size: [1.95, 1.05] as [number, number], color: '#FFB24B', opacity: 0.22 },
  { position: [1.46, 0.024, 0.05] as [number, number, number], rotation: [0, 0, 0.12] as [number, number, number], size: [1.75, 0.92] as [number, number], color: '#4A72FF', opacity: 0.3 },
];

function Floor(): React.JSX.Element {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#E7E0DB" roughness={0.98} />
    </mesh>
  );
}

function BackWall(): React.JSX.Element {
  return (
    <mesh position={[0.35, 2.15, -2.6]} receiveShadow>
      <planeGeometry args={[12, 7]} />
      <meshStandardMaterial color="#EEE8E4" roughness={0.94} />
    </mesh>
  );
}

function DeskSurface(): React.JSX.Element {
  return (
    <mesh position={[0, 0, 0.1]} receiveShadow castShadow>
      <boxGeometry args={[7.8, 0.11, 4.8]} />
      <meshStandardMaterial color="#52545C" roughness={0.7} metalness={0.05} />
    </mesh>
  );
}

function DeskMat(): React.JSX.Element {
  return (
    <group position={[0.42, 0.082, 1.02]}>
      <mesh receiveShadow>
        <boxGeometry args={[5.9, 0.03, 2.08]} />
        <meshStandardMaterial color="#1C212B" roughness={0.8} />
      </mesh>
      {MAT_ART_PANELS.map((panel, index) => (
        <mesh
          key={`mat-panel-${index}`}
          position={panel.position}
          rotation={[-Math.PI / 2, panel.rotation[1], panel.rotation[2]]}
          renderOrder={index + 1}
        >
          <planeGeometry args={panel.size} />
          <meshBasicMaterial
            color={panel.color}
            transparent
            opacity={panel.opacity}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function RingLight(): React.JSX.Element {
  const ringY = 1.96;
  return (
    <group position={[-2.65, 0.08, -0.24]} rotation={[0, 0.5, 0]}>
      {/* ═══ THE LIGHT RING ═══ */}
      <mesh position={[0, ringY, 0.075]}>
        <torusGeometry args={[0.6, 0.08, 18, 64]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#FFF9F0"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>

      {/* ═══ HINGE BRACKET ═══ */}
      <mesh position={[0, ringY - 0.04, 0.11]} castShadow>
        <boxGeometry args={[0.24, 0.16, 0.06]} />
        <meshStandardMaterial color="#181818" roughness={0.5} metalness={0.35} />
      </mesh>

      {/* ═══ SUPPORT POLE & BASE ═══ */}
      {/* Extended vertical pole */}
      <mesh position={[0, 0.94, 0.02]} castShadow>
        <cylinderGeometry args={[0.045, 0.05, 1.88, 16]} />
        <meshStandardMaterial color="#27292E" roughness={0.45} metalness={0.3} />
      </mesh>
      {/* Circular base */}
      <mesh position={[0, 0.08, 0.02]} castShadow>
        <cylinderGeometry args={[0.22, 0.26, 0.08, 24]} />
        <meshStandardMaterial color="#1F2127" roughness={0.6} metalness={0.18} />
      </mesh>
      
      {/* Main light source */}
      <pointLight position={[0, ringY, 0.58]} color="#FFF8F0" intensity={5.4} distance={6.2} />
    </group>
  );
}

function LaptopOnStand(): React.JSX.Element {
  return (
    <group position={[-2.12, 0.1, 0.82]} rotation={[0, 0.34, 0]} scale={0.98}>
      <mesh position={[0, 0.02, 0.08]} receiveShadow castShadow>
        <boxGeometry args={[1.34, 0.04, 0.84]} />
        <meshStandardMaterial color="#F0F1F4" roughness={0.44} metalness={0.1} />
      </mesh>
      <mesh position={[-0.34, 0.18, -0.01]} rotation={[0.58, 0, 0.22]} castShadow>
        <boxGeometry args={[0.13, 0.46, 0.12]} />
        <meshStandardMaterial color="#AEB4BC" roughness={0.42} metalness={0.52} />
      </mesh>
      <mesh position={[0.34, 0.18, -0.01]} rotation={[0.58, 0, -0.22]} castShadow>
        <boxGeometry args={[0.13, 0.46, 0.12]} />
        <meshStandardMaterial color="#AEB4BC" roughness={0.42} metalness={0.52} />
      </mesh>
      <mesh position={[0, 0.34, 0.08]} rotation={[-0.18, 0, 0]} castShadow>
        <boxGeometry args={[1.34, 0.05, 0.9]} />
        <meshStandardMaterial color="#C7CCD4" roughness={0.36} metalness={0.54} />
      </mesh>
      <mesh position={[-0.42, 0.36, 0.44]} rotation={[-0.18, 0, 0]} castShadow>
        <boxGeometry args={[0.16, 0.08, 0.06]} />
        <meshStandardMaterial color="#B3B8C0" roughness={0.38} metalness={0.42} />
      </mesh>
      <mesh position={[0.42, 0.36, 0.44]} rotation={[-0.18, 0, 0]} castShadow>
        <boxGeometry args={[0.16, 0.08, 0.06]} />
        <meshStandardMaterial color="#B3B8C0" roughness={0.38} metalness={0.42} />
      </mesh>

      <group position={[0, 0.41, 0.13]} rotation={[-0.16, 0, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.22, 0.05, 0.8]} />
          <meshStandardMaterial color="#848A92" roughness={0.42} metalness={0.46} />
        </mesh>
        <mesh position={[0, 0.018, -0.02]}>
          <boxGeometry args={[1.02, 0.01, 0.52]} />
          <meshStandardMaterial color="#525861" roughness={0.56} metalness={0.18} />
        </mesh>
        {LAPTOP_KEY_ROWS.map((row, rowIndex) =>
          row.cols.map((x, keyIndex) => (
            <mesh key={`laptop-key-${rowIndex}-${keyIndex}`} position={[x, 0.028, row.z]} castShadow>
              <boxGeometry args={[row.width, 0.012, 0.08]} />
              <meshStandardMaterial color="#2C313B" roughness={0.42} />
            </mesh>
          )),
        )}
        <mesh position={[0, 0.02, 0.21]}>
          <boxGeometry args={[0.42, 0.008, 0.2]} />
          <meshStandardMaterial color="#B3B8BF" roughness={0.34} metalness={0.14} />
        </mesh>
      </group>

      <group position={[0, 0.44, -0.26]} rotation={[0.16, 0, 0]}>
        <mesh position={[0, 0.34, 0]} castShadow>
          <boxGeometry args={[1.22, 0.72, 0.05]} />
          <meshStandardMaterial color="#14161D" roughness={0.48} metalness={0.16} />
        </mesh>
        <mesh position={[0, 0.34, 0.028]}>
          <planeGeometry args={[1.08, 0.6]} />
          <meshBasicMaterial color="#121D35" />
        </mesh>
        <mesh position={[-0.16, 0.34, 0.031]}>
          <planeGeometry args={[0.44, 0.46]} />
          <meshBasicMaterial color="#18284A" transparent opacity={0.9} />
        </mesh>
        <mesh position={[0.22, 0.34, 0.032]} rotation={[0, 0, 0.08]}>
          <planeGeometry args={[0.44, 0.4]} />
          <meshBasicMaterial color="#6B5BE7" transparent opacity={0.34} depthWrite={false} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.16, 0.03, 0.08]} />
          <meshStandardMaterial color="#60656D" roughness={0.42} metalness={0.18} />
        </mesh>
      </group>
    </group>
  );
}

function MainMonitor(): React.JSX.Element {
  const screenY = 1.6;
  return (
    <group position={[1.02, 0.08, -0.58]}>
      {/* Screen panel (raised higher to expose stand pole) */}
      <mesh position={[0, screenY, 0.02]} rotation={[-0.03, 0, 0]} castShadow>
        <boxGeometry args={[3.72, 2.04, 0.1]} />
        <meshStandardMaterial color="#111218" roughness={0.42} metalness={0.15} />
      </mesh>
      <mesh position={[0, screenY, 0.065]} rotation={[-0.03, 0, 0]}>
        <planeGeometry args={[3.5, 1.84]} />
        <meshBasicMaterial color="#0E1730" />
      </mesh>
      <mesh position={[1.15, screenY, 0.072]} rotation={[-0.03, 0, 0]} renderOrder={1}>
        <planeGeometry args={[1.16, 1.84]} />
        <meshBasicMaterial color="#17305C" transparent opacity={0.84} />
      </mesh>
      <mesh position={[-0.58, screenY + 0.01, 0.072]} rotation={[-0.03, 0, 0]}>
        <planeGeometry args={[1.4, 1.46]} />
        <meshBasicMaterial color="#101931" transparent opacity={0.56} />
      </mesh>
      <mesh position={[0, screenY + 0.72, 0.07]} rotation={[-0.03, 0, 0]} renderOrder={1}>
        <planeGeometry args={[3.48, 0.11]} />
        <meshBasicMaterial color="#111A2F" transparent opacity={0.92} />
      </mesh>
      {MONITOR_ART_PANELS.map((panel, index) => (
        <mesh
          key={`monitor-panel-${index}`}
          position={[1.34 + panel.position[0] * 0.32, screenY + 0.01 + panel.position[1] * 0.72, 0.074 + panel.position[2] + index * 0.006]}
          rotation={[-0.03 + panel.rotation[0], panel.rotation[1], panel.rotation[2]]}
          renderOrder={index + 2}
        >
          <planeGeometry args={[panel.size[0] * 0.28, panel.size[1] * 0.4]} />
          <meshBasicMaterial color={panel.color} transparent opacity={panel.opacity * 0.4} depthWrite={false} />
        </mesh>
      ))}
      <mesh position={[0.04, screenY - 0.05, 0.074]} rotation={[-0.03, 0, 0]}>
        <planeGeometry args={[3.36, 1.72]} />
        <meshBasicMaterial color="#17264A" transparent opacity={0.08} />
      </mesh>

      {/* ═══ MONITOR STAND ═══ */}
      {/* Rectangular base plate */}
      <mesh position={[0, 0.1, -0.06]} castShadow receiveShadow>
        <boxGeometry args={[1.18, 0.06, 0.54]} />
        <meshStandardMaterial color="#111318" roughness={0.32} metalness={0.28} />
      </mesh>
      {/* Base accent strip */}
      <mesh position={[0, 0.135, -0.06]} castShadow>
        <boxGeometry args={[0.42, 0.018, 0.18]} />
        <meshStandardMaterial color="#2A2E36" roughness={0.24} metalness={0.44} />
      </mesh>
      {/* Vertical pole — visible between base and screen bottom */}
      <mesh position={[0, 0.52, -0.06]} castShadow>
        <boxGeometry args={[0.16, 0.82, 0.1]} />
        <meshStandardMaterial color="#1A1D24" roughness={0.3} metalness={0.42} />
      </mesh>
      {/* Hinge bracket — connects pole top to screen back */}
      <mesh position={[0, 0.98, -0.04]} castShadow>
        <boxGeometry args={[0.5, 0.14, 0.12]} />
        <meshStandardMaterial color="#16181F" roughness={0.38} metalness={0.32} />
      </mesh>

      <pointLight position={[0, 0.58, 0.92]} color="#5CAEFF" intensity={1.4} distance={3.8} />
    </group>
  );
}

function Keyboard(): React.JSX.Element {
  return (
    <group position={[0.98, 0.088, 1.48]}>
      <mesh rotation={[-0.04, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.42, 0.09, 0.96]} />
        <meshStandardMaterial color="#171A20" roughness={0.5} metalness={0.18} />
      </mesh>
      {KEY_ROWS.map((row, rowIndex) =>
        row.cols.map((x, keyIndex) => (
          <mesh key={`row-${rowIndex}-key-${keyIndex}`} position={[x, 0.05, row.z]} rotation={[-0.04, 0, 0]} castShadow>
            <boxGeometry args={[row.width, 0.03, 0.1]} />
            <meshStandardMaterial color="#2C313B" roughness={0.44} metalness={0.08} />
          </mesh>
        )),
      )}
      <mesh position={[0.18, 0.048, 0.22]} rotation={[-0.04, 0, 0]} castShadow>
        <boxGeometry args={[1.18, 0.03, 0.11]} />
        <meshStandardMaterial color="#343A45" roughness={0.4} metalness={0.08} />
      </mesh>
      <mesh position={[-1.42, 0.048, -0.38]} rotation={[-0.04, 0, 0]} castShadow>
        <boxGeometry args={[0.2, 0.024, 0.1]} />
        <meshStandardMaterial color="#2B303A" roughness={0.48} />
      </mesh>
    </group>
  );
}

function ComputerMouse(): React.JSX.Element {
  return (
    <group position={[3.18, 0.1, 1.58]} rotation={[0, -0.18 + Math.PI, 0]} scale={0.65}>
      {/* ═══ MAIN BODY (LOWER SHELL) ═══ */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.12, 0.62]} />
        <meshStandardMaterial color="#212429" roughness={0.8} />
      </mesh>

      {/* ═══ SIDE GRIPS ═══ */}
      <mesh position={[-0.2, 0.02, 0]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.06, 0.1, 0.58]} />
        <meshStandardMaterial color="#191C20" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh position={[0.2, 0.02, 0]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.06, 0.1, 0.58]} />
        <meshStandardMaterial color="#191C20" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* ═══ TOP SHELL & BUTTONS ═══ */}
      {/* Symmetrical Left Button */}
      <mesh position={[-0.09, 0.08, 0.1]} rotation={[0.05, 0, -0.05]} castShadow>
        <boxGeometry args={[0.18, 0.04, 0.4]} />
        <meshStandardMaterial color="#2B2F36" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Symmetrical Right Button */}
      <mesh position={[0.09, 0.08, 0.1]} rotation={[0.05, 0, 0.05]} castShadow>
        <boxGeometry args={[0.18, 0.04, 0.4]} />
        <meshStandardMaterial color="#2B2F36" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Palm rest area */}
      <mesh position={[0, 0.06, -0.12]} rotation={[-0.15, 0, 0]} scale={[1, 0.65, 1]} castShadow>
        <sphereGeometry args={[0.21, 24, 18]} />
        <meshStandardMaterial color="#2B2F36" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* ═══ CENTRAL ISLAND (The Cleft) ═══ */}
      <group position={[0, 0.085, 0.08]}>
        <mesh position={[0, -0.015, 0]}>
          <boxGeometry args={[0.08, 0.04, 0.48]} />
          <meshStandardMaterial color="#1A1C21" roughness={0.5} />
        </mesh>
        
        {/* Scroll Wheel (Metallic) */}
        <group position={[0, 0.01, 0.12]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.028, 0.028, 0.04, 32]} />
            <meshStandardMaterial color="#E2E6EB" metalness={0.8} roughness={0.1} />
          </mesh>
          {/* Wheel detail/grip lines */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.029, 0.029, 0.012, 16]} />
            <meshStandardMaterial color="#A5ABB5" metalness={0.6} roughness={0.2} />
          </mesh>
        </group>

        {/* Mode-switch button behind wheel */}
        <mesh position={[0, 0.01, 0.02]} castShadow>
          <boxGeometry args={[0.04, 0.02, 0.06]} />
          <meshStandardMaterial color="#212429" roughness={0.6} />
        </mesh>

        {/* Status LED (Green) */}
        <mesh position={[0, 0.01, -0.06]}>
          <sphereGeometry args={[0.008, 12, 12]} />
          <meshStandardMaterial 
            color="#00FF44" 
            emissive="#00FF44" 
            emissiveIntensity={2.5} 
            toneMapped={false}
          />
        </mesh>

        {/* Logo/Brand Area (Representation) */}
        <mesh position={[0, 0, -0.18]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.03, 0.005, 0.08]} />
          <meshStandardMaterial color="#353A42" roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}

function CoffeeMug(): React.JSX.Element {
  return (
    <group position={[-3.12, 0.085, 1.96]}>
      {/* ═══ COASTER ═══ */}
      <mesh position={[0, -0.032, 0]} receiveShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.04, 24]} />
        <meshStandardMaterial color="#D9D0C5" roughness={0.88} />
      </mesh>
      {/* ═══ MUG BODY ═══ */}
      <mesh castShadow>
        <cylinderGeometry args={[0.22, 0.19, 0.48, 20]} />
        <meshStandardMaterial color="#F2ECE3" roughness={0.72} />
      </mesh>
      {/* ═══ MUG HANDLE (Ouško) ═══ */}
      <mesh position={[0.2, 0.1, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
        <torusGeometry args={[0.12, 0.03, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#F2ECE3" roughness={0.72} />
      </mesh>
      {/* ═══ COFFEE ═══ */}
      <mesh position={[0, 0.235, 0]}>
        <cylinderGeometry args={[0.17, 0.17, 0.028, 20]} />
        <meshStandardMaterial color="#8A5B34" roughness={0.92} />
      </mesh>
      {/* ═══ CUTE FACE ON MUG ═══ */}
      <mesh position={[-0.07, 0.02, 0.2]} scale={[0.9, 1.08, 0.34]}>
        <sphereGeometry args={[0.05, 12, 10]} />
        <meshStandardMaterial color="#2D241F" roughness={0.82} />
      </mesh>
      <mesh position={[0.07, 0.02, 0.2]} scale={[0.9, 1.08, 0.34]}>
        <sphereGeometry args={[0.05, 12, 10]} />
        <meshStandardMaterial color="#2D241F" roughness={0.82} />
      </mesh>
      <mesh position={[0, -0.02, 0.214]}>
        <sphereGeometry args={[0.038, 10, 8]} />
        <meshStandardMaterial color="#2D241F" roughness={0.84} />
      </mesh>
      <mesh position={[0, -0.065, 0.224]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.05, 0.01, 6, 12, Math.PI]} />
        <meshStandardMaterial color="#2D241F" roughness={0.8} />
      </mesh>
      <mesh position={[-0.09, -0.085, 0.26]} scale={[0.9, 1.2, 0.4]}>
        <sphereGeometry args={[0.046, 8, 8]} />
        <meshStandardMaterial color="#5B463D" roughness={0.82} />
      </mesh>
      <mesh position={[0.0, -0.085, 0.275]} scale={[0.84, 1.2, 0.4]}>
        <sphereGeometry args={[0.038, 8, 8]} />
        <meshStandardMaterial color="#5B463D" roughness={0.82} />
      </mesh>
      <mesh position={[0.09, -0.085, 0.26]} scale={[0.9, 1.2, 0.4]}>
        <sphereGeometry args={[0.046, 8, 8]} />
        <meshStandardMaterial color="#5B463D" roughness={0.82} />
      </mesh>
    </group>
  );
}

function SlothLamp(): React.JSX.Element {
  const shell = {
    color: '#FFF9F1',
    emissive: '#FFF5E8',
    emissiveIntensity: 0.42,
    roughness: 0.78,
  };
  const groove = { color: '#E8DED2', roughness: 0.86 };
  const black = { color: '#111215', roughness: 0.74 };
  const eyelid = { color: '#F6FBFF', roughness: 0.26 };
  const pad = { color: '#17181D', roughness: 0.68 };

  const foreheadCurve = useMemo(
    () =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(-0.29, 0.84, 0.284),
          new THREE.Vector3(-0.15, 0.89, 0.298),
          new THREE.Vector3(0, 0.852, 0.302),
          new THREE.Vector3(0.15, 0.89, 0.298),
          new THREE.Vector3(0.29, 0.84, 0.284),
        ]),
        64,
        0.007,
        10,
        false,
      ),
    [],
  );

  const leftSmileCurve = useMemo(
    () =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(-0.13, 0.565, 0.308),
          new THREE.Vector3(-0.097, 0.545, 0.316),
          new THREE.Vector3(-0.048, 0.535, 0.318),
          new THREE.Vector3(-0.006, 0.542, 0.312),
        ]),
        32,
        0.0065,
        8,
        false,
      ),
    [],
  );

  const rightSmileCurve = useMemo(
    () =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(0.006, 0.542, 0.312),
          new THREE.Vector3(0.048, 0.535, 0.318),
          new THREE.Vector3(0.097, 0.545, 0.316),
          new THREE.Vector3(0.13, 0.565, 0.308),
        ]),
        32,
        0.0065,
        8,
        false,
      ),
    [],
  );

  return (
    <group position={[1.92, 0.085, 0.0]} rotation={[0, -0.04, 0]} scale={0.78}>
      <mesh position={[0, 0.31, 0.02]} scale={[1.04, 1.18, 0.94]} castShadow receiveShadow>
        <sphereGeometry args={[0.29, 32, 26]} />
        <meshStandardMaterial {...shell} />
      </mesh>
      <mesh position={[0, 0.72, 0.02]} scale={[1.1, 1.02, 1.02]} castShadow>
        <sphereGeometry args={[0.33, 34, 28]} />
        <meshStandardMaterial {...shell} />
      </mesh>
      <mesh position={[-0.18, 0.46, 0.03]} scale={[0.64, 0.92, 0.74]} castShadow>
        <sphereGeometry args={[0.19, 22, 18]} />
        <meshStandardMaterial {...shell} />
      </mesh>
      <mesh position={[0.18, 0.46, 0.03]} scale={[0.64, 0.92, 0.74]} castShadow>
        <sphereGeometry args={[0.19, 22, 18]} />
        <meshStandardMaterial {...shell} />
      </mesh>

      <mesh position={[-0.47, 0.39, 0.055]} rotation={[0.14, 0.08, 1.56]} castShadow>
        <capsuleGeometry args={[0.094, 0.3, 14, 18]} />
        <meshStandardMaterial {...shell} />
      </mesh>
      <mesh position={[0.47, 0.39, 0.055]} rotation={[0.14, -0.08, -1.56]} castShadow>
        <capsuleGeometry args={[0.094, 0.3, 14, 18]} />
        <meshStandardMaterial {...shell} />
      </mesh>

      <mesh position={[-0.145, 0.035, 0.225]} rotation={[0.22, 0.02, 0.08]} castShadow>
        <capsuleGeometry args={[0.085, 0.18, 14, 16]} />
        <meshStandardMaterial {...shell} />
      </mesh>
      <mesh position={[0.145, 0.035, 0.225]} rotation={[0.22, -0.02, -0.08]} castShadow>
        <capsuleGeometry args={[0.085, 0.18, 14, 16]} />
        <meshStandardMaterial {...shell} />
      </mesh>

      <mesh position={[-0.145, -0.032, 0.305]} scale={[0.92, 0.86, 0.34]}>
        <sphereGeometry args={[0.058, 16, 14]} />
        <meshStandardMaterial {...pad} />
      </mesh>
      <mesh position={[0.145, -0.032, 0.305]} scale={[0.92, 0.86, 0.34]}>
        <sphereGeometry args={[0.058, 16, 14]} />
        <meshStandardMaterial {...pad} />
      </mesh>

      {[-0.2, -0.145, -0.09].map((x, index) => (
        <mesh key={`left-toe-${index}`} position={[x, 0.055, 0.225]} scale={[0.42, 0.58, 0.3]}>
          <sphereGeometry args={[0.05, 14, 12]} />
          <meshStandardMaterial {...shell} />
        </mesh>
      ))}
      {[0.09, 0.145, 0.2].map((x, index) => (
        <mesh key={`right-toe-${index}`} position={[x, 0.055, 0.225]} scale={[0.42, 0.58, 0.3]}>
          <sphereGeometry args={[0.05, 14, 12]} />
          <meshStandardMaterial {...shell} />
        </mesh>
      ))}

      {/* EYE PATCHES — long almond, rounded part inside (D and reverse-D) */}
      <mesh position={[-0.175, 0.695, 0.275]} rotation={[0, 0, Math.PI - 0.18]} scale={[1.65, 0.72, 0.24]}>
        <sphereGeometry args={[0.134, 24, 20]} />
        <meshStandardMaterial {...black} />
      </mesh>
      <mesh position={[0.175, 0.695, 0.275]} rotation={[0, 0, Math.PI + 0.18]} scale={[1.65, 0.72, 0.24]}>
        <sphereGeometry args={[0.134, 24, 20]} />
        <meshStandardMaterial {...black} />
      </mesh>

      {/* SMILING EYES — arcs centered in patches, matching patch tilt */}
      <mesh position={[-0.175, 0.695, 0.32]} rotation={[0, 0, Math.PI - 0.18]}>
        <torusGeometry args={[0.042, 0.012, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#BFFFBF" emissive="#BFFFBF" emissiveIntensity={0.8} toneMapped={false} />
      </mesh>
      <mesh position={[0.175, 0.695, 0.32]} rotation={[0, 0, Math.PI + 0.18]}>
        <torusGeometry args={[0.042, 0.012, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#BFFFBF" emissive="#BFFFBF" emissiveIntensity={0.8} toneMapped={false} />
      </mesh>

      {/* NOSE — wide button shape, clearly visible */}
      <mesh position={[0, 0.645, 0.315]} scale={[2, 1.4, 2]}>
        <sphereGeometry args={[0.04, 16, 14]} />
        <meshStandardMaterial {...black} />
      </mesh>
      {/* Philtrum line */}
      <mesh position={[0, 0.578, 0.313]} scale={[0.24, 0.65, 1.2]}>
        <sphereGeometry args={[0.03, 12, 10]} />
        <meshStandardMaterial {...black} />
      </mesh>

      <mesh geometry={foreheadCurve} castShadow>
        <meshStandardMaterial {...groove} />
      </mesh>
      <mesh geometry={leftSmileCurve}>
        <meshStandardMaterial {...black} />
      </mesh>
      <mesh geometry={rightSmileCurve}>
        <meshStandardMaterial {...black} />
      </mesh>

      <pointLight position={[0, 0.64, 0.34]} color="#FFF3E0" intensity={2.1} distance={3.8} />
    </group>
  );
}

function SlothStand(): React.JSX.Element {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.55) * 0.08;
  });

  return (
    <group ref={meshRef} position={[2.72, 0.09, -0.1]} scale={0.28}>
      <mesh position={[0, 0.04, 0]} castShadow>
        <boxGeometry args={[0.62, 0.08, 0.42]} />
        <meshStandardMaterial color="#B79E87" roughness={0.92} />
      </mesh>
      <mesh position={[0, 0.74, 0]} castShadow>
        <capsuleGeometry args={[0.28, 0.48, 10, 14]} />
        <meshStandardMaterial color="#8A6952" roughness={0.88} />
      </mesh>
      <mesh position={[0, 1.18, 0.06]} castShadow>
        <sphereGeometry args={[0.26, 16, 12]} />
        <meshStandardMaterial color="#91715B" roughness={0.88} />
      </mesh>
      <mesh position={[0, 1.1, 0.26]}>
        <sphereGeometry args={[0.16, 12, 10]} />
        <meshStandardMaterial color="#E6D7C3" roughness={0.82} />
      </mesh>
      <mesh position={[-0.08, 1.2, 0.37]}>
        <sphereGeometry args={[0.028, 8, 8]} />
        <meshStandardMaterial color="#171513" roughness={0.44} />
      </mesh>
      <mesh position={[0.08, 1.2, 0.37]}>
        <sphereGeometry args={[0.028, 8, 8]} />
        <meshStandardMaterial color="#171513" roughness={0.44} />
      </mesh>
      <mesh position={[-0.25, 0.82, 0.28]} rotation={[0.4, 0, 0.3]} castShadow>
        <capsuleGeometry args={[0.06, 0.26, 8, 10]} />
        <meshStandardMaterial color="#8A6952" roughness={0.88} />
      </mesh>
      <mesh position={[0.25, 0.82, 0.28]} rotation={[0.4, 0, -0.3]} castShadow>
        <capsuleGeometry args={[0.06, 0.26, 8, 10]} />
        <meshStandardMaterial color="#8A6952" roughness={0.88} />
      </mesh>
      <mesh position={[0, 0.88, 0.44]} rotation={[-0.42, 0, 0]} castShadow>
        <boxGeometry args={[0.38, 0.08, 0.24]} />
        <meshStandardMaterial color="#27282C" roughness={0.52} metalness={0.26} />
      </mesh>
    </group>
  );
}

type PlantProps = {
  position?: [number, number, number];
  scale?: number;
};

function Plant({ position = [3.56, 0.09, -0.1], scale = 0.8 }: PlantProps): React.JSX.Element {
  return (
    <group position={position} scale={scale}>
      {/* ═══ BLACK POT ═══ */}
      <mesh castShadow>
        <cylinderGeometry args={[0.18, 0.22, 0.28, 18]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.75} metalness={0.1} />
      </mesh>
      {/* ═══ SOIL ═══ */}
      <mesh position={[0, 0.13, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.04, 16]} />
        <meshStandardMaterial color="#2B1E16" roughness={1.0} />
      </mesh>
      {/* ═══ LUSH LEAVES (Philodendron style) ═══ */}
      <group position={[0, 0.15, 0]}>
        {[
          { pos: [0.12, 0.22, 0.08], rot: [0.4, 0, -0.2], scale: [0.9, 1.4, 0.4], color: '#4F7E54' },
          { pos: [-0.14, 0.18, 0.1], rot: [0.3, 2.1, 0.1], scale: [0.8, 1.3, 0.35], color: '#385F41' },
          { pos: [0.05, 0.32, -0.15], rot: [-0.5, 0.8, 0], scale: [1.0, 1.6, 0.45], color: '#649562' },
          { pos: [-0.08, 0.28, -0.05], rot: [-0.3, -1.2, -0.1], scale: [0.75, 1.2, 0.3], color: '#4A7650' },
          { pos: [0.22, 0.14, -0.08], rot: [-0.2, 4.2, 0.2], scale: [0.85, 1.4, 0.4], color: '#578F5F' },
          { pos: [-0.18, 0.12, -0.2], rot: [-0.6, 1.5, 0.3], scale: [0.9, 1.5, 0.4], color: '#32543A' },
          { pos: [0.0, 0.42, 0.0], rot: [0.1, 0, 0], scale: [1.1, 1.8, 0.5], color: '#6FAE6B' },
          // Extra leaves for density
          { pos: [0.1, 0.25, 0.15], rot: [0.5, 0.5, -0.1], scale: [0.7, 1.1, 0.3], color: '#4F7E54' },
          { pos: [-0.1, 0.25, -0.15], rot: [-0.5, -0.5, 0.1], scale: [0.7, 1.1, 0.3], color: '#4F7E54' },
        ].map((leaf, i) => (
          <mesh key={`leaf-${i}`} position={leaf.pos as [number, number, number]} rotation={leaf.rot as [number, number, number]} scale={leaf.scale as [number, number, number]} castShadow>
            <sphereGeometry args={[0.15, 12, 10]} />
            <meshStandardMaterial color={leaf.color} roughness={0.82} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function HeadphoneStand(): React.JSX.Element {
  return (
    <group position={[-1.24, 0.09, -0.42]} rotation={[0, 0.22, 0]}>
      {/* ═══ STAND ═══ */}
      {/* Black base — rounded rectangle */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.62, 0.05, 0.32]} />
        <meshStandardMaterial color="#18191F" roughness={0.42} metalness={0.2} />
      </mesh>
      {/* Base top bevel */}
      <mesh position={[0, 0.048, 0]}>
        <boxGeometry args={[0.58, 0.008, 0.28]} />
        <meshStandardMaterial color="#22242C" roughness={0.38} metalness={0.22} />
      </mesh>
      {/* Base groove detail */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.22, 0.006, 0.05]} />
        <meshStandardMaterial color="#111318" roughness={0.5} metalness={0.15} />
      </mesh>

      {/* Vertical arm — starts inside base so no gap */}
      <mesh position={[0, 0.50, 0]} castShadow>
        <boxGeometry args={[0.1, 0.96, 0.035]} />
        <meshStandardMaterial color="#1A1C22" roughness={0.42} metalness={0.18} />
      </mesh>
      {/* Arm top bridge — visible support above the headphones */}
      <mesh position={[0, 1, 0.02]} castShadow>
        <boxGeometry args={[0.24, 0.05, 0.08]} />
        <meshStandardMaterial color="#1A1C22" roughness={0.42} metalness={0.18} />
      </mesh>
      {/* Cradle under the bridge so the band visibly rests on the stand */}
      <mesh position={[0, 0.95, 0.02]} rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[0.11, 0.028, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#1A1C22" roughness={0.42} metalness={0.18} />
      </mesh>

      {/* ═══ HEADPHONES (hanging on hook) ═══ */}
      <group position={[0, 0.76, 0.02]}>
        {/* Headband — arc draped over the hook */}
        <mesh rotation={[0, 0, 0]} castShadow>
          <torusGeometry args={[0.26, 0.024, 12, 32, Math.PI]} />
          <meshStandardMaterial color="#1E2028" roughness={0.34} metalness={0.32} />
        </mesh>
        {/* Headband inner padding */}
        <mesh>
          <torusGeometry args={[0.26, 0.016, 10, 28, Math.PI * 0.85]} />
          <meshStandardMaterial color="#35383F" roughness={0.78} />
        </mesh>
        {/* Headband top cushion */}
        <mesh position={[0, 0.008, 0]}>
          <torusGeometry args={[0.26, 0.012, 8, 24, Math.PI * 0.6]} />
          <meshStandardMaterial color="#42454C" roughness={0.85} />
        </mesh>

        {/* Left slider arm */}
        <mesh position={[-0.26, -0.1, 0]} castShadow>
          <boxGeometry args={[0.03, 0.16, 0.02]} />
          <meshStandardMaterial color="#7A7E86" roughness={0.2} metalness={0.65} />
        </mesh>

        {/* === Left ear cup === */}
        <group position={[-0.26, -0.24, 0]}>
          {/* Outer shell */}
          <mesh rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.13, 0.135, 0.065, 24]} />
            <meshStandardMaterial color="#1A1D24" roughness={0.32} metalness={0.3} />
          </mesh>
          {/* Ear cushion ring */}
          <mesh position={[0, 0.034, 0]}>
            <torusGeometry args={[0.095, 0.038, 12, 22]} />
            <meshStandardMaterial color="#282B32" roughness={0.84} />
          </mesh>
          {/* Inner grille */}
          <mesh position={[0, 0.04, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.005, 16]} />
            <meshStandardMaterial color="#111318" roughness={0.6} metalness={0.12} />
          </mesh>
          {/* Outer logo disc */}
          <mesh position={[0, -0.034, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 0.004, 14]} />
            <meshStandardMaterial color="#2E3138" roughness={0.3} metalness={0.45} />
          </mesh>
        </group>

        {/* Right slider arm */}
        <mesh position={[0.26, -0.1, 0]} castShadow>
          <boxGeometry args={[0.03, 0.16, 0.02]} />
          <meshStandardMaterial color="#7A7E86" roughness={0.2} metalness={0.65} />
        </mesh>

        {/* === Right ear cup === */}
        <group position={[0.26, -0.24, 0]}>
          {/* Outer shell */}
          <mesh rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.13, 0.135, 0.065, 24]} />
            <meshStandardMaterial color="#1A1D24" roughness={0.32} metalness={0.3} />
          </mesh>
          {/* Ear cushion ring */}
          <mesh position={[0, 0.034, 0]}>
            <torusGeometry args={[0.095, 0.038, 12, 22]} />
            <meshStandardMaterial color="#282B32" roughness={0.84} />
          </mesh>
          {/* Inner grille */}
          <mesh position={[0, 0.04, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.005, 16]} />
            <meshStandardMaterial color="#111318" roughness={0.6} metalness={0.12} />
          </mesh>
          {/* Outer logo disc */}
          <mesh position={[0, -0.034, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 0.004, 14]} />
            <meshStandardMaterial color="#2E3138" roughness={0.3} metalness={0.45} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function MicrophoneArm(): React.JSX.Element {
  return (
    <group position={[3.18, 0.08, 0.28]} rotation={[0, -0.34, 0]} scale={1.12}>
      <mesh position={[0, 0.04, 0]} castShadow>
        <boxGeometry args={[0.36, 0.07, 0.2]} />
        <meshStandardMaterial color="#111318" roughness={0.54} metalness={0.14} />
      </mesh>
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.08, 1.52, 0.08]} />
        <meshStandardMaterial color="#18191F" roughness={0.46} metalness={0.24} />
      </mesh>
      <mesh position={[-0.02, 1.56, 0.04]} castShadow>
        <boxGeometry args={[0.16, 0.16, 0.11]} />
        <meshStandardMaterial color="#18191F" roughness={0.46} metalness={0.24} />
      </mesh>
      <mesh position={[-0.08, 1.6, 0.05]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.16, 18]} />
        <meshStandardMaterial color="#16181E" roughness={0.42} metalness={0.28} />
      </mesh>
      <mesh position={[-0.24, 1.73, 0.06]} rotation={[0.08, 0, 0.72]} castShadow>
        <boxGeometry args={[0.07, 0.68, 0.07]} />
        <meshStandardMaterial color="#18191F" roughness={0.46} metalness={0.24} />
      </mesh>
      <mesh position={[-0.53, 1.92, 0.19]} rotation={[0.14, 0.42, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.13, 0.42, 20]} />
        <meshStandardMaterial color="#0D0F14" roughness={0.48} metalness={0.14} />
      </mesh>
      <mesh position={[-0.45, 1.9, 0.18]} rotation={[0.14, 0.42, 0]} castShadow>
        <torusGeometry args={[0.23, 0.018, 10, 24]} />
        <meshStandardMaterial color="#1A1C24" roughness={0.56} />
      </mesh>
    </group>
  );
}

function DustParticles(): React.JSX.Element {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 70;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.2) * 11;
      pos[i * 3 + 1] = Math.random() * 4.4 + 0.2;
      pos[i * 3 + 2] = (Math.random() - 0.55) * 6.2;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    if (!attr) return;
    const pos = attr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1]! += 0.00065;
      if (pos[i * 3 + 1]! > 4.8) pos[i * 3 + 1] = 0.15;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#F6F1EA"
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.42}
        depthWrite={false}
      />
    </points>
  );
}

type DeskSceneProps = {
  groupRef: MutableRefObject<THREE.Group | null>;
};

function DeskScene({ groupRef, nav }: DeskSceneProps & { nav: RoomNav }): React.JSX.Element {
  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    gsap.from(group.scale, {
      x: 0.74,
      y: 0.74,
      z: 0.74,
      duration: 1.6,
      ease: 'elastic.out(1, 0.55)',
      delay: 0.4,
    });
  }, [groupRef]);

  return (
    <group ref={groupRef} position={[1.86, 0.22, -0.22]} rotation={[-0.04, -0.05, 0]} scale={0.92}>
      <Floor />
      <BackWall />
      <DeskSurface />
      <DeskMat />
      <MicrophoneArm />
      <RingLight />

      <Hotspot href="/brand" label="brand kit" nav={nav}>
        <group scale={1.28}>
          <LaptopOnStand />
        </group>
      </Hotspot>

      <Hotspot href="/work" label="work" nav={nav}>
        <MainMonitor />
      </Hotspot>

      <group scale={0.88}>
        <Keyboard />
      </group>
      <ComputerMouse />
      <CoffeeMug />
      <SlothLamp />

      <Hotspot href="/about" label="about me" nav={nav}>
        <SlothStand />
      </Hotspot>

      <Plant position={[3.65, 0.09, -0.8]} scale={1.2} />

      <Hotspot href="/schedule" label="schedule" nav={nav}>
        <HeadphoneStand />
      </Hotspot>
    </group>
  );
}

function HeroSceneContents({
  groupRef,
  nav,
}: DeskSceneProps & { nav: RoomNav }): React.JSX.Element {
  // Silky idle life: the whole desk gently leans toward the pointer and
  // breathes with a slow float, so the scene never feels frozen between drags.
  const BASE_ROT_X = -0.04;
  const BASE_ROT_Y = -0.05;
  const BASE_POS_Y = 0.22;
  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const targetY = BASE_ROT_Y + state.pointer.x * 0.07;
    const targetX = BASE_ROT_X - state.pointer.y * 0.045;
    // critically-damped lerp → smooth, no stutter
    g.rotation.y += (targetY - g.rotation.y) * 0.05;
    g.rotation.x += (targetX - g.rotation.x) * 0.05;
    g.position.y = BASE_POS_Y + Math.sin(t * 0.7) * 0.018;
  });

  return (
    <>
      <ambientLight color="#FFF9F4" intensity={1.7} />
      <hemisphereLight color="#FFFDF9" groundColor="#D8D3F2" intensity={0.78} />
      <directionalLight
        color="#FFF7F0"
        intensity={2.3}
        position={[-3.2, 6.1, 4.8]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0004}
        shadow-normalBias={0.022}
        shadow-radius={4}
        shadow-camera-near={0.5}
        shadow-camera-far={30}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={7}
        shadow-camera-bottom={-5}
      />
      <directionalLight color="#CBB8FF" intensity={1.05} position={[4.8, 2.8, 2.8]} />
      <pointLight position={[-2.3, 2.3, 2.6]} color="#FFF9F4" intensity={1.7} distance={7.2} />
      <pointLight position={[2.1, 0.58, 0.72]} color="#8B58FF" intensity={2.2} distance={4.6} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        minAzimuthAngle={-0.45}
        maxAzimuthAngle={0.3}
        minPolarAngle={0.9}
        maxPolarAngle={1.3}
        target={[0.7, 0.88, 0.15]}
      />
      <DeskScene groupRef={groupRef} nav={nav} />
      <DustParticles />
    </>
  );
}

type RoomSceneProps = {
  onCreated?: (state: RootState) => void;
  nav: RoomNav;
};

/**
 * RoomScene — Neluška's cozy desk, ported from neluska-web.
 * Self-contained R3F Canvas (camera + renderer config inlined from the
 * original scene.config). Transparent so the CSS gradient shows through.
 */
export function RoomScene({ onCreated, nav }: RoomSceneProps): React.JSX.Element {
  const groupRef = useRef<THREE.Group | null>(null);

  return (
    <Canvas
      style={{ width: '100%', height: '100%', display: 'block' }}
      dpr={[1, 2]}
      shadows="soft"
      camera={{ fov: 50, near: 0.1, far: 100, position: [0, 2.8, 6.5] }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      onCreated={onCreated}
    >
      <Suspense fallback={null}>
        <HeroSceneContents groupRef={groupRef} nav={nav} />
      </Suspense>
    </Canvas>
  );
}
