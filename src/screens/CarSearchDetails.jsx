import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { card_data } from "../utils/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../../src/App.css";
import axios from "axios";
import boximg from "../assets/boxes.png";
import { useLocation1 } from "../components/LocationContex";
const CarDetailsSearch = () => {
  const { selectedLocation, setSelectedLocation } = useLocation1();

  const location = useLocation();
  const [carsSearched, setCarsSearched] = useState([]);
  console.log(carsSearched);
  const [carData, setCarData] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [bodyStylesSelected, setBodyStylesSelected] = useState([]);
  const [bodyStyle, setBodyStyle] = useState([]);

  // State for selected filters
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [make, setMake] = useState("");

  const [minYearOptions, setMinYearOptions] = useState([]);
  const [maxYearOptions, setMaxYearOptions] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [engine, setEngine] = useState([]);
  const [searchKey, setSearchKey] = useState("");

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
  useEffect(() => {
    // Fetch data from the API
    axios
      .get(
        `https://sonimotors.themerchantinc.com/api/cars/filter?${location.search}`
      )
      .then((response) => {
        if (response.data.status && response.data.data) {
          // Initialize currentImageIndex for each car
          const carsWithImageIndex = response.data.data.cars.map((car) => ({
            ...car,
            currentImageIndex: 0,
          }));
          setCarData(carsWithImageIndex);
        }
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
    fetchCars();
  }, [location.search]);

  const handleNextImage = (carIndex) => {
    setCarData((prevData) =>
      prevData.map((car, index) => {
        if (index === carIndex) {
          const newIndex = (car.currentImageIndex + 1) % car.media.length;
          return { ...car, currentImageIndex: newIndex };
        }
        return car;
      })
    );
  };

  const handlePrevImage = (carIndex) => {
    setCarData((prevData) =>
      prevData.map((car, index) => {
        if (index === carIndex) {
          const newIndex =
            (car.currentImageIndex - 1 + car.media.length) % car.media.length;
          return { ...car, currentImageIndex: newIndex };
        }
        return car;
      })
    );
  };
  const fetchData = async () => {
    try {
      const brandRes = await axios.get(
        "https://sonimotors.themerchantinc.com/api/brand?page_size=100"
      );
      const colorRes = await axios.get(
        "https://sonimotors.themerchantinc.com/api/color?page_size=100"
      );
      const transmissionRes = await axios.get(
        "https://sonimotors.themerchantinc.com/api/transmission?page_size=100"
      );
      const bodyStyleRes = await axios.get(
        "https://sonimotors.themerchantinc.com/api/body_style?page_size=100"
      );

      setBrands(brandRes.data.data.brands);
      setColors(colorRes.data.data.Colors);
      setTransmissions(transmissionRes.data.data.transmission);
      setBodyStyle(bodyStyleRes.data.data.body_styles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCars = async () => {
    const url = `https://sonimotors.themerchantinc.com/api/cars/filter?search_key=${searchKey}&brand=${selectedBrand}&min_price=${minPrice}&max_price=${maxPrice}&min_year=${minYear}&max_year=${maxYear}&color=${selectedColor}&engine=${engine}&fuel_type=&body_style=${bodyStylesSelected}`;

    try {
      const response = await axios.get(url);
      if (response.data.status) {
        setCarsSearched(response.data.data.cars);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className=" p-4 min-h-screen">
        <div className="flex flex-col md:flex-row">
          <div
            className="md:w-1/4 bg-white p-4 rounded-lg shadow-md self-start side-bar"
            style={{ borderTop: "4px solid black" }}
          >
            <div
              style={{ cursor: "pointer" }}
              className="searchbar flex items-center gap-4"
            >
              <div>
                <img
                  style={{ marginBottom: "12px" }}
                  src="../assets/search-icon.png"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">Search</h2>
            </div>
            <form className="space-y-4" style={{ marginTop: "-30px" }}>
              {/* Make Dropdown */}
              <div className="relative w-[100%] mt-6">
                <select
                  className="w-full p-2 border appearance-none pr-8 text-black modelsBrands"
                  onChange={(e) => setMake(e.target.value)}
                >
                  <option value="">Make</option>
                  {makes.map((make) => (
                    <option key={make.id} value={make.id}>
                      {make.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model Dropdown */}
              <div className="relative w-[100%] mt-6">
                <select
                  className="w-full p-2 border appearance-none pr-8 text-black modelsBrands"
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="">Model</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Second row with two dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-[100%] ">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                    onChange={(e) => setMinYear(e.target.value)}
                  >
                    <option>Min Year</option>
                    {minYearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <div className="relative w-[100%] ">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                    onChange={(e) => setMaxYear(e.target.value)}
                  >
                    <option>Max Year</option>
                    {maxYearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </div>

              {/* Third row with two dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-[100%] ">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                    onChange={(e) => setMinPrice(e.target.value)}
                  >
                    <option>Min Price</option>
                    <option>$ 4000</option>
                    <option>$ 3000</option>
                    <option>$ 4000</option>
                    <option>$ 5000</option>
                    <option>$ 6000</option>
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <div className="relative w-[100%] ">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  >
                    <option>Max Price</option>
                    <option>$ 7000</option>
                    <option>$ 8000</option>
                    <option>$ 9000</option>
                    <option>$ 10000</option>
                    <option>$ 11000</option>
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </div>

              <div className="four-sel" style={{ margin: "10px 0px" }}>
                <div className="relative w-[100%] mt-6">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    <option>Any Color</option>
                    {colors.map((color) => (
                      <option key={color.id} value={color.id}>
                        {color.title}
                      </option>
                    ))}
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>

                <div className="relative w-[100%] mt-6">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                    onChange={(e) => setEngine(e.target.value)}
                  >
                    <option>Any Engine</option>
                    {transmissions.map((transmission) => (
                      <option key={transmission.id} value={transmission.id}>
                        {" "}
                        {/* Change to ID here */}
                        {transmission.title}
                      </option>
                    ))}
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>

                <div className="relative w-[100%] mt-6">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                    onChange={(e) => setBodyStylesSelected(e.target.value)}
                  >
                    <option>Any Body Type</option>
                    {bodyStyle.map((style) => (
                      <option key={style.id} value={style.id}>
                        {style.title}
                      </option>
                    ))}
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>

                <div className="keyword mt-6">
                  <input
                    className="w-full p-2 border rounded-md"
                    placeholder="KEYWORD SEARCH"
                    type="text"
                    onChange={(e) => setSearchKey(e.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={fetchCars}
                className="w-full bg-black text-white p-2 rounded-md flex justify-center items-center"
                type="button"
              >
                Search
              </button>
              <button className="w-full bg-black text-white p-2 rounded-md flex justify-center items-center">
                Reset
              </button>
            </form>
          </div>

          {/* Car Listings */}

          <div className="md:w-3/4 mt-4 md:mt-0 md:ml-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-[95%] sm:mt-3 sm:mb-3 toranto">
                <select
                  className="w-full p-2 border rounded-md appearance-none pr-8"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="Toronto, Ontario">Toronto, Ontario</option>
                  <option value="East moosejaw Saskatchewan">
                    East moosejaw Saskatchewan
                  </option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-red-500">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
            </div>
            <div className="flex items-center mb-4 btn">
              <h2 className="text-xl  flex-1 h2-span invent-text">
                <span style={{ margin: "0px 4px" }}>Sort :</span>
                <span style={{ margin: "0px 4px" }}>
                  Year{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  Make{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  Model{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  BodyStyle{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  Price{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
              </h2>

              <div className="flex items-center mb-4">
                <button
                  style={{ fontSize: "22.5px" }}
                  className={`p-2 rounded hoverr ${
                    viewMode === "list" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <i className="fa-solid fa-list"></i>
                </button>
                <button
                  className={`p-2 bg-gray-100 rounded ml-2 ${
                    viewMode === "grid" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <img src={boximg} alt="Box View" />
                </button>
              </div>
            </div>

            {/* Car List */}

            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "flex flex-col gap-4"
              }
            >
              {carData.map((car, index) => {
                const {
                  title,
                  brand,
                  id,
                  price,
                  kilometer: mileage,
                  engine_size: engine,
                  fuel_type: fuelType,
                  transmission,
                  driveterain,
                  media,
                  currentImageIndex,
                } = car;

                const currentImage =
                  media && media[currentImageIndex]?.original_url;

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-md overflow-hidden ${
                      viewMode === "list"
                        ? "flex items-center p-4"
                        : "pb-5 mb-5"
                    }`}
                  >
                    <div
                      className={`relative ${
                        viewMode === "list" ? "ml-4 w-3/4" : ""
                      }`}
                    >
                      {currentImage && (
                        <img
                          src={currentImage}
                          alt="Car Image"
                          className={`object-cover ${
                            viewMode === "list"
                              ? "w-full h-full"
                              : "w-full h-48"
                          }`}
                        />
                      )}

                      <div className="flex gap-1 mt-4">
                        <button
                          className="text-white"
                          onClick={() => handlePrevImage(index)}
                        >
                          <img src="../assets/Button (2).png" alt="" />
                        </button>
                        <button
                          className="text-white"
                          onClick={() => handleNextImage(index)}
                        >
                          <img src="../assets/Button (3).png" alt="" />
                        </button>
                      </div>
                    </div>
                    <div
                      className={`${
                        viewMode === "list" ? "ml-4 w-3/4" : "px-4"
                      }`}
                    >
                      <h3 style={{ fontWeight: "500" }} className="text-lg">
                        {title}
                      </h3>
                      <p style={{ fontSize: "14px" }} className="text-gray-500">
                        {brand?.title}
                      </p>
                      <div
                        className="flex justify-between items-center mt-2"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        <p style={{ fontSize: "14px" }}>Finance Form:</p>
                        <p className="mt-1 text-black">Available</p>
                      </div>
                      <div style={{ lineHeight: "30px" }} className="mt-2">
                        <div
                          style={{ backgroundColor: "#F5F5F5" }}
                          className="flex gap-20 mb-2 px-2 txt-size"
                        >
                          <p className="font-semibold">Mileage:</p>
                          <p>{mileage} km</p>
                        </div>
                        <div className="flex gap-[88px] mb-2 px-2 txt-size">
                          <p className="font-semibold">Engine:</p>
                          <p>{engine}</p>
                        </div>
                        <div
                          style={{ backgroundColor: "#F5F5F5" }}
                          className="flex gap-[65px] mb-2 px-2 txt-size"
                        >
                          <p className="font-semibold">Drivetrain:</p>
                          <p>{driveterain?.title}</p>
                        </div>
                        <div className="flex gap-[65px] mb-2 px-2 txt-size">
                          <p className="font-semibold">Fuel Type:</p>
                          <p>{fuelType}</p>
                        </div>
                        <div className="flex gap-[65px] mb-2 px-2 txt-size">
                          <p className="font-semibold">Transmission:</p>
                          <p>{transmission?.title}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <Link to={`/car-details/${id}`}>
                          <button className="card-btn border-2 border-red-500 text-black rounded black-hover">
                            View Details
                          </button>
                        </Link>
                        <button className="card-btn bg-black text-white rounded c-btn-2 red-hover">
                          Carfax Report
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default CarDetailsSearch;
