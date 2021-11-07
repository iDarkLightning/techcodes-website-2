import { Image } from "@chakra-ui/react";
import React from "react";

interface SponsorImageProps {
  src: any;
  h?: string;
}

const SponsorImage: React.FC<SponsorImageProps> = ({ src, h = { base: "7vh", md: "10vh" } }) => {
  return <Image src={src} h={h} />;
};

export default SponsorImage;
