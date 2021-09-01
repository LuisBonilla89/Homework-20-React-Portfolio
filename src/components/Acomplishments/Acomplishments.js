import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: "Aerospace Engineer",
    text: "Graduated from RMIT University",
  },
  {
    number: "Fullstack Developer",
    text: "Sucessfuly graduated from Monash University Bootcamp with A+",
  },
  // { number: 1900, text: "Github Followers" },
  // { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum style={{ fontSize: "19px" }}>{card.number}</BoxNum>
          <BoxText style={{ fontSize: "16px" }}>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
