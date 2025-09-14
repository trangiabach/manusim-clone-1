import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  const Logo = (
    <Link href="/" className="flex shrink-0 items-center gap-2">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59fcd347-4034-4621-b284-f184b60d5437-manus-im/assets/icons/icon-2.png?"
        alt="Manus logo icon"
        width={29}
        height={38}
      />
      <span className="text-[28px] font-medium leading-none tracking-tight text-primary">
        manus
      </span>
    </Link>
  );

  const AuthButtonsDesktop = (
    <div className="flex items-center gap-2">
      <Link
        href="#"
        className="flex h-9 min-w-[74px] items-center justify-center rounded-[10px] bg-primary px-3 py-2 text-sm font-medium text-primary-foreground duration-300 hover:opacity-80"
      >
        Sign in
      </Link>
      <Link
        href="#"
        className="flex h-9 min-w-[64px] items-center justify-center rounded-[10px] border border-border px-3 py-2 text-sm font-medium text-primary duration-300 hover:opacity-80"
      >
        Sign up
      </Link>
    </div>
  );
  
  const AuthButtonsMobile = (
    <div className="flex items-center gap-2">
      <Link
        href="#"
        className="flex h-9 min-w-[74px] items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground duration-300 hover:opacity-80"
      >
        Sign in
      </Link>
      <Link
        href="#"
        className="flex h-9 min-w-[76px] items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-primary duration-300 hover:opacity-80"
      >
        Sign up
      </Link>
    </div>
  );

  return (
    <header className="w-full bg-background">
      {/* Desktop Header */}
      <div className="hidden items-center gap-10 px-6 py-[10px] md:flex">
        {Logo}
        <div className="flex flex-1 items-center justify-between">
          <nav className="flex gap-10" />
          {AuthButtonsDesktop}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-[10px] sm:py-[19px] md:hidden">
        {Logo}
        {AuthButtonsMobile}
      </div>
    </header>
  );
};

export default Header;