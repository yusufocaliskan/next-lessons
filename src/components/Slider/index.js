import { IoPlayCircleOutline, IoSearchOutline } from "react-icons/io5";

const Slider =()=> {
    return <>
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
    </>
}

export default Slider;