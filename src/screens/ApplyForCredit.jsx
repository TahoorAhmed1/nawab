import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ApplyForCredit = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    email: "",
    salutation: "",
    martial_status: "",
    date_of_birth: "",
    bankruptcy: "",
    repossession: "",
    co_signer: "", // Keep as co_signer internally
    credit: "",
    car_id: "", // Initially empty; will be set when a car is selected
  });

  const [cars, setCars] = useState([]); // State to store cars

  // Fetch car data from the API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://sonimotors.themerchantinc.com/api/cars");
        const result = await response.json();
        if (result.status) {
          setCars(result.data.cars); // Set cars data in state
        } else {
          console.error("Failed to fetch cars");
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []); // Run once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCarChange = (e) => {
    setFormData({
      ...formData,
      car_id: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a copy of formData with "co-signer" instead of "co_signer"
    const submitData = {
      ...formData,
      "co-signer": formData.co_signer,
    };
    delete submitData.co_signer;

    try {
      const response = await fetch("https://sonimotors.themerchantinc.com/api/cars/finance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        const result = await response.json();
        Swal.fire({
          title: "Success!",
          text: "Your credit application was submitted successfully.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an error submitting your application. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error",
        text: "Unable to submit the application. Please check your connection.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="p-6 px-10 credit-div">
        <div style={{ background: "#F3F3F3" }} className="shadow-lg rounded-lg div-credit flex flex-col">
          <div className="p-6 div-credit">
            <h2 className="text-3xl font-bold mb-2">Apply For Credit</h2>
            <h3 className="text-md font-bold mb-2">Get approved from home!</h3>
            <p className="left-txt text-gray-600 mb-4">Get approved from home! Please fill out the secure credit application below.</p>

            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 input-space">
                  <input type="text" name="first_name" placeholder="First Name" className="p-2 border" onChange={handleChange} required />
                  <input type="text" name="last_name" placeholder="Last Name" className="p-2 border" onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email" className="p-2 border" onChange={handleChange} required />
                  <input type="tel" name="contact" placeholder="Phone" className="p-2 border" onChange={handleChange} required />
                  <div className="relative w-[100%]">
                    <select name="salutation" className="w-full p-2 border appearance-none pr-8" onChange={handleChange} required>
                      <option value="">Salutation</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Miss">Miss</option>
                    </select>
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                      <span style={{ marginBottom: "4px", fontSize: "22px" }}>| </span><i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>

                  <div className="relative w-[100%]">
                    <select name="martial_status" className="w-full p-2 border appearance-none pr-8" onChange={handleChange} required>
                      <option value="">Marital Status</option>
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                    </select>
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                      <span style={{ marginBottom: "4px", fontSize: "22px" }}>| </span><i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                  <input type="date" name="date_of_birth" placeholder="Birth Date" className="p-2 border col-span-2 w-[50%]" onChange={handleChange} required />
                </div>
              </div>

              {/* Other Information */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Other Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative w-[100%]">
                    <select name="bankruptcy" className="w-full p-2 border appearance-none pr-8" onChange={handleChange} required>
                      <option value="">Bankruptcy</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                      <span style={{ marginBottom: "4px", fontSize: "22px" }}>| </span><i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>

                  <div className="relative w-[100%]">
                    <select name="repossession" className="w-full p-2 border appearance-none pr-8" onChange={handleChange} required>
                      <option value="">Repossession</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                      <span style={{ marginBottom: "4px", fontSize: "22px" }}>| </span><i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>

                  <div className="relative w-[100%]">
                    <select name="co_signer" className="w-full p-2 border appearance-none pr-8" onChange={handleChange} required>
                      <option value="">Is Co-signer Available?</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                      <span style={{ marginBottom: "4px", fontSize: "22px" }}>| </span><i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>

                  <div className="relative w-[100%]">
                    <select name="credit" className="w-full p-2 border appearance-none pr-8" onChange={handleChange} required>
                      <option value="">Rate Your Credit</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                      <option value="Poor">Poor</option>
                    </select>
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                      <span style={{ marginBottom: "4px", fontSize: "22px" }}>| </span><i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Vehicle Information</h3>
                <div className="mb-4">
                  <label htmlFor="car_id" className="block mb-1">Select Car:</label>
                  <select
                    name="car_id"
                    className="w-full p-2 border"
                    onChange={handleCarChange}
                    required
                  >
                    <option value="">Select a car</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.id}>{car.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div  className="left-side div-credit p-6 flex flex-col items-start" style={{backgroundColor:"#f5f5f5"}}>
          <h3 className="text-lg font-semibold mb-4">Online Credit Application</h3>
          <p className="text-gray-600 mb-4 ">
            Need help filling out your application? We would be happy to help you.
          </p>
          <Link to="/Contact"><button className="all-btn text-white py-2 px-4 all-btn">Contact Us</button></Link>
        </div>
    </div>

    <section>
      <Footer/>
    </section>
    </>
  );
};

export default ApplyForCredit;
