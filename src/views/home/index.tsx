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
import { Nav } from "@components";
import Hero from "./components/Hero";
import Stripes from "./components/Stripes";
import CTA from "./components/CTA";
import SponsorImage from "./components/SponsorImage";
import Footer from "@components/footer";

interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = ({}) => {
  return (
    <>
      <SectionWrapper>
        <Nav />
        <ContentWrapper h="100vh" mt="8vh">
          <Hero />
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
                <WorkHeading color="blueText">Hosting events</WorkHeading>
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
                <WorkHeading color="yellow">Building experiences</WorkHeading>
                <WorkBody>
                  We have hosted and continue to host events like hackathons and guest panels to
                  help inspire computer science education in today’s youth.
                </WorkBody>
              </>
            </WorkWrapper>
          </DescriptionWrapper>
        </ContentWrapper>

        <ContentWrapper h="57%">
          <Box w="100%" h="100%" position="relative">
            <InitiativesSection />
          </Box>
        </ContentWrapper>

        <ContentWrapper>
          <Flex
            flexDirection="column"
            w="100%"
            h="95vh"
            bgColor="gray"
            position="relative"
            zIndex="-2">
            <Stripes />
            <Stack as={Center} pt="8vh" position="relative" zIndex="10">
              <Heading color="darkText" fontWeight="64" fontSize="7vh" textAlign="center">
                We work with some <br /> pretty unique people
              </Heading>
              <Text color="darkText" textAlign="center" pt="3vh" fontWeight="19" fontSize="2vh">
                Each year, major organizations will sponsor everything that CODE has <br /> to
                offer. It is with their help that CODE can continue to bring computer <br />
                science to those who need it most and strengthen their passion.
              </Text>
              <HStack display="flex" width="60%" justifyContent="space-evenly" pb="3vh">
                <SponsorImage src={ReplitImage} />
                <SponsorImage src={GoDaddyImage} />
                <SponsorImage src={OnePassword} />
              </HStack>
              <HStack display="flex" width="60%" justifyContent="space-evenly" pb="3vh">
                <SponsorImage src={StickerImage} />
                <SponsorImage src={PrincetonImage} />
                <SponsorImage src={LinodeImage} />
              </HStack>
              <HStack display="flex" width="60%" justifyContent="space-evenly" pb="3vh">
                <SponsorImage src={WolframImage} />
                <SponsorImage src={EchoImage} />
              </HStack>
            </Stack>
          </Flex>
          <CTA mt="-10vh" />
          <Footer />
          <Text color="gray">© 2021 TechCodes. 501(c)(3) nonprofit (EIN: 81-2908499)</Text>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default HomeView;
