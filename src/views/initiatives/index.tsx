import React from "react";
import Footer from "@components/footer";
import { Nav } from "@components";
import SectionWrapper from "../home/components/SectionWrapper";
import Thumbnail from "../home/components/InitiativeThumbnail";
import { Heading, SimpleGrid, Flex } from "@chakra-ui/react";

interface InitiativesViewProps {}
const IMAGE_URL = "https://www.datocms-assets.com/50019/1624285424-codefest.png?auto=format&w=1920";

const InitiativesView: React.FC<InitiativesViewProps> = ({}) => {
  return (
    <SectionWrapper>
      <Nav />
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading
          textTransform="uppercase"
          fontSize="8vw"
          padding="5%"
          textAlign="left"
          width="100%">
          Initiatives
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2.5vw" w="90vw">
          {[1, 2, 3, 4, 5].map(() => (
            <Thumbnail url={IMAGE_URL} name="CodeFest" date={new Date().toLocaleDateString()} />
          ))}
        </SimpleGrid>
      </Flex>
      <Footer />
    </SectionWrapper>
  );
};

export default InitiativesView;
