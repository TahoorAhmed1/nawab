import React, { useState, useEffect } from "react";
import "../screens/Home.css";
import BackImgSection from "../components/BackImgSection";
import Comparison from "../components/Comparison";
import Comparison2 from "../components/Comparison2";
import Footer from "../components/Footer";
import LastImg from "../components/LastImg";
import AutoPlaySlider from "../components/SliderCard";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaFacebook, FaInstagram } from "react-icons/fa";

import banner1 from './../assets/back.png'
import banner2 from './../assets/banner2.png'
import banner3 from './../assets/banner1.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import FeaturedCars from "../components/FeaturedCars";
import SellCar from "../components/home/buycar";

const Home = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [cars, setCars] = useState([]);
  const [minYearOptions, setMinYearOptions] = useState([]);
  const [maxYearOptions, setMaxYearOptions] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const defaultImage = "/src/assets/notfound.png"; // Path to your default image

  useEffect(() => {
    // Fetch min and max year
    fetch("https://sonimotors.themerchantinc.com/api/cars/mix-max-year")
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          const minYear = parseInt(data.data.min_year);
          const maxYear = parseInt(data.data.max_year);
          setMinYearOptions(
            Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i)
          );
          setMaxYearOptions(
            Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i)
          );
        }
      })
      .catch((error) =>
        console.error("Error fetching min and max year:", error)
      );

    // Fetch makes (body styles)
    fetch("https://sonimotors.themerchantinc.com/api/brand?page_size=100")
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setMakes(data.data.brands);
        }
      })
      .catch((error) => console.error("Error fetching body styles:", error));
  }, []);
  useEffect(() => {
    if (make) {
      fetch(
        `https://sonimotors.themerchantinc.com/api/car-model/brand-related/${make}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            setModels(data.data.models);
          }
        })
        .catch((error) => console.error("Error fetching models:", error));
    } else {
      setModels([]); // Clear models if no brand is selected
    }
  }, [make]);

  const navigate = useNavigate();

  const handleSearch = async () => {
    const query = new URLSearchParams({
      brand: make,
      model,
      min_year: minYear,
      max_year: maxYear,
    }).toString();

    try {
      const response = await fetch(
        `https://sonimotors.themerchantinc.com/api/cars/filter?${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate(
        `car-details-search/brand=${make}&min_year=${minYear}&max_year=${maxYear}&color=1&engine=&fuel_type=&body_style=1&model=${model}}`
      );

      const data = await response.json();
      if (data.status) {
        setCars(data.data.cars);
      } else {
        console.error("No cars found");
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  const [searchKey, setSearchKey] = useState("");
  const [carsSearch, setCarsSearch] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to handle search input change
  const handleSearchInput = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value) {
      fetchCars(e.target.value);
    } else {
      setCarsSearch([]);
      setDropdownVisible(false);
    }
  };

  // Debounced function to fetch cars from the API
  const fetchCars = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://sonimotors.themerchantinc.com/api/cars/search?search_key=${searchTerm}`
      );
      if (response.data.status && response.data.data.cars.length > 0) {
        setCarsSearch(response.data.data.cars);
        setDropdownVisible(true);
      } else {
        setCarsSearch([]);
        setDropdownVisible(false);
      }
    } catch (error) {
      console.error("Error fetching car data:", error);
      setCarsSearch([]);
      setDropdownVisible(false);
    }
  };

  const [banner, setBanner] = useState(null);

  const [bodyTypesView, setBodyTypesView] = useState([]);
  const [brandsView, setBrandsView] = useState([]);

  useEffect(() => {
    // Fetch body styles from the API
    const fetchBodyStyles = async () => {
      try {
        const response = await axios.get(
          "https://sonimotors.themerchantinc.com/api/body_style?page_size=100"
        );
        const data = response.data.data.body_styles;

        // Map the API response to the desired format
        const formattedBodyTypes = data.map((bodyStyle) => ({
          img: bodyStyle.media[0]?.original_url || "", // Get the image URL
          label: bodyStyle.title, // Get the title
          id: bodyStyle.id, // Get the title
        }));

        setBodyTypesView(formattedBodyTypes);
      } catch (error) {
        console.error("Error fetching body styles:", error);
      }
    };
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "https://sonimotors.themerchantinc.com/api/brand?page_size=100"
        );
        const data = response.data.data.brands;

        const formattedBodyTypes = data.map((brands) => ({
          img: brands.media[0]?.original_url || "",
          label: brands.title,
          id: brands.id,
        }));

        setBrandsView(formattedBodyTypes);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBodyStyles();
    fetchBrands();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: brandsView.length < 6 ? brandsView.length : 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  var bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className="home-sec " style={{ position: "relative" }}>
        {/* Background Image or Video */}
        {/* {banner && banner.mime_type === "image/png" ? (
          <div
            style={{
              backgroundImage: `url(${banner.original_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "-webkit-fill-available",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></div>
        ) : banner && banner.mime_type.startsWith("image/") ? ( // Cover other image types
          <div
            style={{
              backgroundImage: `url(${banner.original_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "-webkit-fill-available",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></div>
        ) : banner && banner.mime_type === "video/mp4" ? (
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "-webkit-fill-available",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            src={banner.original_url}
            controls
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <div
            style={{
              backgroundImage: "url(../assets/back.png)", // Fallback background for unsupported media types
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "-webkit-fill-available",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></div>
        )} */}
        <div className="bannerSlider w-full min-h-screen">
          <Slider {...bannerSettings} className='w-full min-h-screen [&>.slick-list]:w-full [&>.slick-list]:min-h-screen'>
            <div className="bannerSlide w-full min-h-screen">
              <img src={banner1} className="min-h-screen object-cover"/>
            </div>
            <div className="bannerSlide w-full min-h-screen">
              <img src={banner2} className="min-h-screen object-cover"/>
            </div>
            <div className="bannerSlide w-full min-h-screen">
              <img src={banner3} className="min-h-screen object-cover"/>
            </div>
          </Slider>
        </div>
        <div className="container-web absolute top-0 w-full">
          <div className="flex flex-col items-center justify-center min-h-screen ">
            <div
              style={{ width: "100%", marginTop: "130px" }}
              className="bg-black bg-opacity-50 text-white text-center py-8 px-16 w-full rounded-lg"
            >
              <h1 className="text-2xl  font-sans text-center md:text-[2.2rem] font-semibold mb-6">
                WELCOME TO{" "}
                <span style={{ color: "#F40000" }}>SONI AUTO MARKET</span>
              </h1>

              {/* Input Row */}
              <div className="flex flex-col items-center gap-4 w-full drop-home-wala">
                <input
                  type="text"
                  placeholder="Find Your Car (Year Make Model)"
                  className="w-full py-2 px-6 bg-transparent rounded-lg border border-[#FFFFFF]  text-[#FFFFFF] placeholder:text-[#FFFFFF]"
                  value={searchKey}
                  onChange={handleSearchInput}
                />

                {/* Dropdown List */}
                {dropdownVisible && (
                  <div
                    className="w-full bg-white text-black mt-1 rounded shadow-lg z-10"
                    style={{
                      position: "absolute",
                      transform: "translate(0px, 41px)",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "91%",
                    }}
                  >
                    {carsSearch.map((car) => (
                      <Link
                        key={car.id}
                        to={`/car-details/${car.id}`}
                        style={{
                          padding: "0px 10px",
                          border: "1px solid black",
                          margin: "10px",
                          display: "block",
                          borderRadius: "114px",
                        }}
                      >
                        <div
                          className="p-2 cursor-pointer"
                          onClick={() => {
                            setSearchKey(car.title); // Set selected car title to input
                            setDropdownVisible(false); // Hide dropdown
                          }}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            {car.title} - {car.year} ({car.kilometer} km)
                          </span>
                          <FaArrowRight />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Dropdowns and Search Button Row */}
                <div className="flex justify-center items-center gap-x-[20px] w-[92%] ">
                  {/* Make Dropdown */}
                  <div className="relative w-[100%] mt-6">
                    <select
                      className="w-full py-1 px-2 border appearance-none pr-8 text-black modelsBrands"
                      onChange={(e) => setMake(e.target.value)}
                    >
                      <option value="">Make</option>
                      {makes.map((make) => (
                        <option key={make.id} value={make.id}>
                          {make.title}
                        </option>
                      ))}
                    </select>
                    <span
                      className=" text-[#CCCCCC] mx-2 absolute top-0 right-8 z-50 "
                      style={{ fontSize: "20px" }}
                    >
                      |
                    </span>
                    <span className="text-black">
                      <svg
                        className=" absolute right-2 top-1.5 z-50 w-8 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06 0L10 10.5l3.71-3.29a.75.75 0 111.04 1.08l-4.25 3.75a.75.75 0 01-1.04 0l-4.25-3.75a.75.75 0 010-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Model Dropdown */}
                  <div className="relative w-[100%] mt-6">
                    <select
                      className="w-full py-1 px-2 border appearance-none pr-8 text-black modelsBrands"
                      onChange={(e) => setModel(e.target.value)}
                    >
                      <option value="">Model</option>
                      {models.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.title}
                        </option>
                      ))}
                    </select>
                    <span
                      className=" text-[#CCCCCC] mx-2 absolute top-0 right-8 z-50 "
                      style={{ fontSize: "20px" }}
                    >
                      |
                    </span>
                    <span className="text-black">
                      <svg
                        className=" absolute right-2 top-1.5 z-50 w-8 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06 0L10 10.5l3.71-3.29a.75.75 0 111.04 1.08l-4.25 3.75a.75.75 0 01-1.04 0l-4.25-3.75a.75.75 0 010-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Min Year Dropdown */}
                  <div className="relative w-[100%] mt-6">
                    <select
                      className="w-full py-1 px-2 border appearance-none pr-8 text-black"
                      onChange={(e) => setMinYear(e.target.value)}
                    >
                      <option value="">Min Year</option>
                      {minYearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <span
                      className=" text-[#CCCCCC] mx-2 absolute top-0 right-8 z-50 "
                      style={{ fontSize: "20px" }}
                    >
                      |
                    </span>
                    <span className="text-black">
                      <svg
                        className=" absolute right-2 top-1.5 z-50 w-8 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06 0L10 10.5l3.71-3.29a.75.75 0 111.04 1.08l-4.25 3.75a.75.75 0 01-1.04 0l-4.25-3.75a.75.75 0 010-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Max Year Dropdown */}
                  <div className="relative w-[100%] mt-6">
                    <select
                      className="w-full py-1 px-2 border appearance-none pr-8 text-black"
                      onChange={(e) => setMaxYear(e.target.value)}
                    >
                      <option value="">Max Year</option>
                      {maxYearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <span
                      className=" text-[#CCCCCC] mx-2 absolute top-0 right-8 z-50 "
                      style={{ fontSize: "20px" }}
                    >
                      |
                    </span>
                    <span className="text-black">
                      <svg
                        className=" absolute right-2 top-1.5 z-50 w-8 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06 0L10 10.5l3.71-3.29a.75.75 0 111.04 1.08l-4.25 3.75a.75.75 0 01-1.04 0l-4.25-3.75a.75.75 0 010-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Search Button */}
                  <button
                    style={{ padding: "6px 15px" }}
                    className="text-white rounded w-full search-wala-button hover-btn-sary bg-[#F40000] border-0 font-medium hover:border-black"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center ">
                <Link
                  href="/car-details-search/brand=&min_price=&max_price=10000&min_year=&max_year=&color=&engine=&fuel_type=&body_style=1&model="
                  className="inline-block px-10 font-medium  text-center mr-8 py-2.5 bg-[#F40000] text-white rounded hover:bg-red-600 transition-colors"
                >
                  <p>Cars above then $10000</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="quickSearchByMake py-10 ">
        <div className="text-center mb-[55px]">
          <h1 className="text-3xl md:text-[2.2rem] font-semibold font-sans">
            QUICK SEARCH BY<span className="text-[#F40000]"> MAKE</span>
          </h1>
        </div>

        <div className="container mx-auto px-4">
          {brandsView.length > 0 ? (
            <div className="slider-container">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}

                slidesPerView={brandsView.length < 6 ? brandsView.length : 6}
                breakpoints={{
                  1280: { slidesPerView: 6 }, // XL screens
                  1024: { slidesPerView: 5 }, // Desktop
                  768: { slidesPerView: 3 }, // Tablet
                  640: { slidesPerView: 2 }, // Small tablet
                  480: { slidesPerView: 1 }, // Mobile
                }}
                className="brand-swiper"
              >
                {brandsView.map((item, index) => (
                  <SwiperSlide key={index} className="swipeMakeQuick">
                    <Link
                      href={`car-details-search/brand=&min_year=&max_year=&color=1&engine=&fuel_type=&body_style=&model=${index}`}
                      className="block px-2"
                    >
                      <div className="relative h-[110px]  flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <img
                          className={`h-auto max-h-[110px] w-full max-w-[150px] object-contain ${item.img ? "" : "defaultimg"
                            }`}
                          src={item.img}
                          alt={item.label}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <p className="text-center">Loading body types...</p>
          )}
        </div>
      </section>

      <section>
        <BackImgSection />
      </section>

      <SellCar></SellCar>

      <section
        className="  home-background-imgs quickSearchByMake"
        style={{
          backgroundImage: "url(../assets/car-bg.png)",
          maxWidth: "100%",
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl text-center md:text-[2.2rem] font-sans font-semibold mb-16">
            QUICK SEARCH BY <span className="text-red-500">BODY TYPE</span>
          </h1>
        </div>
        <div className="container-web ">

          {/* Show the slider only if bodyTypesView is populated */}
          {bodyTypesView.length > 0 ? (
            // <div className="slider-container">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              autoplay={true}
              slidesPerView={brandsView.length < 6 ? brandsView.length : 6}
              navigation
              breakpoints={{
                1280: { slidesPerView: 6 }, // For extra large screens
                1024: { slidesPerView: 5 }, // For desktops
                768: { slidesPerView: 3 }, // For tablets
                640: { slidesPerView: 2 }, // For small tablets
                480: { slidesPerView: 1 }, // For mobile phones
              }}
            >
              <div className="flex flex-wrap gap-28 mt-5 px-5">



                {bodyTypesView.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={`car-details-search/brand=&min_year=&max_year=&color=1&engine=&fuel_type=&body_style=${index}&model=}`}
                      className="w-full flex flex-col items-center  "
                    >
                      <img
                        className={`w-full max-w-[193px] hover:scale-110 transition duration-200 h-[72px] object-contain ${item.img ? "" : "defaultimg"
                          }`}
                        src={item.img ? item.img : defaultImage}
                        alt={item.label}
                      />
                      <span className="mt-2 text-center lg:text-[17px] text-[15px]">
                        {item.label}
                      </span>
                    </Link>
                  </div>
                ))}
              </ div>
            </Swiper>

          ) : (
            <p className="text-center">Loading body types...</p>
          )}
        </div>
      </section>

 

      <section>
        <LastImg />
      </section>
      <section className=" py-[100px]  bg-[#EFF3FA] ">
        <div className="container-web">
          <h2 className="text-[2.2rem] uppercase font-semibold font-sans text-center mb-[75px]">
            Recent Happy customers &{" "}
            <span className="text-red-500"> Featured Vehicles</span>
          </h2>

          <AutoPlaySlider />
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3 ">
              <span className="text-xl font-medium text-black">
                Follow Us :
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="bg-[#D7E3EF] p-2 rounded-full hover:text-gray-900 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-[#D7E3EF] p-2 rounded-full hover:text-gray-900 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 py-[12px] px-[33px] font-medium rounded-sm text-white text-xs">
              View 4 Featured Cars
            </button>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
