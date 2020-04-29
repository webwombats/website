import { wombats } from "@data";

const Hero = () => (
  <>
    <section className="py-16 px-6 md:px-0 min-h-screen border-b border-tundora">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center text-center items-center">
          <div className="w-full w-full lg:w-8/12 justify-center items-start text-center">
            <div className="pb-12 md:pb-40 mx-auto lg:mx-0">
              <p className="uppercase tracking-widest font-bold text-3xl md:text-4xl">
                WEB WOMBATS
              </p>
            </div>

            <h5 className="text-body-font-color uppercase text-lg mb-2 font-semibold">
              Our mission
            </h5>

            <h1 className="mt-4 mb-8 md:mb-10 text-4xl md:text-6xl font-bold leading-none tracking-tight">
              Main Hero Message to sell ourselfs!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-12 md:mb-16">
              We're a team of {wombats.length} skilled individuals{" "}
              <strong>building software</strong> for enterprise organizations
              and applications for startups.
            </p>

            <button className="mx-auto lg:mx-0 hover:opacity-75 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
