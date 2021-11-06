import { Box, Center, chakra, Flex, Image, useDisclosure } from "@chakra-ui/react";
import LogoIcon from "@images/logo.svg";
import Hamburger from "hamburger-react";
import React from "react";
import Menu from "./menu";
import GatsbyLink from "gatsby-link";

interface NavProps {}

const StylableHamburger = chakra(Hamburger);

const Nav: React.FC<NavProps> = ({}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex />
      <Center>
        <GatsbyLink to="/">
          <Image src={LogoIcon} h="100%" />
        </GatsbyLink>
      </Center>
      <Flex>
        <Box
          zIndex="9999"
          bgColor={isOpen ? "none" : "#e7e7e7"}
          // w="4vw"
          // h="3vw"
          cursor="pointer"
          onClick={onToggle}>
          <Center h="100%" color={isOpen ? "text" : "#161616"}>
            <StylableHamburger toggled={isOpen} direction="left" size={28} />
          </Center>
        </Box>
      </Flex>
      <Menu open={isOpen} />
    </Flex>
  );
};

export default Nav;
