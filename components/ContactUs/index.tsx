const ContactUs = () => (
  <>
    <div className="container mx-auto px-4 py-24">
      <section className="pb-20 relative block">
        {/* <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div> */}

        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">
              Let's Build Great Things Together
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-medal text-xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              Lorem ipsum
            </h6>
            <p className="mt-2 mb-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-poll text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Lorem ipsum
            </h5>
            <p className="mt-2 mb-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-lightbulb text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Lorem ipsum
            </h5>
            <p className="mt-2 mb-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      <section className="relative block">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Want to work with us?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-white text-xl">
                  Shoot us a message at{" "}
                  <a
                    href="mailto:hi@webwombats.com"
                    className="text-red-600 hover:text-red-700"
                  >
                    hi@webwombats.com
                  </a>{" "}
                  or complete the form below and we will get back to you as soon
                  as possible.
                </p>

                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-500 text-black bg-gray-400 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-500 text-black bg-gray-400 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    cols={80}
                    className="px-3 py-3 placeholder-gray-500 text-black bg-gray-400 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Type a message..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ContactUs;
