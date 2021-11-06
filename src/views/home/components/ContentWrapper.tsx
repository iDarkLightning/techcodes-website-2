import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";

interface ContentWrapperProps {
  h?: string;
  mt?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ h, mt, children }) => {
  // const height = useBreakpointValue({ lg: h || "100%", md: undefined });

  return (
    <Box mt={mt} h={h || "100vh"}>
      {children}
    </Box>
  );
};

export default ContentWrapper;
