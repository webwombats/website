import { FC } from "react";

import { workPlaces } from "@data";
import Title from "@components/title";

const WorkPlace: FC<{ workPlace: any }> = ({ workPlace }) => (
  <div className="w-full p-4 md:w-auto flex justify-center">
    {workPlace.logo}
  </div>
);

const WorkExperience = () => (
  <section className="border-b border-gray-900 py-24">
    <Title>Lucky Guys We've Worked With</Title>

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 items-center">
        {workPlaces.map(workPlace => (
          <WorkPlace workPlace={workPlace} key={workPlace.id} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;
