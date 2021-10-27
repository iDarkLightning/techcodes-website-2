import React from "react";
import { Helmet } from "react-helmet";
import { HomeView } from "@views";

const HomePage = () => {
  return (
    <>
      <Helmet title="Hello world!" />
      <HomeView />
    </>
  );
};

export default HomePage;
