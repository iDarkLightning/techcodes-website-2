import { HStack, Flex, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";

const DescriptionWrapper: React.FC = ({ children }) => {
  const direction = useBreakpointValue({ base: "row", md: "column" });

  return (
    <Stack
      w="90vw"
      m="auto"
      spacing="8vw"
      as={Flex}
      // alignItems="flex-start"
      overflow="hidden"
      direction={{ base: "column", md: "row" }}>
      {children}
    </Stack>
  );
};

export default DescriptionWrapper;
