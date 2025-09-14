`use client`;

import { useState, useRef, useEffect, type SVGProps, type ComponentType } from "react";
import { Paperclip, Image as ImageIcon, ArrowUp } from "lucide-react";

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

const SlidesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 1.33331H12C12.3682 1.33331 12.6667 1.63181 12.6667 2V5.33331H3.33333V2C3.33333 1.63181 3.63183 1.33331 4 1.33331Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6667 14.6667V10.6667H3.33333V14.6667"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6667 8H1.33333"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DocumentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.99984 1.33334H3.99984C3.63165 1.33334 3.33317 1.63182 3.33317 2.00001V14C3.33317 14.3682 3.63165 14.6667 3.99984 14.6667H11.9998C12.368 14.6667 12.6665 14.3682 12.6665 14V4.66668L9.99984 1.33334Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.6665 1.33334V5.00001H12.6665"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6665 8.66666H5.33317"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.6665 11.3333H5.33317"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Mode = "image" | "slides" | "document";

const modes: { id: Mode; icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { id: "image", icon: ImageIcon },
  { id: "slides", icon: SlidesIcon },
  { id: "document", icon: DocumentIcon },
];

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [activeMode, setActiveMode] = useState<Mode>("image");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "40px";
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [task]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative bg-background-primary">
        <div className="flex flex-col gap-3 rounded-[22px] transition-all relative bg-white py-3 shadow-[0px_12px_32px_0px_rgba(0,0,0,0.02)] border border-black/[.08]">
          <div className="overflow-y-auto pr-2 pl-4">
            <textarea
              ref={textareaRef}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Give Manus a task to work on..."
              className="flex rounded-md border-input focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden flex-1 p-0 w-full bg-transparent border-0 pt-[1px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-text-secondary text-[15px] shadow-none resize-none min-h-[40px]"
              rows={1}
            />
          </div>
          <div className="flex gap-2 px-3 items-center">
            <button className="rounded-full border border-border inline-flex items-center justify-center gap-1 cursor-pointer text-text-secondary hover:bg-accent w-8 h-8 p-0 flex-shrink-0">
              <Paperclip width={16} height={16} />
            </button>

            <ul className="border border-border bg-secondary h-8 p-[2px] flex items-center rounded-full">
              {modes.map((mode) => (
                <li key={mode.id} className="relative flex items-center h-full">
                  <button
                    onClick={() => setActiveMode(mode.id)}
                    data-active={activeMode === mode.id}
                    className="text-[13px] leading-[18px] font-normal text-text-muted hover:text-text-secondary data-[active=true]:text-text-primary data-[active=true]:font-medium transition-colors duration-200 relative z-10 h-full p-0 min-w-0"
                  >
                    <div className="h-full px-2.5 flex items-center justify-center">
                      <mode.icon width={16} height={16} />
                    </div>
                  </button>
                  {activeMode === mode.id && (
                    <div className="absolute inset-0 bg-white shadow-sm rounded-full z-0"></div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex gap-2 ml-auto">
              <button
                disabled={!task.trim()}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors bg-primary text-primary-foreground gap-[6px] text-sm rounded-full p-0 w-8 h-8 min-w-0 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:opacity-80"
              >
                <ArrowUp width={15} height={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;