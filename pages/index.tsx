import styled from "styled-components";

import Button from "../components/Button";
import team from "../team";

const Hero = styled.section`
  border-bottom: 1px solid ${props => props.theme.color.accents.two};
  text-align: center;
  padding: 50px 0;
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
  padding: 0 50px;
`;

const MemberCard = styled.div`
  padding: 10px 0;
`;

const IndexPage = () => (
  <div>
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

        <Button>Meet The Team</Button>
      </HeroWrapper>
    </Hero>

    <TeamSection>
      {team.map(member => (
        <MemberCard key={member.id}>
          <p>{member.fullName}</p>
          <p>{member.title}</p>
          <p>{member.description}</p>
          <p>
            Based in {member.basedIn} From {member.from}
          </p>
        </MemberCard>
      ))}
    </TeamSection>
  </div>
);

export default IndexPage;
