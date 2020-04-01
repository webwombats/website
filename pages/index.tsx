import SocialMeta from "@components/social-meta";
import PageContainer from "@components/page-container";
import Nav from "@components/nav";
import Hero from "@components/Hero";
import WeDo from "@components/WeDo";
import WorkExperience from "@components/WorkExperience";
import Team from "@components/Team";
import ContactUs from "@components/ContactUs";
import Footer from "@components/Layout/Footer";

const IndexPage = () => (
  <PageContainer title="Web Wombats - Our slogan here">
    <SocialMeta
      image="/og-cards/home.jpg"
      title="Web Wombats - Our slogan here"
      url="https://webwombats.com"
      description="Company description here"
    />

    <div className="leading-normal tracking-normal bg-black text-white">
      <Nav />
      <Hero />
      <WeDo />
      <WorkExperience />
      <Team />
      <ContactUs />

      <Footer />
    </div>
  </PageContainer>
);

export default IndexPage;
