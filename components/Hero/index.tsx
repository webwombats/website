const Hero = () => (
  <>
    <section className="py-16 md:py-20 px-6 md:px-0 h-screen border-b border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center text-center items-center">
          <div className="w-full w-full lg:w-8/12 justify-center items-start text-center">
            <div className="pb-12 md:pb-16 mx-auto lg:mx-0">
              <p className="uppercase tracking-widest text-2xl md:text-3xl">
                WEB WOMBATS
              </p>
            </div>

            <p className="uppercase tracking-wider w-full text-indigo-500">
              Our mission
            </p>

            <h1 className="mt-4 mb-8 md:mb-10 text-3xl md:text-6xl font-bold leading-none tracking-tight">
              Main Hero Message to sell ourselfs!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8">
              {/* We're a team of skilled individuals, always striving for the best
            solution. We think big, and make projects successful. */}
              We're a team of 6 skilled individuals{" "}
              <strong>building software</strong> for enterprise organizations
              and applications for startups.
            </p>

            {/* <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Lorem ipsum
            </button> */}
          </div>
        </div>

        {/* <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src="hero.png" />
        </div> */}
      </div>
    </section>
  </>
);

export default Hero;
