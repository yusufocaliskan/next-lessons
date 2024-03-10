import Logo from "@/components/Logo";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { IoPlayCircleOutline, IoSearchOutline } from "react-icons/io5";



const WelcomeScreen = () => {
  return (
    <div>
      <header className="heasder">
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
      </header>

      <div className="spacer"></div>
      <div className="category">
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
      </div>
      <div className="wrapper container">
        <div className="main-slider">
          <div className="slide">
            <div className="slide-image">
              <img src="https://i1.adis.ws/i/canon/future_of_forests_header_16x9_dc14bbe1e35040f79bf566eedaf5c8f7?$hero-header-half-16by9-dt$" />
            </div>
            <div className="slide-informations">
              <div className="icon-with-text">
                <IoPlayCircleOutline size="22" />
                <span>With Video</span>
              </div>
              <span>New Rent Consept</span>
              <h1>Was bringt die Aktienrente?</h1>
              <div className="news-author-infos">
                <div className="author-image">
                  <img src="https://www.zdf.de/assets/klaus-weber-100~314x314?cb=1581074596253" />
                </div>
                <span>Kadir Gurpinar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
