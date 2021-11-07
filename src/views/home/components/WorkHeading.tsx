import { Heading } from "@chakra-ui/react";
import React from "react";

interface WorkHeadingProps {
  color: string;
}

const WorkHeading: React.FC<WorkHeadingProps> = ({ color, children }) => {
  return (
    <Heading color={color} fontWeight="500" fontSize={{ base: "4vh", md: "6vh" }}>
      {children}
    </Heading>
  );
};

export default WorkHeading;
