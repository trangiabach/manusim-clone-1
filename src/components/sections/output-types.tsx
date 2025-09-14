import React from 'react';
import { Image, Presentation, AppWindow, Sheet, BarChart2 } from 'lucide-react';

const outputTypesData = [
  { name: 'Image', icon: Image },
  { name: 'Slides', icon: Presentation },
  { name: 'Webpage', icon: AppWindow },
  { name: 'Spreadsheet', icon: Sheet },
  { name: 'Visualization', icon: BarChart2 },
  { name: 'More', icon: null },
];

const OutputTypes = () => {
  return (
    <div className="relative mt-[27px] w-full">
      <div className="relative w-full scale-100 translate-y-0 opacity-100 transition-transform ease-[cubic-bezier(0.23,1,0.32,1)]">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {outputTypesData.map(({ name, icon: Icon }) => (
              <div
                key={name}
                role="button"
                className="flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-border px-[14px] py-[7px] text-[var(--text-primary)] hover:bg-accent"
              >
                {Icon && (
                  <div className="relative h-4 w-4 overflow-hidden">
                    <Icon className="h-4 w-4" />
                  </div>
                )}
                <div className="flex items-center justify-start gap-1">
                  <span className="text-sm font-normal">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputTypes;