import React from "react";
import { Text } from "@chakra-ui/react";

interface WorkBodyProps {
  always?: boolean;
}

const WorkBody: React.FC<WorkBodyProps> = ({ children, always }) => {
  return (
    <Text
      maxW="40vw"
      flex="2"
      fontSize="2vh"
      display={/*always ? "flex" : { base: "none", md: "flex" }*/ "flex"}>
      {children}
    </Text>
  );
};

export default WorkBody;
