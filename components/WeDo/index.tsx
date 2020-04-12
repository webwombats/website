import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import Title from "@components/title";

// lg:-mt-96
const WeDo = () => (
  <div className="flex flex-wrap items-center py-10 sm:py-12 md:py-16 lg:py-20">
    <Title subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem vero ea magni asperiores, officiis quis cum odio in sit dicta qui voluptatibus placeat nulla? Quae quo quasi labore in.">
      We married JavaScript
    </Title>
    {/* <LeftBlock /> */}
    <RightBlock />
  </div>
);

export default WeDo;
