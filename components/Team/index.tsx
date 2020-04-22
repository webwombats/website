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
  <div className="px-6 shadow-xl rounded-lg">
    <div className="flex justify-center">
      <img
        alt={fullName}
        src={photoUrl}
        className="shadow-xl rounded-full h-auto align-middle -m-16"
        style={{ maxWidth: "150px", maxHeight: "150px" }}
      />
    </div>

    <div className="text-center mt-20">
      <h3 className="text-4xl font-bold leading-normal mb-2 text-white">
        {fullName}
      </h3>
      <div className="mt-3 text-body-font-color">{title}</div>
      <div className="mt-2 text-body-font-color">
        Worked at: {workPlaces.map(workPlace => workPlace).join(", ")}
      </div>
    </div>
    {/*
    <div className="text-center mt-20">
      <p className="text-body-font-color">
        Worked at: {workPlaces.map(workPlace => workPlace).join(", ")}
      </p>
    </div> */}

    <div className="mt-10 py-10 border-t border-tundora text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4">
          <p className="mb-4 text-lg leading-relaxed text-white">
            {description}
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
        <p className="mt-1 text-sm md:text-base text-body-font-color">
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
              <a className="text-body-font-color hover:text-gray-200">Bio</a>
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
        className="border border-tundora bg-background-color"
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
      <Title
        subtitle="Meet us"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem vero ea magni asperiores, officiis quis cum odio in sit dicta qui voluptatibus placeat nulla? Quae quo quasi labore in."
      >
        We are the Web Wombats!
      </Title>

      <div className="grid grid-cols-2 col-gap-3 row-gap-12 sm:row-gap-6 md:grid-cols-3 md:gap-12">
        {wombats.map(wombat => (
          <WombatProfile {...wombat} key={wombat.id} />
        ))}
      </div>
      <div className="lg:px-16 mt-12 sm:mt-16 text-sm md:text-base text-body-font-color text-center self-center">
        Need more people in the team, hah? Let us know and we'll figure
        something out!
      </div>
    </div>
  </section>
);

export default Team;
