import { FC, useState } from "react";
// import Link from "next/link";
import { Dialog } from "@reach/dialog";

import Title from "@components/title";

import { wombats, Wombat } from "@data";

const DialogContent: FC<Wombat> = ({
  fullName,
  title,
  description,
  photoUrl,
  workPlaces
}) => (
  <div className="relative flex flex-col min-w-0 break-words w-full shadow-xl rounded-lg">
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <div className="relative">
            <img
              alt={fullName}
              src={photoUrl}
              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
          {/* <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div> */}
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-1">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            {/* <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div> */}
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <h3 className="text-4xl font-bold leading-normal mb-2 text-white mb-2">
          {fullName}
        </h3>
        <div className="mb-2 text-gray-500">{title}</div>
      </div>

      <div className="mt-10 py-10 border-t border-gray-800 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-white">
              {description}
            </p>
          </div>
        </div>

        <div>
          <p className="text-gray-500">
            Worked at: {workPlaces.map(workPlace => workPlace).join(", ")}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const WombatProfile: FC<Wombat> = wombat => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <img
        alt={wombat.fullName}
        src={wombat.photoUrl || ""}
        className="shadow-lg rounded-full max-w-3xs sm:max-w-2xs mx-auto"
      />
      <div className="pt-3 text-center">
        <h5 className="text-2xl font-bold leading-tight tracking-tight">
          {wombat.fullName}
        </h5>
        <p className="mt-1 text-sm md:text-base text-gray-500 font-semibold">
          {wombat.title}
        </p>
        <div className="mt-1 text-base">
          <p>
            <a
              href={`https://github.com/${wombat.social.github}`}
              className="underline hover:no-underline"
            >
              @{wombat.social.github}
            </a>
            <span className="px-3">|</span>
            {/* <Link href="/about/[name]" as={`/about/${name}`}>
              <a className="text-gray-500 hover:text-gray-200">Bio</a>
            </Link> */}
            <button
              onClick={open}
              className="text-white underline hover:no-underline"
            >
              Bio
            </button>
          </p>
        </div>
      </div>

      <Dialog
        className="border border-gray-800 bg-black"
        isOpen={showDialog}
        onDismiss={close}
        aria-label="Bio information"
      >
        <DialogContent {...wombat} />
      </Dialog>
    </div>
  );
};

const Team = () => (
  <section className="py-10 sm:py-12 md:py-16 lg:py-20">
    <div className="container mx-auto px-6 md:px-0">
      <Title subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem vero ea magni asperiores, officiis quis cum odio in sit dicta qui voluptatibus placeat nulla? Quae quo quasi labore in.">
        Meet us. We are the Web Wombats!
      </Title>

      <div className="grid grid-cols-2 col-gap-3 row-gap-12 sm:row-gap-6 md:grid-cols-3 md:gap-12">
        {wombats.map(wombat => (
          <WombatProfile {...wombat} key={wombat.id} />
        ))}
      </div>
      <div className="lg:px-16 mt-12 sm:mt-16 text-sm md:text-base text-gray-500 text-center self-center">
        Need more people in the team, hah? Let us know and we'll figure
        something out!
      </div>
    </div>
  </section>
);

export default Team;
