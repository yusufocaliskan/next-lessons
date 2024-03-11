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