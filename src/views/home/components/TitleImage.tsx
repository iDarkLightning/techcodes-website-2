import { Box, Image, ResponsiveValue, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import PotionPng from "@images/props/potion.png";
import RocketPng from "@images/props/rocket.png";
import FolderPng from "@images/props/folder.png";
import CupPng from "@images/props/bucket.png";

interface TitleImageProps {
  src: string;
  width: ResponsiveValue<string>;
  top: ResponsiveValue<string>;
  transform?: string;
  right?: ResponsiveValue<string>;
  left?: ResponsiveValue<string>;
}

const TitleImage = ({ src, width, transform, top, right, left }: TitleImageProps) => {
  return (
    <Box
      position="absolute"
      w={width}
      transform={transform}
      top={top}
      right={right}
      left={left}
      display={{ md: "none", "2xl": "flex" }}>
      <Image src={src} />
    </Box>
  );
};

export const RocketImage: React.FC = () => {
  const width = useBreakpointValue({ lg: "25vw", thone: "36vw" });
  const top = useBreakpointValue({ thone: "5%" });
  const left = useBreakpointValue({ thone: "40%" });

  return (
    <TitleImage
      src={RocketPng}
      width={width || "35vmin"}
      transform="rotate(-10deg)"
      top={top || "9%"}
      right="-5%"
      left={left}
    />
  );
};

export const PotionImage: React.FC = () => {
  const width = useBreakpointValue({ thone: "30vw" });

  return (
    <TitleImage
      src={PotionPng}
      width={width || "35vmin"}
      transform="scaleX(-1) rotate(8deg) !important"
      top="5%"
      left="-3%"
    />
  );
};

export const FolderImage: React.FC = () => {
  const top = useBreakpointValue({ lg: "15%", thone: "25%", xs: "18vmax" });
  const width = useBreakpointValue({ thone: "14max", phone: "35vw" });
  const left = useBreakpointValue({ lg: "25%", thone: "20%", phone: "20min" });

  return (
    <TitleImage
      src={FolderPng}
      width={width || "35vmin"}
      transform="rotate(-8deg)"
      top={top || "50%"}
      left={left || "20%"}
    />
  );
};

export const CupImage: React.FC = () => (
  <TitleImage src={CupPng} width="30vmin" top="57%" left="70%" />
);
