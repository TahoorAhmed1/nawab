import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../screens/JeepWrangular.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import axios from "axios";

function JeepWrangular() {
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  const [carDataList, setCarDataList] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://sonimotors.themerchantinc.com/api/cars")
      .then((response) => {
        if (response.data.status && response.data.data) {
          setCarDataList(response.data.data.cars || []); // Default to an empty array
        }
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, []);

  const getNextCarId = () => {
    if (!carDataList || carDataList.length === 0) return null;
    const currentCarIndex = carDataList.findIndex(
      (car) => car.id === parseInt(id)
    );
    const nextCar = carDataList[currentCarIndex + 1] || carDataList[0]; // Loop to first car if at the end
    return nextCar.id;
  };

  const getPrevCarId = () => {
    if (!carDataList || carDataList.length === 0) return null;
    const currentCarIndex = carDataList.findIndex(
      (car) => car.id === parseInt(id)
    );
    const prevCar =
      carDataList[currentCarIndex - 1] || carDataList[carDataList.length - 1]; // Loop to last car if at the start
    return prevCar.id;
  };

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          `https://sonimotors.themerchantinc.com/api/cars/getById/${id}`
        );
        const data = await response.json();
        if (data.status) {
          setCarData(data.data.car || {});
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, [id]);

  const openPopup = (index) => {
    setCurrentImageIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % (carData?.media?.length || 1)
    );
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + (carData?.media?.length || 1)) %
        (carData?.media?.length || 1)
    );
  };

  const showNextImage1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carData.media.length);
  };

  const showPrevImage1 = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + carData.media.length) % carData.media.length
    );
  };

  const openPopup1 = () => {
    setShowPopup1(true);
    setCurrentImageIndex(0); // Start from the first image
  };

  const closePopup1 = () => {
    setShowPopup1(false);
  };

  if (!carData)
    return (
      <div className="mainBodyLoad">
        <div className="dotted-loader"></div>
      </div>
    );
  return (
    <>
      <div className="header-container">
        <div
          className="row px-3 px-sm-5 py-3 w-100 m-0 p-0 justify-content-between"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="p-0 m-0 flex"
            style={{ justifyContent: "space-between" }}
          >
            {/* <div
              className="p-0 m-0 row pr-5 items-center"
              style={{ fontSize: "18px" }}
            >
              {carDataList && carDataList.length > 0 && (
                <Link className="flex items-center my-link-btn">
                  <p className="py-1 flex items-center">
                    <BsArrowLeft />
                    &nbsp;&nbsp;Previous Vehicle
                  </p>
                </Link>
              )}
            </div>
            <div
              className="p-0 m-0 row my-link-btn"
              style={{ fontSize: "18px", color: "red" }}
            >
              {carDataList && carDataList.length > 0 && (
                <Link className="flex items-center my-link-btn">
                  <p className="py-1 flex items-center">
                    Next Vehicle &nbsp;&nbsp;
                    <BsArrowRight />
                  </p>
                </Link>
              )}
            </div> */}
          </div>
          <div className="p-0 m-0 flex">
            <Link
              style={{ whiteSpace: "nowrap" }}
              className="p-0 py-2 py-lg-0 blue_button_3 px-2 flex justify-content-center items-center w-100"
              to="/Inventory"
            >
              <BsArrowLeft color="#fff" /> Back To inventory
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full px-5">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Side - Main Image */}
            <div className="md:w-2/3 h-[400px]">
              <img
                src={carData.main_image}
                alt="Main Jeep Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Media Images */}
            <div className="md:w-1/2 grid grid-cols-2 h-[400px] divider">
              {carData.media.slice(0, 4).map((image, index) => (
                <img
                  key={image.id}
                  src={image.original_url}
                  alt="Car Image"
                  className="w-full h-full object-cover cursor-pointer"
                  // onClick={() => openPopup(index)}
                />
              ))}
              {/* View Photos Button */}
            </div>
            <button
              onClick={openPopup1}
              className="mt-4 px-4 py-2 bg-[#ed0417] text-white rounded-md"
              style={{
                position: "absolute",
                margin: "auto",
                right: "35px",
                transform: "translate(0px, 153px)",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <FaCamera />
              View Photos
            </button>
          </div>

          {/* Popup Modal */}
          {/* Popup Modal */}
          {showPopup1 && (
            <div className="popup-overlay" onClick={closePopup1}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="popup-close" onClick={closePopup1}>
                  ×
                </button>
                <button className="popup-arrow-left" onClick={showPrevImage1}>
                  <BsArrowLeft />
                </button>
                <img
                  src={carData.media[currentImageIndex].original_url}
                  alt="Popup Car"
                  className="popup-image"
                />
                <button className="popup-arrow-right" onClick={showNextImage1}>
                  <BsArrowRight />
                </button>
              </div>
            </div>
          )}
          {showPopup && (
            <div className="popup-overlay" onClick={closePopup}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="popup-close" onClick={closePopup}>
                  ×
                </button>
                <button className="popup-arrow-left" onClick={showPrevImage}>
                  <BsArrowLeft />
                </button>
                <img
                  src={carData.media[currentImageIndex].original_url}
                  alt="Popup Car"
                  className="popup-image"
                />
                <button className="popup-arrow-right" onClick={showNextImage}>
                  <BsArrowRight />
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row p-4 w-full">
              {/* Left Column - Car Details */}
              <div className="md:w-2/3 p-4">
                <h2
                  className="text-3xl py-3 font-semibold mb-2"
                  style={{ borderBottom: "4px solid black" }}
                >
                  {carData.title} | {carData.year} |{" "}
                  {carData.transmission.title} | {carData.price} USD
                </h2>
                <div className="text-gray-600 mb-4">
                  <h2 className="text-3xl py-3 font-semibold mb-2">
                    About Vehicle
                  </h2>
                  <div className="flex gap-5 flex-wrap same-to">
                    <span
                      className="same-to-same"
                      style={{
                        border: "1px solid gray",
                        padding: "25px 20px",
                        textAlign: "center",
                      }}
                    >
                      Odometer: <br /> {carData.kilometer}{" "}
                    </span>
                    <span
                      style={{
                        border: "1px solid gray",
                        padding: "25px 20px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      Body Style: <br /> {carData.body.title}
                    </span>
                    <span
                      style={{
                        border: "1px solid gray",
                        padding: "25px 20px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      Engine Size: <br /> {carData.engine_size}{" "}
                    </span>
                    <span
                      style={{
                        border: "1px solid gray",
                        padding: "25px 20px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      Cylinders: <br /> {carData.engine_cylinder}
                    </span>
                    <span
                      style={{
                        border: "1px solid gray",
                        padding: "25px 20px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      Exterior Color: <br /> {carData.exterior.title}
                    </span>
                    <span
                      style={{
                        border: "1px solid gray",
                        padding: "25px 20px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      Transmission: <br /> {carData.transmission.title}
                    </span>
                  </div>
                  <h3 className="mt-3 description_title">Description</h3>
                  <p className="mt-4">{carData.description}</p>
                </div>
              </div>

              {/* Right Column - Price and Actions */}
              <div className="md:w-1/3 flex flex-col space-y-4 border-l pl-4">
                <h2 className="text-2xl font-semibold">
                  Price: ${carData.price}
                </h2>
                <p style={{ fontSize: "20px" }} className="text-center">
                  <span className="text-red-500 text-center">
                    Taxes and fees
                  </span>
                </p>
                <Link to="/Appointment">
                  <button
                    style={{ fontWeight: "900" }}
                    className="text-white text-center py-2 px-4 w-full jepp-btn"
                  >
                    Request Information
                  </button>
                </Link>
                <Link to="/Contact">
                  <button
                    style={{ fontWeight: "900" }}
                    className="bg-white text-red-500 py-2 px-4 hover:bg-black hover:text-white w-full gepp-black"
                  >
                    Send Us Offer
                  </button>
                </Link>
                <Link to="/ApplyForCredit">
                  <button
                    style={{ fontWeight: "900" }}
                    className="bg-white text-red-500 py-2 px-4 hover:bg-black hover:text-white w-full gepp-black"
                  >
                    Apply for Financing
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row p-4 w-full">
              <div className="detail-flexbox md:w-full flex flex-col border-l pl-4">
                {carData.media.map((image, index) => (
                  <>
                    <div className="item">
                      <img
                        key={image.id}
                        src={image.original_url}
                        alt="Car Image"
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => openPopup(index)}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JeepWrangular;
