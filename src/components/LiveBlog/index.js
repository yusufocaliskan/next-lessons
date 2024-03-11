import "./liveblog.css"
import { TbLivePhoto } from "react-icons/tb";


const LiveBlog = () => {
    return (
        
        <div className="wrapper-blog container-blog">
            <div className="live-blog-title">
                    Live Blog - Aktuel News
                    <span className="live"><TbLivePhoto size="33" /></span>
            </div>
            
            <div className="blog-container">
                
                <div className="blog-card">
                    <p className="date">20:00</p>
                    <h1 className="blog-card-title">LIVE BLOG TITLE</h1>
                    
                </div>
                <div className="blog-card">
                    <p className="date">20:00</p>
                    <h1 className="blog-card-title">LIVE BLOG TITLE</h1>
                    
                </div>
                <div className="blog-card">
                    <p className="date">20:00</p>
                    <h1 className="blog-card-title">LIVE BLOG TITLE</h1>
                    
                </div>

            </div>

        </div>
    )
}

export default LiveBlog;