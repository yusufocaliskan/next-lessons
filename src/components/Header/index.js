import Logo from "@/components/Logo";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
return (


    <><header className="header">
        <div class="header-inner">
            <div className="header-menu-trigger">
                <FaBars size="25" />
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
        </div>
    </header><div className="spacer"></div><div className="category">
            <div className="horizontal-category wrapper">
                <Link href="#" className="active">
                    Politika
                </Link>
                <Link href="#">Politika</Link>
                <Link href="#">Politika</Link>
                <Link href="#">Politika</Link>
                <Link href="#">Politika</Link>
                <Link href="#">Politika</Link>
                <Link href="#">Politika</Link>
                <Link href="#">Politika</Link>
            </div>
        </div></>

)
}
export default Header;