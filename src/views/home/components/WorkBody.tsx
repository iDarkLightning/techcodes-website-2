import React from "react";
import { Text } from "@chakra-ui/react";

interface WorkBodyProps {}

const WorkBody: React.FC<WorkBodyProps> = ({ children }) => {
  return (
    <Text maxW="30vw" flex="2" fontSize="2vh">
      {children}
    </Text>
  );
};

export default WorkBody;
