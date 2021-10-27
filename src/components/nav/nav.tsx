import { HamburgerIcon } from "@chakra-ui/icons";
import { Center, Flex, IconButton, Image } from "@chakra-ui/react";
import LogoIcon from "@images/logo.svg";
import React from "react";

interface NavProps {}

const NavIcon = () => <Image src={LogoIcon} h="100%" />;

// TODO: actually make this work :)
const MenuButton = () => (
  <IconButton
    icon={<HamburgerIcon />}
    aria-label="menu-icon"
    bgColor="#E7E7E7"
    color="#161616"
    borderRadius="0"
    w="4vw"
    h="3vw"
  />
);

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <Flex alignItems="center">
      <Center position="absolute" w="100vw">
        <NavIcon />
      </Center>
      <Flex position="relative" justifyContent="flex-end" w="100vw">
        <MenuButton />
      </Flex>
    </Flex>
  );
};

export default Nav;
