import React from "react";
import { Text } from "@chakra-ui/react";

interface DescriptionBodyProps {}

const DescriptionBody: React.FC<DescriptionBodyProps> = ({ children }) => {
  return (
    <Text maxW="30vw" flex="2" fontSize="2vh">
      {children}
    </Text>
  );
};

export default DescriptionBody;
