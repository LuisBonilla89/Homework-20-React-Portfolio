import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Hello there! My name is Luis Bonilla. I am a web developer ready to
        expand and a sucessful career in the tech world.
        <br></br>
        <br></br>
        Graduated from Monash Coding Bootcamp in Melbourne Australia in August
        2021 and acquired crucial knowledge in the latest industry technologies
        such as MERN stack (MongoDB, Express, React, NodeJS) as well as
        knowledge in GraphQL, Javascript, CSS, HTML, JQuery and Bootstrap.
        <br></br>
        <br></br>
        Acquiring this new skillset complements my long standing interest in the
        power of programing. Please allow me to introduce some of my work. I
        hope you enjoy the visit.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1BbJEK8zfTXO3_n-AlTgTaH612YwIMz6N/view?usp=sharing")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
