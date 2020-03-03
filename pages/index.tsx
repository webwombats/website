import styled from "styled-components";

import Button from "../components/Button";

const Hero = styled.section`
  border-bottom: 1px solid ${props => props.theme.color.accents.two};
  text-align: center;
`;

const HeroWrapper = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 750pt;
  padding-left: 16pt;
  padding-right: 16pt;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.9rem;
  color: ${props => props.theme.color.blue};
`;

const IndexPage = () => (
  <div>
    <Hero id="hero">
      <HeroWrapper>
        <h1>Web Wombats</h1>
        <Eyebrow>Our mission</Eyebrow>
        <h2>We describe our mission here</h2>
        <h5>We tell what products we build and who for.</h5>

        <Button>Meet The Team</Button>
      </HeroWrapper>
    </Hero>
  </div>
);

export default IndexPage;
