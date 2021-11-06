import { Flex, Stack, Image, Button, Text } from "@chakra-ui/react";
import SearchingImage from "@images/props/searching.png";
import React from "react";

interface PosProps {
  mt?: string;
}

const CTA: React.FC<PosProps> = ({ mt }) => {
  return (
    <Flex
      w="80%"
      m="auto"
      h="375px"
      bgColor="lightBlue"
      justifyContent="space-between"
      marginTop={mt || "0"}
      overflow="visible">
      <Stack ml="2vw" p="2vw">
        <Text fontWeight="medium" fontSize="6vh" lineHeight="1.04" mb="2vw">
          Changing the world through <br /> computer science isn't easy. <br /> Explore how we
          manage to do it.
        </Text>
        <Button bgColor="pink" color="background" borderRadius="41px" w="30%" fontSize="1.2vw">
          All initiatives
        </Button>
      </Stack>
      <Image src={SearchingImage} h="90%" mr="-3.5vw" />
    </Flex>
  );
};

export default CTA;
