import "./postcard.css"
import "@/app/globals.css"


const PostCard =({imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link})=> { 
    

    return <>
    <div className="wrapper">
        <div className="card-container">
            <div className="card">
                <img src={imgSrc} alt={imgAlt} className="card-img" />
                <h1 className="card-title">{title}</h1>
                <p className="card-desc">{description}</p>
                <a href={link} className="card-btn">{buttonText}</a>
            </div>
            
        </div>
        <div className="card-container">
            <div className="card">
                <img src={imgSrc} alt={imgAlt} className="card-img" />
                <h1 className="card-title">{title}</h1>
                <p className="card-desc">{description}</p>
                <a href={link} className="card-btn">{buttonText}</a>
            </div>
            
        </div>
        <div className="card-container">
            <div className="card">
                <img src={imgSrc} alt={imgAlt} className="card-img" />
                <h1 className="card-title">{title}</h1>
                <p className="card-desc">{description}</p>
                <a href={link} className="card-btn">{buttonText}</a>
            </div>
            
        </div>
        <div className="card-container">
            <div className="card">
                <img src={imgSrc} alt={imgAlt} className="card-img" />
                <h1 className="card-title">{title}</h1>
                <p className="card-desc">{description}</p>
                <a href={link} className="card-btn">{buttonText}</a>
            </div>
            
        </div>
       
    </div>

</>
}

export default PostCard;