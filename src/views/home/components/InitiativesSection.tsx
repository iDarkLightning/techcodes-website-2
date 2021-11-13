import { Box, Text, Flex, Heading, useBreakpointValue, Link } from "@chakra-ui/react";
import React from "react";
import { InitiativesSwiper } from "./InitiativesSwiper";

interface InitiativesSectionProps {
  data: any;
}

const InitiativesSection: React.FC<InitiativesSectionProps> = ({ data }) => {
  const height = useBreakpointValue({ lg: "65%", md: "65%" });

  return (
    <Box w="100%" h={height} bgColor="lightBlue" pb="2vh" position="absolute" zIndex="1" bottom="0">
      <Box pt="2vh">
        <Flex w="80%" m="auto" justifyContent="space-between" alignItems="center" pb="2vh">
          <Heading fontWeight="64" fontSize="3vw">
            Our events
          </Heading>
          <Link
            href="/initiatives"
            bgColor="pink"
            color="background"
            borderRadius="41px"
            fontSize="1vw"
            textDecoration="none !important"
            padding="8px 14px">
            All initiatives
          </Link>
        </Flex>
        <Box overflow="hidden">
          <Box ml="5vw">
            <InitiativesSwiper data={data} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InitiativesSection;
