import { useState, useEffect } from "react";
import "../components/Navbar.css";
import SimpleDropdown from "./SimpleDropdown";
import pin from "../assets/pin.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation
import { useLocation1 } from "./LocationContex";

const Navbar = () => {
  const { selectedLocation, setSelectedLocation } = useLocation1();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1093);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation(); // Get the current route

  const dropdownOptions1 = [
    "All Inventory",
    "Appraise My Trade",
    "Car Finder Page",
  ];
  const dropdownLinks1 = ["/Inventory", "/MyTrade", "/CarFinder"];

  const dropdownOptions2 = ["Financing", "Apply For Credit"];
  const dropdownLinks2 = ["/Finance", "/ApplyForCredit"];

  const dropdownOptions3 = ["Appointment", "Order Part"];
  const dropdownLinks3 = ["/Appointment", "/Order"];

  const dropdownOptions4 = ["Image Gallery"];
  const dropdownLinks4 = ["/ImageGallery"];

  const dropdownOptions5 = ["Dealership", "Contact Us", "Direction"];
  const dropdownLinks5 = ["/Dealership", "/Contact", "/Direction"];

  const handleResize = () => {
    const currentWidth = window.innerWidth;
    setIsMobile(currentWidth <= 1093);
    if (currentWidth > 1093) {
      setIsDrawerOpen(false);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDropdownToggle = (dropdownIndex) => {
    setOpenDropdown((prev) => (prev === dropdownIndex ? null : dropdownIndex));
  };

  return (
    <>
      <div
        className={`navbar-background-img items-center  ${
          location.pathname === "/" ? "fixed-navbar" : ""
        }`}
      >
        <div className=" flex justify-between py-3 container-web">
        <div>
          <Link to="/">
            {" "}
            <img
              className="main-logo-img"
              width={207}
              height={98}
              src="../assets/soni_auto_1 1.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop View */}
        {!isMobile && (
          <div >
            <div className="p-1 flex justify-end items-center gap-5">
              {/* Search Input with Icons */}
              <div className="relative flex items-center  text-black rounded-[3px]">
                <span className="absolute left-2 top-1">
                  <img src={pin}  className="w-[16px]"/> 
                </span>

                <select
                  className="w-full p-0.5 border rounded-sm appearance-none pl-8  text-black placeholder:text-black  "
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="Toronto, Ontario" clas>Toronto, Ontario</option>
                  <option value="East moosejaw Saskatchewan">
                    East moosejaw Saskatchewan
                  </option>
                </select> 

               
            
              </div>



              <div className="flex items-center gap-3">
                <span className=" text-white" style={{fontSize:'30px'}}>|</span>
                <img
                  style={{ cursor: "pointer" }}
                  width={25}
                  className="icon"
                  src="../assets/SVG.png"
                  alt="Main Icon"
                />
                <span
                  style={{ cursor: "pointer", backgroundColor: "transparent" }}
                  className="  text-sm  navbar-wala-bg"
                >
                  (123) 456-7890
                </span>
                <img
                  style={{ cursor: "pointer" }}
                  width={25}
                  className="icon"
                  src="../assets/Link.png"
                  alt="Link Icon"
                />
                <img
                  style={{ cursor: "pointer" }}
                  width={24}
                  className="icon"
                  src="../assets/SVG (1).png"
                  alt="SVG Icon"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* Left Section for Home */}
              <div className="flex-shrink-0 text-center mr-8">
                <Link
                  className=" font-normal font-sans  text-[16px] hoverr  navbar-wala-bg home-pr-color"
                  to="/"
                >
                  HOME
                </Link>
              </div>

              {/* Right Section for Dropdowns */}
              <div className="flex gap-3">
                <SimpleDropdown
                  title="INVENTORY"
                  options={dropdownOptions1}
                  links={dropdownLinks1}
                  isOpen={openDropdown === 1}
                  onToggle={() => handleDropdownToggle(1)}
                />
                <SimpleDropdown
                  title="FINANCING"
                  options={dropdownOptions2}
                  links={dropdownLinks2}
                  isOpen={openDropdown === 2}
                  onToggle={() => handleDropdownToggle(2)}
                />
                <SimpleDropdown
                  title="SERIVCES & PARTS"
                  options={dropdownOptions3}
                  links={dropdownLinks3}
                  isOpen={openDropdown === 3}
                  onToggle={() => handleDropdownToggle(3)}
                />
                <SimpleDropdown
                  title="MEDIA"
                  options={dropdownOptions4}
                  links={dropdownLinks4}
                  isOpen={openDropdown === 4}
                  onToggle={() => handleDropdownToggle(4)}
                />
                <SimpleDropdown
                  title="DEALERSHIP"
                  options={dropdownOptions5}
                  links={dropdownLinks5}
                  isOpen={openDropdown === 5}
                  onToggle={() => handleDropdownToggle(5)}
                />
              </div>
              <div className="flex-shrink-0 text-center mr-8">
                <Link
                  className=" font-normal font-sans text-[16px] hoverr  navbar-wala-bg home-pr-color"
                  to="/"
                >
                  TEXT NOW
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Hamburger Icon for Mobile */}
        {isMobile && (
          <button className="p-2 " onClick={toggleDrawer}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>
      </div>

      {/* Drawer for Mobile View */}
      {isDrawerOpen && isMobile && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 "
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full   navbar-wala-bg shadow-lg p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDrawerOpen(false)}
              className=" navbar-wala-bg mb-4 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Drawer Content */}
            <div className="p-3 flex flex-col gap-5">
              {/* Search Input */}
              <div className="relative mb-4">
                <span className="absolute left-3 top-2">
                  <img src="../assets/Vector (9).png" alt="Search Icon" />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-10 py-1 text-black rounded-md focus:outline-none focus:ring w-full"
                />
                <span className="absolute right-3 top-3">
                  <img src="../assets/Arrow 1.png" alt="Search Arrow" />
                </span>
              </div>

              {/* Center Phone Number and Icons */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg navbar-wala-bg">|</span>
                <img width={20} src="../assets/SVG.png" alt="Main Icon" />
                <span className="phone-nav font-semibold  text-lg  navbar-wala-bg">
                  (123) 456-7890
                </span>
                <img width={20} src="../assets/Link.png" alt="Link Icon" />
                <img width={10} src="../assets/SVG (1).png" alt="SVG Icon" />
              </div>

              {/* Drawer Links */}
              <h3 className=" text-lg mb-2 home-1100 hoverr  navbar-wala-bg">
                <Link to="/">Home</Link>
              </h3>
              <SimpleDropdown
                title="Inventory"
                options={dropdownOptions1}
                links={dropdownLinks1}
                isOpen={openDropdown === 1}
                onToggle={() => handleDropdownToggle(1)}
                style={{
                  marginBottom: openDropdown === 1 ? "130px" : "0px",
                  marginTop: openDropdown === 1 ? "0px" : "10px",
                }}
              />

              <SimpleDropdown
                title="Financing"
                options={dropdownOptions2}
                links={dropdownLinks2}
                isOpen={openDropdown === 2}
                onToggle={() => handleDropdownToggle(2)}
                style={{
                  marginBottom: openDropdown === 2 ? "80px" : "0px",
                  marginTop: openDropdown === 2 ? "0px" : "10px",
                }}
              />
              <SimpleDropdown
                title="Services & Parts"
                options={dropdownOptions3}
                links={dropdownLinks3}
                isOpen={openDropdown === 3}
                onToggle={() => handleDropdownToggle(3)}
                style={{
                  marginBottom: openDropdown === 3 ? "80px" : "0px",
                  marginTop: openDropdown === 3 ? "0px" : "10px",
                }}
              />
              <SimpleDropdown
                title="Media"
                options={dropdownOptions4}
                links={dropdownLinks4}
                isOpen={openDropdown === 4}
                onToggle={() => handleDropdownToggle(4)}
                style={{
                  marginBottom: openDropdown === 4 ? "80px" : "0px",
                  marginTop: openDropdown === 4 ? "0px" : "10px",
                }}
              />
              <SimpleDropdown
                title="Dealership"
                options={dropdownOptions5}
                links={dropdownLinks5}
                isOpen={openDropdown === 5}
                onToggle={() => handleDropdownToggle(5)}
                style={{
                  marginBottom: openDropdown === 5 ? "120px" : "0px",
                  marginTop: openDropdown === 5 ? "0px" : "10px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
