import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const resetFilters = useGameQueryStore((s) => s.resetFilters);

  return (
    <HStack padding="10px">
      <Link to="/" onClick={() => resetFilters()}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
