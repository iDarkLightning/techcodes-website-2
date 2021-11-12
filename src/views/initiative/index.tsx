import React from "react";
import Footer from "@components/footer";
import { Nav } from "@components";
import SectionWrapper from "../home/components/SectionWrapper";
import { Heading, Text, Flex, Image, Box, Link } from "@chakra-ui/react";

const IMAGE_URL = "https://www.datocms-assets.com/50019/1624285424-codefest.png?auto=format&w=1920";
const name = "CodeFest";
const date = "May 12th, 2021";
const desc = "Blah Blah Blah";
const links = [
  { link: "example.com", name: "example" },
  { link: "example.com", name: "example" },
];

interface LinkProps {
  link: string;
  name: string;
}

const HelpfulLink: React.FC<LinkProps> = ({ link, name }) => (
  <Link
    href={link}
    width="fit-content"
    target="_blank"
    padding="0px 10px"
    border="0.2vw solid white"
    borderRadius="41px"
    fontSize={{ sm: "2vw", md: "1.45vw" }}
    textTransform="uppercase"
    marginTop="1vw">
    {name}
  </Link>
);

const InitiativeView: React.FC = ({}) => {
  return (
    <SectionWrapper>
      <Nav />
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading
          textTransform="uppercase"
          fontSize={{ sm: "8.5vw", md: "7vw" }}
          textAlign="left"
          width="100%"
          padding="0 5vw"
          mt="7.5vh">
          {name}
        </Heading>
        <Text
          textTransform="uppercase"
          textAlign="left"
          width="100%"
          padding="0 5vw"
          fontWeight="medium"
          fontSize={{ sm: "2.2vw", md: "1.7vw" }}>
          {date}
        </Text>
        <Image src={IMAGE_URL} w="87.5%" h="100%" borderRadius="50px" margin="5vw" />
        {/* Links column takes 25%*/}
        <Flex width="90vw">
          <Flex flex="25%" flexDirection="column">
            {links.map(link => (
              <HelpfulLink link={link.link} name={link.name} />
            ))}
          </Flex>
          <Text fontWeight="medium" fontSize="2.4vw" flex="75%">
            {desc}
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </SectionWrapper>
  );
};

export default InitiativeView;
