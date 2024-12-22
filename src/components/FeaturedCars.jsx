// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import testCar from "../assets/testCars.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import InstagramCard from "./Cards";

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

function FeaturedCars() {
  return (
  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {vehicles.map((vehicle) => (
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
        </div>

       
    
  );
}

export default FeaturedCars;
