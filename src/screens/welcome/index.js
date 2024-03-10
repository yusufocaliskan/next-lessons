import Logo from "@/components/Logo";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const WelcomeScreen = () => {
  return (
    <div>
      <header className="header">
        <div className="header-menu-trigger">
          <FaBars size="22" />
          <span>Menu</span>
        </div>
        <div className="header-logo">
          <div className="header-logo-wrapper">
            <Logo />
          </div>
          <span>Newspaper</span>
        </div>
        <div className="header-links">
          <div className="header-favorite header-link-item">
            <IoMdStarOutline size="24" />
            <span>Favorite</span>
          </div>
          <div className="header-search header-link-item">
            <IoSearchOutline size="20" />
            <span>Search</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default WelcomeScreen;
