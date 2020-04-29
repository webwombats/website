import { FC } from "react";

import { WorkPlace, workPlaces } from "@data";
import Title from "@components/title";

const WorkPlaceComponent: FC<{ workPlace: WorkPlace }> = ({ workPlace }) => (
  <div className="flex justify-center p-4 md:p-8 w-1/2 sm:max-w-64">
    {workPlace.logo}
  </div>
);

const WorkExperience = () => (
  <section className="pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
    <div className="container mx-auto px-6 md:px-0">
      <Title
        subtitle="We've built a lot of stuff"
        description="Started working as employees and freelancers of different startups and enterprise organizations, we gained experience and chose to unite for even bigger projects. During the last years, we participated in numerous projects as an independent and capable engineering squad."
      >
        Our Work Experience
      </Title>

      <div className="flex justify-center flex-wrap">
        {workPlaces.map(workPlace => (
          <WorkPlaceComponent workPlace={workPlace} key={workPlace.id} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;
