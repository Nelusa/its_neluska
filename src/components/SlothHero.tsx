import { Sloth } from "@/components/Sloth";

export function SlothHero() {
  return (
    <div className="animate-bob motion-reduce:animate-none">
      <Sloth variant="balloons" size={124} rotate={-8} />
    </div>
  );
}
