import styled from "styled-components";

import Button from "../components/Button";
import Page from "../components/page";
import SocialMeta from "../components/social-meta";
import ProfileCard from "../components/ProfileCard";

import team from "../team";

const Hero = styled.section`
  background-color: #e9ebf6;
  border-bottom: 1px solid ${props => props.theme.color.accents.two};
  text-align: center;
  padding: 50px 0;
`;

const HeroWave = styled.svg`
  height: 6rem;
  width: 100%;
  display: block;

  @media (min-width: 1400px) {
    height: 12rem;
  }
`;

const HeroWrapper = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 750pt;
  padding-left: 16pt;
  padding-right: 16pt;
`;

const Logo = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.175rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 100px;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.9rem;
  color: ${props => props.theme.color.blue};
  margin: 0;
`;

const TeamSection = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
`;

const IndexPage = () => (
  <Page title="Web Wombats - Our slogan here">
    <SocialMeta
      image="/og-cards/home.jpg"
      title="Web Wombats - Our slogan here"
      url="https://webwombats.com"
      description="Company description here"
    />

    <div style={{ backgroundColor: "#F5F7FA" }}>
      <Hero id="hero">
        <HeroWrapper>
          <Logo>Web Wombats</Logo>
          <Eyebrow>Our mission</Eyebrow>
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              margin: "10px 0",
              lineHeight: "3.75rem"
            }}
          >
            We describe our mission here. Better take 2 rows.
          </h2>
          <h5 style={{ fontSize: "1.5rem", fontWeight: 400 }}>
            We're a team of skilled individuals,{" "}
            <span style={{ fontWeight: 700 }}>
              always striving for the best solution
            </span>
            .<br />
            We think big, and make projects successful.
          </h5>

          <Button href="#" invert>
            Meet The Team
          </Button>
        </HeroWrapper>
      </Hero>

      <HeroWave
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#E9EBF5"
          fillOpacity="1"
          d="M0,32L0,224L42.4,224L42.4,192L84.7,192L84.7,96L127.1,96L127.1,192L169.4,192L169.4,64L211.8,64L211.8,256L254.1,256L254.1,128L296.5,128L296.5,192L338.8,192L338.8,224L381.2,224L381.2,128L423.5,128L423.5,288L465.9,288L465.9,192L508.2,192L508.2,320L550.6,320L550.6,128L592.9,128L592.9,192L635.3,192L635.3,288L677.6,288L677.6,192L720,192L720,128L762.4,128L762.4,320L804.7,320L804.7,256L847.1,256L847.1,288L889.4,288L889.4,96L931.8,96L931.8,160L974.1,160L974.1,224L1016.5,224L1016.5,64L1058.8,64L1058.8,320L1101.2,320L1101.2,128L1143.5,128L1143.5,160L1185.9,160L1185.9,160L1228.2,160L1228.2,160L1270.6,160L1270.6,256L1312.9,256L1312.9,224L1355.3,224L1355.3,256L1397.6,256L1397.6,192L1440,192L1440,0L1397.6,0L1397.6,0L1355.3,0L1355.3,0L1312.9,0L1312.9,0L1270.6,0L1270.6,0L1228.2,0L1228.2,0L1185.9,0L1185.9,0L1143.5,0L1143.5,0L1101.2,0L1101.2,0L1058.8,0L1058.8,0L1016.5,0L1016.5,0L974.1,0L974.1,0L931.8,0L931.8,0L889.4,0L889.4,0L847.1,0L847.1,0L804.7,0L804.7,0L762.4,0L762.4,0L720,0L720,0L677.6,0L677.6,0L635.3,0L635.3,0L592.9,0L592.9,0L550.6,0L550.6,0L508.2,0L508.2,0L465.9,0L465.9,0L423.5,0L423.5,0L381.2,0L381.2,0L338.8,0L338.8,0L296.5,0L296.5,0L254.1,0L254.1,0L211.8,0L211.8,0L169.4,0L169.4,0L127.1,0L127.1,0L84.7,0L84.7,0L42.4,0L42.4,0L0,0L0,0Z"
        ></path>
      </HeroWave>

      <TeamSection>
        {team.map(member => (
          <ProfileCard data={member} key={member.id} />
        ))}
      </TeamSection>

      <div>
        {/* <HeroWave
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#E9EBF5"
          fillOpacity="1"
          d="M0,224L0,224L43.6,224L43.6,0L87.3,0L87.3,224L130.9,224L130.9,224L174.5,224L174.5,32L218.2,32L218.2,256L261.8,256L261.8,128L305.5,128L305.5,224L349.1,224L349.1,320L392.7,320L392.7,32L436.4,32L436.4,192L480,192L480,192L523.6,192L523.6,64L567.3,64L567.3,32L610.9,32L610.9,128L654.5,128L654.5,224L698.2,224L698.2,160L741.8,160L741.8,32L785.5,32L785.5,96L829.1,96L829.1,128L872.7,128L872.7,192L916.4,192L916.4,224L960,224L960,256L1003.6,256L1003.6,128L1047.3,128L1047.3,128L1090.9,128L1090.9,128L1134.5,128L1134.5,256L1178.2,256L1178.2,192L1221.8,192L1221.8,288L1265.5,288L1265.5,64L1309.1,64L1309.1,224L1352.7,224L1352.7,32L1396.4,32L1396.4,160L1440,160L1440,320L1396.4,320L1396.4,320L1352.7,320L1352.7,320L1309.1,320L1309.1,320L1265.5,320L1265.5,320L1221.8,320L1221.8,320L1178.2,320L1178.2,320L1134.5,320L1134.5,320L1090.9,320L1090.9,320L1047.3,320L1047.3,320L1003.6,320L1003.6,320L960,320L960,320L916.4,320L916.4,320L872.7,320L872.7,320L829.1,320L829.1,320L785.5,320L785.5,320L741.8,320L741.8,320L698.2,320L698.2,320L654.5,320L654.5,320L610.9,320L610.9,320L567.3,320L567.3,320L523.6,320L523.6,320L480,320L480,320L436.4,320L436.4,320L392.7,320L392.7,320L349.1,320L349.1,320L305.5,320L305.5,320L261.8,320L261.8,320L218.2,320L218.2,320L174.5,320L174.5,320L130.9,320L130.9,320L87.3,320L87.3,320L43.6,320L43.6,320L0,320L0,320Z"
        ></path>
      </HeroWave> */}
        <p>
          contact@webwombats.com — Copyright © 2020 Web Wombats. All rights
          reserved.
        </p>
      </div>
    </div>
  </Page>
);

export default IndexPage;
