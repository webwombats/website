import { FC } from "react";

import Title from "@components/title";

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
        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-azure-radiance">
          <img className="h-6 w-6 md:w-auto md:h-auto" src={logoSrc} />
        </div>
      </div>
      <div className="ml-4">
        <h5 className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
          {title}
        </h5>
        <p className="mt-2 text-base md:text-lg text-body-font-color">
          {description}
        </p>
      </div>
    </div>
  </li>
);

const TechStack = () => (
  <section className="py-10 sm:py-12 md:py-16 lg:py-20">
    <div className="container mx-auto px-6 md:px-0">
      <Title
        subtitle="What we do"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem vero ea magni asperiores, officiis quis cum odio in sit dicta qui voluptatibus placeat nulla? Quae quo quasi labore in."
      >
        JavaScript is our stack!
      </Title>

      <ul className="flex flex-col md:flex-row flex-wrap md:justify-center">
        {techStack.map(item => (
          <TechStackItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  </section>
);

export default TechStack;
