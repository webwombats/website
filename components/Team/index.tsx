import { FC } from "react";
import Link from "next/link";

import { wombats, Wombat } from "@data";
import Title from "@components/title";

const WombatProfile: FC<Wombat> = ({
  name,
  fullName,
  title,
  photoUrl,
  social
}) => (
  <div>
    <img
      alt={fullName}
      src={photoUrl || ""}
      className="shadow-lg rounded-full max-w-full mx-auto"
      style={{ maxWidth: 150 }}
    />
    <div className="pt-3 text-center">
      <h5 className="text-2xl font-bold">{fullName}</h5>
      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
        {title}
      </p>
      <div className="mt-2">
        <p>
          <a
            href={`https://github.com/${social.github}`}
            className="hover:underline"
          >
            @{social.github}
          </a>
          <span className="px-3">|</span>
          <Link href="/about/[name]" as={`/about/${name}`}>
            <a className="text-gray-500 hover:text-gray-200">Bio</a>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

const Team = () => (
  <section className="py-10 sm:py-12 md:py-16 lg:py-20">
    <div className="container mx-auto px-4">
      <Title>Meet us. We are the Web Wombats!</Title>

      <div className="grid grid-cols-2 col-gap-3 row-gap-6 md:grid-cols-3 md:gap-12">
        {wombats.map(wombat => (
          <WombatProfile {...wombat} key={wombat.id} />
        ))}
      </div>
      <div className="lg:px-16 mt-12 sm:mt-16 text-sm sm:text-lg text-center self-center">
        Need more people in the team, hah? Let us know and we'll figure
        something out!
      </div>
    </div>
  </section>
);

export default Team;
