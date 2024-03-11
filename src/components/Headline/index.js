import "./headline.css"
import { IoPlayCircleOutline, IoSearchOutline } from "react-icons/io5";

const Headline = () => {
    return (
        <div className="wrapper container headline-top">
        <div className="main-headline">
          <div className="headline">
            <div className="headline-image">
              <img src="https://picsum.photos/200" />
            </div>
            <div className="headline-informations">
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
    )
}

export default Headline;