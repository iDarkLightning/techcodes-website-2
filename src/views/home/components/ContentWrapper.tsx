import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";

interface ContentWrapperProps {
  h?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ h, children }) => {
  const height = useBreakpointValue({ lg: h || "100%", md: undefined });

  return (
    <Box mt="8vh" h={height}>
      {children}
    </Box>
  );
};

export default ContentWrapper;
