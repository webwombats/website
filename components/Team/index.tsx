import { FC, useState } from "react";
// import Link from "next/link";
import { Dialog } from "@reach/dialog";

import Title from "@components/title";

import { wombats, Wombat } from "@data";

const DialogContent: FC<{
  wombat: Wombat;
  close: () => void;
}> = ({
  wombat: {
    fullName,
    title,
    description,
    photoUrl,
    workPlaces,
    basedIn,
    social
  },
  close
}) => (
  <div className="px-6 shadow-xl rounded-lg relative">
    <div className="flex justify-center">
      <img
        alt={fullName}
        src={photoUrl}
        className="shadow-xl rounded-full h-auto align-middle -m-16"
        style={{
          width: "150px",
          maxWidth: "150px",
          height: "150px",
          maxHeight: "150px"
        }}
      />
    </div>

    <div className="text-center mt-20">
      <h3 className="text-4xl font-bold leading-normal text-white">
        {fullName}

        <img
          decoding="async"
          src={`/icons/${basedIn.code.toLowerCase()}.svg`}
          alt={`Based in ${basedIn.fullName}`}
          title={`Based in ${basedIn.fullName}`}
          className="w-5 h-5 inline-block ml-3"
        />
      </h3>
      <div className="text-white text-lg">{title}</div>
      <div className="mt-2 text-body-font-color">
        Worked at: {workPlaces.map(workPlace => workPlace).join(", ")}
      </div>
    </div>

    <div className="mt-10 py-10 border-t border-tundora text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4">
          <p className="mb-4 text-lg leading-relaxed text-white">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-white text-center">
          {social.linkedIn && (
            <span>
              <a
                href={`https://www.linkedin.com/in/${social.linkedIn}`}
                className="underline hover:no-underline focus:outline-none mr-6"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LinkedIn
              </a>
            </span>
          )}

          {social.github && (
            <span>
              <a
                href={`https://github.com/${social.github}`}
                className="underline hover:no-underline focus:outline-none mr-6"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                GitHub
              </a>
            </span>
          )}

          {social.twitter && (
            <span>
              <a
                href={`https://twitter.com/${social.twitter}`}
                className="underline hover:no-underline focus:outline-none mr-6"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
            </span>
          )}

          {social.website && (
            <span>
              <a
                href={social.website}
                className="underline hover:no-underline focus:outline-none"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Personal Website
              </a>
            </span>
          )}
        </p>
      </div>
    </div>

    <button
      className="absolute top-2 right-2 md:top-2 md:right-0 px-2 py-1 md:px-6 md:py-2
        text-white border-none focus:outline-none text-body-font-color hover:text-white"
      onClick={close}
    >
      Close
    </button>
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
        className="shadow-lg rounded-full max-w-3xs sm:max-w-2xs mx-auto cursor-pointer"
        onClick={open}
      />
      <div className="pt-3 text-center">
        <h5 className="text-2xl font-bold leading-tight tracking-tight">
          {wombat.fullName}

          <img
            decoding="async"
            src={`/icons/${wombat.basedIn.code.toLowerCase()}.svg`}
            alt={`Based in ${wombat.basedIn.fullName}`}
            title={`Based in ${wombat.basedIn.fullName}`}
            className="w-4 h-4 inline-block ml-3"
          />
        </h5>
        <p className="mt-1 text-sm md:text-base text-body-font-color">
          {wombat.title}
        </p>

        <button
          className="text-white font-bold text-base tracking-wide uppercase hover:opacity-50 transition-opacity
            duration-300 ease-in-out rounded-full cursor-pointer px-4 bg-cod-gray mt-3 border-none whitespace-no-wrap"
          onClick={open}
        >
          Bio
          {/* <div className="inline-block relative w-3 ml-2 -mr-2">
            <svg
              viewBox="0 0 36 36"
              fill="currentcolor"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit={1.414}
              // style="fill: currentcolor; fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421;"
            >
              <path d="M19.5 18L8.893 7.393a3 3 0 014.243-4.242L27.985 18l-4.242 4.243-10.607 10.606a3 3 0 11-4.243-4.242L19.5 18z"></path>
            </svg>
          </div> */}
        </button>
      </div>

      {showDialog && (
        <Dialog
          className="border border-tundora bg-background-color"
          onDismiss={close}
          aria-label="Bio information"
        >
          <DialogContent wombat={wombat} close={close} />
        </Dialog>
      )}
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
