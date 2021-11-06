import { Box, Button, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { InitiativesSwiper } from "./InitiativesSwiper";

interface InitiativesSectionProps {}

const InitiativesSection: React.FC<InitiativesSectionProps> = ({}) => {
  const height = useBreakpointValue({ lg: "65vh", md: "65%" });

  return (
    <Box w="100%" h={height} bgColor="lightBlue" mt="2vh" pb="2vh" zIndex="1">
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
            <InitiativesSwiper />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InitiativesSection;
