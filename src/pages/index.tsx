import { Heading } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet title="Hello world!" />
      <Heading color="pink">hello</Heading>
    </>
  );
};

export default HomePage;
