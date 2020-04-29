import { NextPage } from "next";

import SocialMeta from "@components/social-meta";
import PageContainer from "@components/page-container";
import Hero from "@components/Hero";
import WorkExperience from "@components/WorkExperience";
import Team from "@components/Team";
import Footer from "@components/Layout/Footer";
import TechStack from "@components/Hero/TechStack";

import { wombats } from "@data";

const IndexPage: NextPage = () => (
  <PageContainer title="Web Wombats - We do the Full Stack">
    <SocialMeta
      image="/og-cards/home.jpg"
      title="Web Wombats - We do the Full Stack"
      url="https://webwombats.com"
      description={`We are a team of ${wombats.length} skilled individuals building software for enterprise organizations and applications for startups.`}
    />

    <div className="leading-normal tracking-normal bg-background-color text-white">
      <Hero />
      <WorkExperience />
      <TechStack />
      <Team />
      <Footer />
    </div>
  </PageContainer>
);

export default IndexPage;
