import { FC } from "react";

import { techStack } from "@data";

const Card: FC<{
  id: number;
  title: string;
  description: string;
  logoSrc: string;
  bgColor: string;
}> = ({ title, description, logoSrc, bgColor }) => (
  <div className={`${bgColor} shadow-lg rounded-lg text-center p-8 mt-8`}>
    <img
      alt={title}
      src={logoSrc}
      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
    />
    <p className="text-lg text-white mt-4 font-bold">{title}</p>
    <p className="text-base text-white opacity-75 mt-2">{description}</p>
  </div>
);

const RightBlock = () => (
  <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
    <div className="flex flex-wrap justify-center relative">
      <div className="my-4 w-full lg:w-6/12 px-4">
        {techStack.block.left.map(card => (
          <Card {...card} key={card.id} />
        ))}
      </div>
      <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
        {techStack.block.right.map(card => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </div>

    {/* https://tailwindcss.com/docs/controlling-file-size#writing-purgeable-html */}
    <span
      className="bg-pink-800 bg-purple-800 bg-yellow-800
     bg-teal-800 bg-red-800 bg-gray-800"
    />
  </div>
);

export default RightBlock;
