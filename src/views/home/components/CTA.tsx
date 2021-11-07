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
      h={{ base: "225px", md: "300px", "2xl": "350px" }}
      alignItems="center"
      bgColor="lightBlue"
      justifyContent="space-between"
      marginTop={mt || "20px"}
      overflow="visible">
      <Stack ml="2vw" p="2vw">
        <Text fontWeight="medium" fontSize={{ base: "3vh", md: "5vh" }} lineHeight="1.04" mb="2vw">
          Changing the world through <br /> computer science isn't easy. <br /> Explore how we
          manage to do it.
        </Text>
        <Button
          bgColor="pink"
          color="background"
          borderRadius="41px"
          h="40px !important"
          w="100px"
          fontSize="0.8rem">
          All initiatives
        </Button>
      </Stack>
      <Image
        src={SearchingImage}
        h={{ base: "65%", sm: "75%", lg: "90%" }}
        mr={{ base: "-5.5vw", "2xl": "-3.5vw" }}
      />
    </Flex>
  );
};

export default CTA;
