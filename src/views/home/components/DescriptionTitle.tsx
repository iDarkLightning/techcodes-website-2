import { Center, Heading } from "@chakra-ui/react";
import React from "react";

interface DescriptionTitleProps {}

const DescriptionTitle: React.FC<DescriptionTitleProps> = ({}) => {
  return (
    <Center color="text" mb="3vh">
      <Heading
        fontWeight="normal"
        fontSize={{ base: "4vh", sm: "5.5vh", md: "8vh" }}
        textAlign="center">
        We’re a student-led nonprofit aiming to increase computer science engagement
      </Heading>
    </Center>
  );
};

export default DescriptionTitle;
