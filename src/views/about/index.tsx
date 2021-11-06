import {
  Center,
  Heading,
  Image,
  Box,
  Text,
  Stack,
  Flex,
  Avatar,
  Circle,
  Grid,
  GridItem,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { HTMLRenderer, Nav } from "@components";
import React from "react";
import ContentWrapper from "../home/components/ContentWrapper";
import SectionWrapper from "../home/components/SectionWrapper";
import BoxedImage from "@images/props/boxed.png";
import BlastImage from "@images/props/blast.png";
import { Member } from "../../pages/about";
import SearchingImage from "@images/props/searching.png";
import LogoIcon from "@images/logo.svg";
import GithubImage from "@images/socials/github.svg";
import InstagramImage from "@images/socials/instagram.svg";
import LinkedInImage from "@images/socials/linkedin.svg";
import YoutubeImage from "@images/socials/youtube.svg";

const AboutView: React.FC<{ team: Member[] }> = ({ team }) => {
  return (
    <SectionWrapper>
      <Nav />
      <ContentWrapper>
        <Center height="120%" as={Stack}>
          <Heading
            textAlign="center"
            textTransform="uppercase"
            fontSize="32vh"
            fontWeight="medium"
            lineHeight="90%">
            tech <br /> codes
          </Heading>
          <Text fontWeight="regular" fontSize="1.4vw" pl="15vw">
            <Box as="span" ml="8vh">
              CODE is a student-run 501(c)(3) nonprofit
            </Box>
            , for <br />
            students, by students. Founded by Chanul Dandeniya and <br /> Kyrylo Orlov in June 2020,
            in hopes to rejuvenate and revive
            <br />
            student interest in programming in the largest and most <br /> prestigious STEM
            secondary institution, Brooklyn Technical <br /> High School, through countless
            initiatives and programs <br /> TechCodes has now grown and impacted students all across
            the <br /> NYC Metropolitan area
          </Text>
        </Center>
        <Box position="absolute" left="-0.2vw" width="36vw" bottom="6vw">
          <Image src={BoxedImage} top={0} />
        </Box>
        <Box position="absolute" right="9vw" width="54vmin" bottom="22vw">
          <Image src={BlastImage} top={0} />
        </Box>
      </ContentWrapper>
      <ContentWrapper h="pixie">
        <Box width="90%" m="auto" mt="10vh">
          <Heading fontSize="10vh">Meet the team.</Heading>
        </Box>
        <Grid width="90%" m="auto" templateColumns="1fr 1fr" gap={6}>
          {team.map(member => (
            <GridItem>
              <Box>
                <Flex alignItems="flex-start">
                  <Avatar src={member.image.url} alt={member.image.alt} size="lg" />
                  <Box ml={4}>
                    <Heading fontWeight="medium" lineHeight="3vh" mb="1vh">
                      {member.name} <br />
                      <Box as="span" color="gray" fontWeight="normal" fontSize="2vh">
                        {member.memberPosition}
                      </Box>
                    </Heading>
                    {/* {I am perfectly aware that this isn't good, but honestly why we're rendering HTML like this in the first place...} */}
                    <Box
                      dangerouslySetInnerHTML={{ __html: member.description }}
                      fontSize="2.5vh"
                      fontWeight="normal"
                    />
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </ContentWrapper>
      <ContentWrapper h="50vh">
        <Flex w="80%" m="auto" h="60%" bgColor="lightBlue" justifyContent="space-between">
          <Stack w="50%" ml="2vw" pt="2vw">
            <Text fontWeight="medium" fontSize="2vw" lineHeight="10" mb="2vw">
              Changing the world through <br /> computer science isn't easy. <br /> Explore how we
              manage to do it.
            </Text>
            <Button bgColor="pink" color="background" borderRadius="41px" w="30%">
              All initiatives
            </Button>
          </Stack>
          <Image src={SearchingImage} w="30vh" h="30vh" />
        </Flex>
        <Flex h="30vh" alignItems="center" justifyContent="space-between" w="70%" m="auto">
          <Image src={LogoIcon} h="8vh" />
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
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AboutView;
