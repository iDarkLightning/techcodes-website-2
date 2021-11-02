import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Fade,
  Flex,
  IconButton,
  Image,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import LogoIcon from "@images/logo.svg";
import Hamburger from "hamburger-react";
import React, { useEffect } from "react";
import Menu from "./menu";

interface NavProps {}

const StylableHamburger = chakra(Hamburger);

const Nav: React.FC<NavProps> = ({}) => {
  const { isOpen, onOpen, onToggle } = useDisclosure();

  useEffect(() => console.log(isOpen), [isOpen]);

  return (
    <Flex alignItems="center">
      <Center position="absolute" w="100vw">
        <Image src={LogoIcon} h="100%" />
      </Center>
      <Flex position="relative" justifyContent="flex-end" w="100vw">
        <Box
          zIndex="9999"
          bgColor={isOpen ? "none" : "#e7e7e7"}
          w="4vw"
          h="3vw"
          cursor="pointer"
          onClick={onToggle}>
          {/* <MenuButton menuOpen={isOpen} /> */}
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
