import Logo from "@/components/Logo";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const WelcomeScreen = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="header"
        bg="#D83F31"
        color="white"
        px="1rem"
        py=".5rem"
      >
        <Box
          className="header-menu-trigger"
          display="flex"
          alignItems="center"
          gap=".7rem"
        >
          <div className="menu-trigger-icon">
            <FaBars size="26" />
          </div>
          <span>Menu</span>
        </Box>
        <Box
          className="header-logo"
          display="flex"
          alignItems="center"
          gap=".7rem"
        >
          <Box width="2.5rem" height="3rem" display="flex">
            <Logo />
          </Box>
          <Box fontSize="1.8rem" fontWeight="bold">
            Newspaper
          </Box>
        </Box>

        <Box className="header-links" display="flex" gap="1rem">
          <Box
            className="header-link-item"
            display="flex"
            alignItems="center"
            gap=".7rem"
          >
            <span>
              <IoMdStarOutline size={32} />
            </span>
            <span>Favorites</span>
          </Box>
          <Box
            className="header-link-item"
            display="flex"
            alignItems="center"
            gap=".7rem"
          >
            <span>
              <IoSearchOutline size={26} />
            </span>
            <span>Search</span>
          </Box>
        </Box>
      </Box>
      <Box className="main-menu">
        <Link href="#">Ukraine</Link>
        <Link href="#">Nahost-Konflikt</Link>
        <Link href="#">Politik</Link>
        <Link href="#">Wirtschaft</Link>
        <Link href="#">Panorama</Link>
        <Link href="#">Sport</Link>
        <Link href="#">Ratgeber</Link>
        <Link href="#">Wissen</Link>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
