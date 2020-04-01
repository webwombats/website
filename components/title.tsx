import { FC } from "react";

const Title: FC = ({ children }) => (
  <div className="flex flex-wrap justify-center text-center mb-16">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold">{children}</h2>
      <p className="text-lg leading-relaxed m-4 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
    </div>
  </div>
);

export default Title;
