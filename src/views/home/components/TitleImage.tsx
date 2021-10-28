import { Box, Image } from "@chakra-ui/react";
import React from "react";
import PotionPng from "@images/props/potion.png";
import RocketPng from "@images/props/rocket.png";
import FolderPng from "@images/props/folder.png";
import CupPng from "@images/props/bucket.png";

interface TitleImageProps {
  src: string;
  width: string;
  top: string;
  transform?: string;
  right?: string;
  left?: string;
}

const TitleImage = ({ src, width, transform, top, right, left }: TitleImageProps) => {
  return (
    <Box position="absolute" w={width} transform={transform} top={top} right={right} left={left}>
      <Image src={src} />
    </Box>
  );
};

export const RocketImage: React.FC = () => (
  <TitleImage src={RocketPng} width="35vmin" transform="rotate(-10deg)" top="9%" right="-5%" />
);

export const PotionImage: React.FC = () => (
  <TitleImage
    src={PotionPng}
    width="35vmin"
    transform="scaleX(-1) rotate(8deg) !important"
    top="5%"
    left="-3%"
  />
);

export const FolderImage: React.FC = () => (
  <TitleImage src={FolderPng} width="35vmin" transform="rotate(-8deg)" top="55%" left="20%" />
);

export const CupImage: React.FC = () => (
  <TitleImage src={CupPng} width="30vmin" top="57%" left="70%" />
);
