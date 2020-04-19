import { FC } from "react";

import { techStack } from "@data";

const TechStackItem: FC<{
  id: number;
  title: string;
  description: string;
  logoSrc: string;
}> = ({ title, description, logoSrc }) => (
  <li className="w-full md:w-96 md:px-5 mb-8">
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-blue-600">
          <img className="h-6 w-6 md:w-auto md:h-auto" src={logoSrc} />
        </div>
      </div>
      <div className="ml-4">
        <h5 className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
          {title}
        </h5>
        <p className="mt-2 text-base md:text-lg text-gray-500 leading-snug">
          {description}
        </p>
      </div>
    </div>
  </li>
);

const TechStack = () => (
  <ul className="flex flex-col md:flex-row flex-wrap md:justify-center">
    {techStack.map(item => (
      <TechStackItem {...item} key={item.id} />
    ))}
  </ul>
);

export default TechStack;
