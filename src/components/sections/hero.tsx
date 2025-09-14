import React from 'react';

const HeroSection = () => {
  return (
    <section className="mx-auto w-full sm:max-w-[768px] sm:min-w-[390px] mt-[16vh] max-md:px-4">
      <div className="w-full flex flex-col justify-start items-start gap-5">
        <div className="w-full pl-4 pb-4">
          <h1 className="font-display text-5xl font-normal text-text-primary leading-tight">
            Hello
          </h1>
          <h2 className="font-display text-[32px] font-normal text-text-secondary leading-tight">
            What can I do for you?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;