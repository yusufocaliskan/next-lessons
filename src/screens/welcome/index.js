

import Header from "@/components/Header";
import Slider from "@/components/Slider";
import PostCard from "@/components/PostCard"
import Headline from "@/components/Headline"
import LiveBlog from "@/components/LiveBlog";



const WelcomeScreen = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <PostCard imgSrc="https://picsum.photos/300/200" imgAlt="Img Alt" title="Post Title" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " buttonText="Read More" link="#" />
      </div>
      <div>
        <Headline />
      </div>
      <div> 
        <LiveBlog />
      </div>
    </div>
  );
};

export default WelcomeScreen;
