import { Button } from "@chakra-ui/button";
import { Image, chakra } from "@chakra-ui/react";
import { Box, Center, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import PotionImage from "@images/props/potion.png";
import RocketImage from "@images/props/rocket.png";
import FolderImage from "@images/props/folder.png";
import CupImage from "@images/props/bucket.png";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";

interface HomeViewProps {}

const StylableSwiper = chakra(Swiper);

const TitleLine: React.FC = ({ children }) => (
  <Heading fontSize="7vw" fontWeight="500" lineHeight="95%">
    {children}
  </Heading>
);

const IMAGE_URL = "https://www.datocms-assets.com/50019/1624285424-codefest.png?auto=format&w=1920";

const JoinButton: React.FC = () => (
  <Flex
    alignItems="center"
    justifyContent="space-evenly"
    bgGradient="linear-gradient(90deg, #c766ff 0%, #ff8b66 100%)"
    borderRadius="41px"
    w="20vw"
    h="3vw"
    fontWeight="500"
    textTransform="none"
    fontSize="1vw">
    <Text color="background">Join us for another year</Text>
    <Button bgColor="background" borderRadius="41px">
      Sign up now
    </Button>
  </Flex>
);

interface SlideProps {
  url: string;
  name: string;
  date: string;
}

const Slide: React.FC<SlideProps> = ({ url, name, date }) => (
  <Box>
    <Image src={url} w="34vw" h="20vw" border="0.2vw solid yellow" />
    <Text fontWeight="medium" fontSize="1.2vw">
      {name}
    </Text>
    <Text fontWeight="medium" fontSize="0.8vw">
      {date}
    </Text>
  </Box>
);

const HomeView: React.FC<HomeViewProps> = ({}) => {
  const [carauselMargin, setCarasaulMargin] = useState("10vw");

  return (
    <>
      <Box position="relative" h="100vh" overflowX="hidden" w="100vw">
        <Box mt="10vh">
          <Center textTransform="uppercase" color="text" as={Stack} spacing={0}>
            <TitleLine>teaching students</TitleLine>
            <TitleLine>around the globe</TitleLine>
            <TitleLine>how to code</TitleLine>
            <JoinButton />
          </Center>
          <Box w="35vmin" position="absolute" transform="rotate(-10deg)" top="9%" right="-5%">
            <Image src={RocketImage}></Image>
          </Box>
          <Box
            w="35vmin"
            position="absolute"
            transform="scaleX(-1) rotate(8deg) !important"
            top="5%"
            left="-3%">
            <Image src={PotionImage}></Image>
          </Box>
          <Box w="35vmin" position="absolute" transform="rotate(-8deg);" top="55%" left="20%">
            <Image src={FolderImage}></Image>
          </Box>
          <Box w="30vmin" position="absolute" top="55%" left="70%">
            <Image src={CupImage}></Image>
          </Box>
        </Box>
      </Box>
      <Box position="relative" h="100vh" overflowX="hidden" w="100vw" overflow="hidden">
        <Box mt="8vh">
          <Center color="text" as={Stack} spacing={0} mb="8vh">
            <Heading fontWeight="normal" fontSize="3vw">
              We’re a student-led nonprofit
            </Heading>
            <Heading fontWeight="normal" fontSize="3vw">
              aiming to increase computer
            </Heading>
            <Heading fontWeight="normal" fontSize="3vw">
              science engagement.
            </Heading>
          </Center>
          <HStack
            w="75vw"
            m="auto"
            spacing="8vw"
            as={Flex}
            alignItems="flex-start"
            overflow="hidden">
            <Text maxW="30vw" flex="2" fontSize="1vw">
              TechCodes is dedicated to fostering computer science education to students of all
              backgrounds and expose them to the creativity and innovation technology brings.
              TechCodes is dedicated to fostering computer science education to students of all
              backgrounds and expose them to the creativity and innovation technology brings.
            </Text>
            <Stack flex="2">
              <Box>
                <Heading color="yellow" fontWeight="500" fontSize="3vw">
                  Hosting events
                </Heading>
                <Text maxW="30vw" flex="2" fontSize="1vw">
                  We have hosted and continue to host events like hackathons and guest panels to
                  help inspire computer science education in today’s youth.
                </Text>
              </Box>
              <Box>
                <Heading color="pink" fontWeight="500" fontSize="3vw">
                  Creating connections
                </Heading>
                <Text maxW="30vw" flex="2" fontSize="1vw">
                  We have hosted and continue to host events like hackathons and guest panels to
                  help inspire computer science education in today’s youth.
                </Text>
              </Box>
              <Box>
                <Heading color="blueText" fontWeight="500" fontSize="3vw">
                  Building experiences
                </Heading>
                <Text maxW="30vw" flex="2" fontSize="1vw">
                  We have hosted and continue to host events like hackathons and guest panels to
                  help inspire computer science education in today’s youth.
                </Text>
              </Box>
            </Stack>
          </HStack>
        </Box>
        <Box
          w="150%"
          h="2vw"
          bgColor="blueText"
          left="-40%"
          top="110%"
          transform="rotate(30deg)"
          position="absolute"
          zIndex="-1"
        />
        <Box
          w="150%"
          h="6vw"
          bgColor="yellow"
          left="-43.5%"
          top="110%"
          transform="rotate(30deg)"
          position="absolute"
          zIndex="-1"
        />
        <Box
          w="150%"
          h="2vw"
          bgColor="pink"
          left="-41.5%"
          top="110%"
          transform="rotate(30deg)"
          position="absolute"
          zIndex="-1"
        />
      </Box>
      <Box position="absolute" h="100vh" overflowX="hidden" w="100vw" pt="2vh">
        <Box w="100%" h="65%" bgColor="lightBlue" zIndex="99">
          <Box pt="2vh">
            <Flex w="80%" m="auto" justifyContent="space-between" alignItems="center" pb="2vh">
              <Heading fontWeight="64" fontSize="3vw">
                Our events
              </Heading>
              <Button bgColor="pink" color="background" borderRadius="41px">
                All initiatives
              </Button>
            </Flex>
            <Box overflow="hidden">
              <Box ml="10vw">
                <StylableSwiper
                  slidesPerView={2.5}
                  // loop={true}
                  spaceBetween={10}
                  overflow="visible">
                  {[1, 2, 3, 4, 5].map(() => (
                    <SwiperSlide>
                      <Slide
                        url={IMAGE_URL}
                        name="CodeFest"
                        date={new Date().toLocaleDateString()}
                      />
                    </SwiperSlide>
                  ))}
                </StylableSwiper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeView;
