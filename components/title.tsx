import { FC } from "react";

const Title: FC<{ subtitle?: string }> = ({ children, subtitle }) => (
  <div className="flex flex-wrap justify-center text-center mb-6 sm:mb-16">
    <div className="w-full lg:w-8/12 px-4">
      <h2 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg leading-relaxed text-body-font-color">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

export default Title;
