import { FC } from "react";

const Title: FC<{ subtitle?: string; description?: string }> = ({
  children,
  subtitle,
  description
}) => (
  <div className="flex flex-wrap justify-center text-center mb-6 sm:mb-16">
    <div className="w-full lg:w-8/12 px-4">
      {subtitle && (
        <h5 className="text-body-font-color uppercase text-lg mb-2 font-semibold">
          {subtitle}
        </h5>
      )}
      <h2 className="mb-6 text-4xl md:text-5xl font-semibold tracking-tight leading-none">
        {children}
      </h2>
      {description && (
        <p className="text-base md:text-lg leading-relaxed text-body-font-color">
          {description}
        </p>
      )}
    </div>
  </div>
);

export default Title;
