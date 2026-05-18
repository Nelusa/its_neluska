import { IGPhoneFrame } from "./IGPhoneFrame";
import { IGPostDetail } from "./IGPostDetail";
import { IGProfile } from "./IGProfile";
import { IGStoryView } from "./IGStoryView";

export function IGShowcase() {
  const views = [
    {
      label: "profile · grid view",
      content: <IGProfile />,
    },
    {
      label: "post · detail view",
      content: <IGPostDetail />,
    },
    {
      label: "story · fullscreen",
      content: <IGStoryView />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-9 py-5">
      {views.map((view) => (
        <div key={view.label} className="text-center">
          <IGPhoneFrame>{view.content}</IGPhoneFrame>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
            {view.label}
          </div>
        </div>
      ))}
    </div>
  );
}
