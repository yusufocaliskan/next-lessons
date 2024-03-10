import "./postcard.css"
import "@/app/globals.css"
import { IoPlayCircleOutline, IoSearchOutline } from "react-icons/io5";


const PostCard =({imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link})=> { 
    

    return <>
    <div className="wrapper container featuredposts">
        <div className="main-post">
                <div className="post">
                    <div className="post-image">
                    <img src="https://i1.adis.ws/i/canon/future_of_forests_header_16x9_dc14bbe1e35040f79bf566eedaf5c8f7?$hero-header-half-16by9-dt$" />
                    </div>
                    <div className="post-informations">
                    <div className="icon-with-text">
                        <IoPlayCircleOutline size="22" />
                        <span>With Video</span>
                    </div>
                    <span>Franziskus' Haltung zum Krieg</span>
                    <h1>Ukraine: Warum der Papst die weiße Fahne will</h1>
                    </div>
                </div>
        </div>
        <div className="card-container">
            <div className="card">
                <img src={imgSrc} alt={imgAlt} className="card-img" />
                <h1 className="card-title">{title}</h1>
                <p className="card-desc">{description}</p>
            </div>
            
        </div>
        <div className="card-container">
            <div className="card">
                <img src={imgSrc} alt={imgAlt} className="card-img" />
                <h1 className="card-title">{title}</h1>
                <p className="card-desc">{description}</p>
            </div>
            
        </div>

       
    </div>

</>
}

export default PostCard;