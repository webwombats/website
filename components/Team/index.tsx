import { FC } from "react";
import Link from "next/link";

import { wombats, Wombat } from "@data";
import Title from "@components/title";

interface Props {
  data: Wombat[];
}
const WombatProfile: FC<Wombat> = ({
  name,
  fullName,
  title,
  description,
  from,
  basedIn,
  photoUrl,
  social
}) => (
  <div className="">
    <div className="">
      <img
        alt={fullName}
        src={
          photoUrl ||
          "https://demos.creative-tim.com/tailwindcss-starter-project/static/media/team-1-800x800.53033970.jpg"
        }
        className="shadow-lg rounded-full max-w-full mx-auto"
        style={{ maxWidth: 150 }}
      />
      <div className="pt-3 text-center">
        <h5 className="text-2xl font-bold">{fullName}</h5>
        {/* <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
          {title}
        </p> */}
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
        {/* <div className="mt-6">
          <button
            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i className="fab fa-facebook-square"></i>
          </button>
          <button
            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i className="fab fa-dribbble"></i>
          </button>
        </div> */}
      </div>
    </div>
  </div>
);

const Team = () => (
  <section className="border-b border-gray-900 py-24">
    <div className="container mx-auto px-4">
      <Title>Meet us. We are the Web Wombats!</Title>

      <div className="grid grid-cols-2 col-gap-3 row-gap-6 md:grid-cols-3 md:gap-12">
        {wombats.map(wombat => (
          <WombatProfile {...wombat} key={wombat.id} />
        ))}

        <div>Need more people, hah? Contact us and we'll figure it out!</div>
      </div>
    </div>
  </section>
);

export default Team;
