import { useRef } from "react";
import Slider from "react-slick";
import InstagramCard from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const vehicles = [
  {
    id: 1,
    year: 2022,
    make: "Ferrari",
    model: "F8",
    price: 690000,
    mileage: 104,
    transmission: "transmission",
    image: "../assets/post2.jpg.png",
  },
  {
    id: 2,
    year: 2021,
    make: "Mercedes",
    model: "AMG GT",
    price: 549999,
    mileage: 3655,
    transmission: "transmission",
    image: "../assets/post3.jpg.png",
  },
  {
    id: 3,
    year: 2023,
    make: "Lamborghini",
    model: "Urus",
    price: 479999,
    mileage: 4431,
    transmission: "transmission",
    image: "../assets/post4.jpg.png",
  },
  {
    id: 4,
    year: 2020,
    make: "Rolls-Royce",
    model: "Cullinan",
    price: 349698,
    mileage: 16850,
    transmission: "transmission",
    image: "../assets/post5.jpg.png",
  },
];

const   AutoPlaySlider = () => {
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
      <Slider ref={sliderRef} {...settings} className="custom-slider">
        
        {vehicles.map((vehicle, index) => (
     
                <InstagramCard
               imgSrc={vehicle.image}
               likes={vehicle.likes}
               description={vehicle.description}
               year={vehicle.year}
               make={vehicle?.make}
               price={vehicle?.price}
               model={vehicle?.model}
               mileage={vehicle?.mileage}
               transmission={vehicle?.transmission}
             />
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default AutoPlaySlider;
