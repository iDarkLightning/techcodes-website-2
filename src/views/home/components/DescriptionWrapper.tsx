import { HStack, Flex } from "@chakra-ui/react";
import React from "react";

const DescriptionWrapper: React.FC = ({ children }) => {
  return (
    <HStack w="75vw" m="auto" spacing="8vw" as={Flex} alignItems="flex-start" overflow="hidden">
      {children}
    </HStack>
  );
};

export default DescriptionWrapper;
