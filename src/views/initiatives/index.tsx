import React from "react";
import Footer from "@components/footer";
import { Nav } from "@components";
import SectionWrapper from "../home/components/SectionWrapper";

interface InitiativesViewProps {}

const InitiativesView: React.FC<InitiativesViewProps> = ({}) => {
  return (
    <SectionWrapper>
      <Nav />
      <Footer />
    </SectionWrapper>
  );
};

export default InitiativesView;
