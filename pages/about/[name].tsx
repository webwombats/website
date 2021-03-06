import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Profile from "@components/Profile";
import PageContainer from "@components/page-container";
import SocialMeta from "@components/social-meta";
import Footer from "@components/Layout/Footer";

import { wombats, Wombat } from "@data";

const AboutPage: NextPage<{ wombat: Wombat }> = ({ wombat }) => (
  <PageContainer title={`Web Wombats - ${wombat.fullName}`}>
    <SocialMeta
      image="/og-cards/home.jpg"
      title={`Web Wombats - ${wombat.fullName}`}
      url="https://webwombats.com"
      description={wombat.description}
    />

    <div className="leading-normal tracking-normal bg-black text-white">
      <Profile wombat={wombat} />

      <Footer />
    </div>
  </PageContainer>
);

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      wombat: wombats.find(wombat => wombat.name === context.params?.name)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = wombats.map(wombat => ({
    params: {
      name: wombat.name
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export default AboutPage;
