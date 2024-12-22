import InstagramCard from "../components/Cards";    
import Footer from "../components/Footer";  
import AutoPlaySlider from "../components/SliderCard";
import "./Video.css"    


const VideoGallery = () => {

  const posts = [
    {
      imgSrc: "/assets/post2.jpg.png", 
      likes: "573",
      description: "SoniAutoMarket AUDI S6 KEEPING CALM IN THE STORM! 😎",
    },
    {
      imgSrc: "/assets/post3.jpg.png", 
      likes: "1084",
      description:
        "SoniAutoMarket M550i Landed in stock✅ #soniautomarket #weselldreams #bmw #m550i",
    },
    {
      imgSrc: "/assets/post4.jpg.png", 
      likes: "1510",
      description:
        "SoniAutoMarket Can you guess what car it is? #soniautomarket #weselldreams #viral #carreels",
    },
    {
      imgSrc: "/assets/post5.jpg.png", 
      likes: "2872",
      description: "SoniAutoMarket BOSS WHIP FOR WINTERS❄️ #soniautomarket #weselldreams",
    },
  ];
  
  return (
    <>
               <section className="px-5 py-20 ">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            SONI AUTO MARKETS ON <span className="text-red-500">TikTok</span>
          </h2>
          <p className="text-gray-600">We are committed to making you a long-lasting customer and friend</p>
        </div>
        <AutoPlaySlider/>
      </section>

        <section  className="video-foter">
          <Footer/>
        </section>

    </>
  )
}

export default VideoGallery
