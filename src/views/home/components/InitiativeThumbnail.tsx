import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

interface ThumbnailProps {
  url: string;
  name: string;
  date: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ url, name, date }) => (
  <Box>
    <Flex
      w="34vw !important"
      h="20vw !important"
      border="0.2vw solid yellow"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      transition="0.2s"
      _hover={{ borderRadius: "40px" }}>
      <Image src={url} w="100%" h="100%" transition="0.2s" _hover={{ transform: "scale(1.2)" }} />
    </Flex>
    <Text fontWeight="medium" fontSize={{ base: "2vw", md: "1.2vw" }}>
      {name}
    </Text>
    <Text fontWeight="medium" fontSize="0.8vw" display={{ base: "none", md: "flex" }}>
      {date}
    </Text>
  </Box>
);

export default Thumbnail;
