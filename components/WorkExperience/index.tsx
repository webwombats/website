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
    {/* <Title>Lucky Guys We've Worked With</Title> */}
    <Title subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem vero ea magni asperiores, officiis quis cum odio in sit dicta qui voluptatibus placeat nulla? Quae quo quasi labore in.">
      We have collaborated with
    </Title>

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 items-center">
        {workPlaces.map(workPlace => (
          <WorkPlaceComponent workPlace={workPlace} key={workPlace.id} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;
