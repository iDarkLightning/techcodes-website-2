import { Box, Center, Flex, Heading, Text, Image, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import ContentWrapper from "./components/ContentWrapper";
import DescriptionBody from "./components/DescriptionBody";
import DescriptionTitle from "./components/DescriptionTitle";
import DescriptionWrapper from "./components/DescriptionWrapper";
import InitiativesSection from "./components/InitiativesSection";
import SectionWrapper from "./components/SectionWrapper";
import Title from "./components/Title";
import { CupImage, FolderImage, PotionImage, RocketImage } from "./components/TitleImage";
import WorkBody from "./components/WorkBody";
import WorkHeading from "./components/WorkHeading";
import WorkWrapper from "./components/WorkWrapper";
import ReplitImage from "@images/sponsors/replit.svg";
import GoDaddyImage from "@images/sponsors/godaddy.png";
import OnePassword from "@images/sponsors/1Password.png";
import StickerImage from "@images/sponsors/sticker.png";
import PrincetonImage from "@images/sponsors/princetonreview.png";
import LinodeImage from "@images/sponsors/linode.svg";
import WolframImage from "@images/sponsors/wolfram.png";
import EchoImage from "@images/sponsors/echoar.png";
import LogoIcon from "@images/logo.svg";
import GithubImage from "@images/socials/github.svg";
import InstagramImage from "@images/socials/instagram.svg";
import LinkedInImage from "@images/socials/linkedin.svg";
import YoutubeImage from "@images/socials/youtube.svg";
import { Nav } from "@components";

interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = ({}) => {
  return (
    <>
      <SectionWrapper>
        <Nav />
        <ContentWrapper>
          <Title />
          <RocketImage />
          <PotionImage />
          <FolderImage />
          <CupImage />
        </ContentWrapper>
        <ContentWrapper>
          <DescriptionTitle />
          <DescriptionWrapper>
            <DescriptionBody>
              TechCodes is dedicated to fostering computer science education to students of all
              backgrounds and expose them to the creativity and innovation technology brings.
              TechCodes is dedicated to fostering computer science education to students of all
              backgrounds and expose them to the creativity and innovation technology brings.
            </DescriptionBody>
            <WorkWrapper>
              <>
                <WorkHeading color="yellow">Hosting events</WorkHeading>
                <WorkBody>
                  We have hosted and continue to host events like hackathons and guest panels to
                  help inspire computer science education in today’s youth.
                </WorkBody>
              </>
              <>
                <WorkHeading color="pink">Creating connections</WorkHeading>
                <WorkBody>
                  We have hosted and continue to host events like hackathons and guest panels to
                  help inspire computer science education in today’s youth.
                </WorkBody>
              </>
              <>
                <WorkHeading color="blueText">Building experiences</WorkHeading>
                <WorkBody>
                  We have hosted and continue to host events like hackathons and guest panels to
                  help inspire computer science education in today’s youth.
                </WorkBody>
              </>
            </WorkWrapper>
          </DescriptionWrapper>
        </ContentWrapper>
        <ContentWrapper h="57%">
          <InitiativesSection />
        </ContentWrapper>
        <ContentWrapper>
          <Flex flexDirection="column" w="100%" h="95vh" bgColor="gray">
            <Stack as={Center} pt="8vh">
              <Heading color="darkText" fontWeight="64" fontSize="7vh" textAlign="center">
                We work with some <br /> pretty unique people
              </Heading>
              <Text color="darkText" textAlign="center" pt="3vh" fontWeight="19" fontSize="2vh">
                Each year, major organizations will sponsor everything that CODE has <br /> to
                offer. It is with their help that CODE can continue to bring computer <br />
                science to those who need it most and strengthen their passion.
              </Text>
              <HStack display="flex" width="60%" justifyContent="space-evenly" pb="3vh">
                <Image src={ReplitImage} h="10vh" />
                <Image src={GoDaddyImage} h="10vh" />
                <Image src={OnePassword} h="10vh" />
              </HStack>
              <HStack display="flex" width="60%" justifyContent="space-evenly" pb="3vh">
                <Image src={StickerImage} h="10vh" />
                <Image src={PrincetonImage} h="10vh" />
                <Image src={LinodeImage} h="10vh" />
              </HStack>
              <HStack display="flex" width="60%" justifyContent="space-evenly" pb="3vh">
                <Image src={WolframImage} h="10vh" />
                <Image src={EchoImage} h="10vh" />
              </HStack>
            </Stack>
          </Flex>
          <Flex h="40vh" alignItems="center" justifyContent="space-evenly">
            <Image src={LogoIcon} h="10vh" />
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
          <Text color="gray">© 2021 TechCodes. 501(c)(3) nonprofit (EIN: 81-2908499)</Text>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default HomeView;
