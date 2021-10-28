import { Box, Center, Flex, Heading, Text, Image } from "@chakra-ui/react";
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

interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = ({}) => {
  return (
    <>
      <SectionWrapper>
        <ContentWrapper>
          <Title />
          <RocketImage />
          <PotionImage />
          <FolderImage />
          <CupImage />
        </ContentWrapper>
      </SectionWrapper>
      <SectionWrapper>
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
      </SectionWrapper>
      <InitiativesSection />
      <Flex flexDirection="column" w="100%" h="95vh" bgColor="gray" justifyContent="space-between">
        <Flex flexDirection="column" alignItems="center" justifyContent="center" pt="8vh">
          <Heading color="darkText" fontWeight="64" fontSize="7vh" textAlign="center">
            We work with some <br /> pretty unique people
          </Heading>
          <Text color="darkText" textAlign="center" pt="3vh" fontWeight="19" fontSize="2vh">
            Each year, major organizations will sponsor everything that CODE has <br /> to offer. It
            is with their help that CODE can continue to bring computer <br />
            science to those who need it most and strengthen their passion.
          </Text>
        </Flex>
        <Box
          w="90%"
          m="auto"
          h="30vh"
          bgColor="lightBlue"
          position="absolute"
          mr="auto"
          ml="auto"
          left="0"
          right="0"
          textAlign="center"></Box>
        <Box h=""></Box>
      </Flex>
    </>
  );
};

export default HomeView;
