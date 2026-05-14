import type { ReactNode } from "react";

export function IGPhoneFrame({
  children,
  width = 320,
}: {
  children: ReactNode;
  width?: number;
}) {
  const height = width * 2.16;

  return (
    <div
      className="relative"
      style={{
        width,
        height,
        borderRadius: 44,
        background: "#1a0f28",
        padding: 10,
        boxShadow:
          "0 30px 60px rgba(42,16,63,0.3), 0 0 0 1px rgba(42,16,63,0.2)",
      }}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-white">
        <div className="absolute left-1/2 top-2 z-50 h-[26px] w-[100px] -translate-x-1/2 rounded-[20px] bg-black" />
        <div
          className="flex h-11 shrink-0 items-center justify-between px-6 text-[13px] font-semibold"
          style={{ fontFamily: "-apple-system, system-ui" }}
        >
          <span>9:41</span>
          <span className="w-[100px]" />
          <span className="tracking-[1px]">●●●●</span>
        </div>
        {children}
      </div>
    </div>
  );
}
