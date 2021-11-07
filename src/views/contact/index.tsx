import React from "react";
import Footer from "@components/footer";
import { Nav } from "@components";
import SectionWrapper from "../home/components/SectionWrapper";
import { Heading, Link, Text, Center, Flex } from "@chakra-ui/react";

interface ContactViewProps {}

const ContactView: React.FC<ContactViewProps> = ({}) => {
  return (
    <SectionWrapper>
      <Nav />
      <Flex justifyContent="center" flexDirection="column" height="50vh">
        <Heading
          textAlign="center"
          textTransform="uppercase"
          fontSize="8vw"
          fontWeight="medium"
          mt="50px">
          Want to talk to us? <br /> shoot us an email.
        </Heading>
        <Link href="mailto:team@techcodes.org" target="_blank">
          <Text
            width="100vw"
            textAlign="center"
            textTransform="uppercase"
            fontSize="2vw"
            fontWeight="medium"
            mt="30px">
            team@techcodes.org
          </Text>
        </Link>
      </Flex>
      <Footer />
    </SectionWrapper>
  );
};

export default ContactView;
