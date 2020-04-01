import { FC } from "react";
const Tag = () => (
  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
    Lorem ipsum
  </span>
);

const LeftBlock: FC = () => (
  <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
    {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
      <i className="fas fa-drafting-compass text-xl"></i>
    </div> */}
    <h3 className="text-3xl mb-2 font-semibold leading-normal">
      We do the Full Stack and more.
    </h3>
    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-300">
      There is an opinion that JavaScript is a scripting language for creating
      the effects of falling snowflakes on your sites. We prove this opinion
      wrong!
    </p>
    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore.
    </p>
    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore.
    </p>
    <div className="block pb-6">
      <Tag />
      <Tag />
    </div>
  </div>
);

export default LeftBlock;
