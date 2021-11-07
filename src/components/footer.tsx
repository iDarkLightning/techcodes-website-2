import { Flex, HStack, Image, Box, Text } from "@chakra-ui/react";
import LogoIcon from "@images/logo.svg";
import GithubImage from "@images/socials/github.svg";
import InstagramImage from "@images/socials/instagram.svg";
import LinkedInImage from "@images/socials/linkedin.svg";
import YoutubeImage from "@images/socials/youtube.svg";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex h="40vh" alignItems="center" justifyContent="space-evenly">
      <Image src={LogoIcon} h={{ base: "6vh", md: "10vh" }} />
      <Text>
        <Box as="span" fontWeight="bold" fontSize="2vh">
          Contact us
        </Box>
        <br />
        <Box as="span" fontWeight="medium" fontSize="3vh" color="#A8A8A8">
          team@techcodes.org
        </Box>
      </Text>
      <Box>
        <Text fontWeight="bold" fontSize="2vh">
          Socials
        </Text>
        <HStack>
          <Image src={InstagramImage} h="3vh" />
          <Image src={LinkedInImage} h="3vh" />
          <Image src={YoutubeImage} h="3vh" />
          <Image src={GithubImage} h="3vh" />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Footer;
