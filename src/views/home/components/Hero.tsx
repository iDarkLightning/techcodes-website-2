import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";

import Title from "./Title";
import {
  CupImage,
  FolderImage,
  PotionImage,
  RocketImage,
  SecondFolderImage,
  SecondRocketImage,
  SecondCupImage,
} from "./TitleImage";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <Title />
      <RocketImage />
      <PotionImage />
      <FolderImage />
      <CupImage />
      <SecondFolderImage />
      <SecondRocketImage />
      <SecondCupImage />
    </>
  );
};

export default Hero;
