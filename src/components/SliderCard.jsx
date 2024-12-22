import { useRef } from "react";
import Slider from "react-slick";
import InstagramCard from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const posts = [
  {
    imgSrc: "../assets/post2.jpg.png",
    likes: "573",
    description: "SoniAutoMarket AUDI S6 KEEPING CALM IN THE STORM! 😎",
  },
  {
    imgSrc: "../assets/post3.jpg.png",
    likes: "1084",
    description:
      "SoniAutoMarket M550i Landed in stock✅ #soniautomarket #weselldreams #bmw #m550i",
  },
  {
    imgSrc: "../assets/post4.jpg.png",
    likes: "1510",
    description:
      "SoniAutoMarket Can you guess what car it is? #soniautomarket #weselldreams #viral",
  },
  {
    imgSrc: "../assets/post5.jpg.png",
    likes: "2872",
    description:
      "SoniAutoMarket BOSS WHIP FOR WINTERS❄️ #soniautomarket #weselldreams",
  },
];

const AutoPlaySlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
  
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        // xl: 1280px+
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        // lg: 1024px+
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        // md: 768px+
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        // sm: 640px+
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
    <div className="relative h-auto">
      <Slider ref={sliderRef} {...settings} >
        {posts.map((post, index) => (
         <div
         key={index}
         className="pr-5 "
       >
            <InstagramCard
              imgSrc={post.imgSrc}
              likes={post.likes}
              description={post.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default AutoPlaySlider;
