import { FC } from "react";

import { WorkPlace, workPlaces } from "@data";
import Title from "@components/title";

const WorkPlaceComponent: FC<{ workPlace: WorkPlace }> = ({ workPlace }) => (
  <div className="w-full p-4 md:w-auto flex justify-center">
    {workPlace.logo}
  </div>
);

const WorkExperience = () => (
  <section className="py-10 sm:py-12 md:py-16 lg:py-20">
    <div className="container mx-auto px-6 md:px-0">
      <Title subtitle="Started working as employees and freelancers of different startups and enterprise organizations, we gained experience and chose to unite for even bigger projects. During the last years, we participated in numerous projects as an independent and capable engineering squad.">
        We have collaborated with
      </Title>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 items-center">
        {workPlaces.map(workPlace => (
          <WorkPlaceComponent workPlace={workPlace} key={workPlace.id} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;
