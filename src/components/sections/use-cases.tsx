import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const UseCasesSection = () => {
  return (
    <section
      // This wrapper provides spacing and a positioning context for the link.
      // The original site uses a higher-level relative container, but adding `relative`
      // here makes the component more self-contained and robust.
      className="relative mx-auto mt-[112px] w-full max-w-[768px] pb-[100px] max-md:px-[16px] max-md:pb-[64px] sm:mt-[132px]"
    >
      <Link
        href="https://manus.im/usecase-from-user"
        className="absolute bottom-[10px] left-1/2 flex h-9 min-w-[42px] -translate-x-1/2 cursor-pointer items-center justify-center gap-[2px] p-1 transition-opacity duration-150 hover:opacity-80"
      >
        <span className="select-none text-[13px] leading-[18px] text-muted-foreground">
          Explore use cases
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </Link>
    </section>
  );
};

export default UseCasesSection;