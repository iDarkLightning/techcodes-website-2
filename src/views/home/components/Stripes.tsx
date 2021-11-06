import { Box } from "@chakra-ui/layout";
import React from "react";

interface StripesProps {
  h?: string;
  col: string;
}

const Stripe: React.FC<StripesProps> = ({ h, col }) => {
  return <Box w="177.33vw" h={h || "2vw"} background={col} />;
};

const Stripes: React.FC = () => {
  return (
    <Box width="100vw" transform="rotate(35deg)" position="absolute" zIndex="-1" left="-13.71vw">
      <Stripe col="#7087FE" />
      <Stripe col="#FF8FE6" />
      <Stripe h="8vw" col="#FFCC66" />
    </Box>
  );
};

export default Stripes;
