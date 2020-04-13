import { FC } from "react";

const Title: FC<{ subtitle?: string }> = ({ children, subtitle }) => (
  <div className="flex flex-wrap justify-center text-center mb-6 sm:mb-16">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold">{children}</h2>
      {subtitle && (
        <p className="text-lg leading-relaxed m-4 text-gray-500">{subtitle}</p>
      )}
    </div>
  </div>
);

export default Title;
