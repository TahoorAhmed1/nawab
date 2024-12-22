import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    email: "",
    car_id: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCarChange = (e) => {
    setFormData({ ...formData, car_id: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sonimotors.themerchantinc.com/api/cars/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Your message has been sent successfully!",
        });

        setFormData({
          first_name: "",
          last_name: "",
          contact: "",
          email: "",
          car_id: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Message Not Sent",
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "An Error Occurred",
        text: "An error occurred while sending your message. Please try again later.",
      });
    }
  };

  const [brands, setBrands] = useState([]);

  const fetchData = async () => {
    try {
      const brandRes = await axios.get("https://sonimotors.themerchantinc.com/api/brand");
      setBrands(brandRes.data.data.brands);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="form1-back">
        <img src="../assets/back-Img.png" alt="" />
      </div>

      <div className="container mx-auto">

        <div className="flex-bhai min-h-screen flex flex-col items-center justify-center p-4 relative ">
          {/* Background image container */}
          <div
            className=" w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('')" }}
          ></div>

          <div
            className=" contact-infoo flex flex-col p-6 rounded-lg shadow-lg  lg:w-1/3 space-y-4 " // Adjusted right and top
            style={{ background: "#F3F3F3" }}
          >
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="flex items-center space-x-2">
              <img src="../assets/phone.png" alt="" className="w-5 h-5" />
              <span>Phone: <strong>+1 629-5235-1669</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="../assets/p2.png" alt="" className="w-5 h-5" />
              <span>Address: <strong>50 Manitoba St E, Moose Jaw, SK S6H 0A2, Canada</strong></span>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium flex items-center space-x-2">
                <img src="../assets/p1.png" alt="" className="w-5 h-5" />
                <span>Business Hours</span>
              </h4>
              <p>Monday-Friday: 11:00 AM - 07:00 PM</p>
              <p>Saturday: 11:00 AM - 07:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <button type="button" className="all-btn text-white py-2 px-4  w-fit mt-4">
              Get Directions
            </button>
          </div>

          <div className="contact-uss flex flex-col lg:flex-row justify-center w-full max-w-7xl p-4" >
            {/* Contact Form */}
            <div style={{ background: "#F3F3F3" }} className=" contact-uss flex flex-col  p-6    space-y-4 last-contact-us">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">First Name (required)</label>
                  <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" className="border border-gray-300 p-1 w-[90%]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Last Name (required)</label>
                  <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" className="border border-gray-300 p-1 w-[90%]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Email (required)</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border border-gray-300 p-1 w-[90%]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Phone (required)</label>
                  <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="Phone" className="border border-gray-300 p-1 w-[90%]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Search (Year Make Model)</label>
                  <select
                    name="car_id"
                    value={formData.car_id}
                    onChange={handleCarChange}
                    className="w-full p-2 border appearance-none pr-8 text-black modelsBrands"
                  >
                    <option value="">Make</option>
                    {brands.map((make) => (
                      <option key={make.id} value={make.id}>
                        {make.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="border border-gray-300 p-1 h-24 w-[90%]" />
                </div>
                <button type="submit" className="all-btn text-white py-2 w-40 p-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Send</button>
              </form>
            </div>

            {/* Contact Information - Fixed Position on the Right */}
            <div
              className="contact-info flex flex-col bg-white p-6    lg:w-1/3 space-y-4 absolute  right-10 top-[-10vw]  last-contact-info" // Adjusted right and top
              style={{ background: "#F3F3F3" }}
            >
              <h3 className="text-lg font-bold">Contact Information</h3>
              <div className="flex items-center space-x-2">
                <img src="../assets/p3.png" alt="phone icon" className="w-5 h-5" />
                <span><strong>Phone: </strong>+1 629-5235-1669</span>
              </div>
              <div className="flex items-start space-x-2 ">
                <img src="../assets/p2.png" alt="location icon" className="w-5 h-5 mt-1" />
                <span><strong>Address :</strong>  <br /><span>50 Manitoba St E, Moose Jaw, SK S6H 0A2, Canada</span></span>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-medium flex items-center space-x-2">
                  <img src="../assets/p1.png" alt="clock icon" className="w-5 h-5" />
                  <span>Business Hours</span>
                </h4>
                <div className="flex justify-between p-1 px-7">
                  <p>Monday-Friday: </p>
                  <p>11:00 AM - 07:00 PM</p>
                </div>

                <div className="flex justify-between p-1 px-7">
                  <p>Saturday:</p>
                  <p> 11:00 AM - 07:00 PM</p>
                </div>

                <div className="flex justify-between p-1 px-7">
                  <p>Sunday:</p>
                  <p > Closed</p>
                </div>

              </div>
              <Link to='/Direction'>
                <button type="button" className="all-btn text-white py-2 px-4  w-fit mt-4">
                  Get Directions
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      <section className="footer-contact-3000">
        <Footer />
      </section>
    </>
  );
};

export default ContactUs;
