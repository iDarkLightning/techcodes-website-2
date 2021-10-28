import { Box } from "@chakra-ui/layout";
import React from "react";

interface ContentWrapperProps {}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <Box mt="8vh">{children}</Box>;
};

export default ContentWrapper;
