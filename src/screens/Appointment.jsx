import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./Appointment.css"
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


function Appointment() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    email: "",
    make: "",
    year: "",
    model: "",
    vin: "",
    booking_date: "",
    comments: ""
  });
  
  const [brands, setBrands] = useState([]); // State to hold brands

  // Fetch brands data
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("https://sonimotors.themerchantinc.com/api/brand");
        const data = await response.json();

        if (data.status) {
          setBrands(data.data.brands); // Set brands from API response
        } else {
          console.error("Failed to fetch brands");
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://sonimotors.themerchantinc.com/api/cars/service-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        // Show success popup
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Appointment booked successfully!',
          confirmButtonText: 'OK'
        });
      } else {
        // Show error popup
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to book appointment.',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      // Show error popup for catch block
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while booking the appointment.',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
  <>
    <div className="flex flex-col lg:flex-row gap-8 p-8 min-h-screen">
      {/* Form Section */}
      <div style={{background: "#F3F3F3"}} className=" p-6 shadow-lg  w-full lg:w-3/4">
        <h1 className="text-2xl font-semibold mb-6">Service Appointment</h1>

        <form onSubmit={handleSubmit}>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="w-full border p-2"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="w-full border p-2"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border p-2"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block font-medium">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contact"
                  className="w-full border p-2"
                  placeholder="Phone"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Make</label>
                <input
                  type="text"
                  name="make"
                  className="w-full border p-2"
                  placeholder="Make"
                  value={formData.make}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block font-medium">Model</label>
                <select
                  name="model"
                  className="w-full border p-2"
                  value={formData.model}
                  onChange={handleInputChange}
                >
                  <option value="">Select Model</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.title}>{brand.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium">VIN</label>
                <input
                  type="text"
                  name="vin"
                  className="w-full border p-2"
                  placeholder="VIN"
                  value={formData.vin}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block font-medium">Year</label>
                <input
                  type="text"
                  name="year"
                  className="w-full border p-2"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Appointment Information */}
            <div className="mb-4">
              <label className="block font-medium">Date <span className="text-red-500">*</span></label>
              <input
                type="date"
                name="booking_date"
                className="w-[50%] border p-2"
                value={formData.booking_date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Comments</label>
              <textarea
                name="comments"
                className="w-full h-40 border p-2"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleInputChange}
              ></textarea>
            </div>
        <button type="submit" style={{textAlign:'center'}} className="bg-black focuss text-white p-3 text-center   lg:w-1/3 mt-4 mb-4">Check Availability</button>

           
          </form>
        {/* Service List */}
        {/* <div className="mt-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Service List</h2>
            <button className="all-btn focuss text-white p-2 px-5">Add</button>
          </div>
          <div className="mb-2 mt-8">
            <div className="flex items-center gap-2">
            <input type="text" className="w-[60vw] border p-2 " placeholder="Request Service" />
            <img style={{width:"20px" , height:"20px" , objectFit:"contain" , cursor:"pointer"}} src="../assets/btn-site-border.png.png" alt="" />
            </div>
            <input type="text" className="w-[60vw] mt-6 border p-2 rounded" placeholder="Comment Service" />
          </div>
        </div> */}
      </div>

      {/* Contact Information Section */}
      <div style={{background: "#F3F3F3"}}  className=" card-bhai p-6 shadow-lg  w-full lg:w-1/4 h-max"> {/* Set height to max-content */}
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="flex items-center gap-2 mb-4"> 
        <div>
          <img style={{width:"20px" , height:"20px", objectFit:"contain"}} src="../assets/p3.png" alt="" />
          </div>
        <p className="text-lg "> <strong>Phone:</strong> +1 639-525-1669</p>
        </div>

        <div className="flex items-start gap-2 mb-4">
        <div>
          <img style={{width:"25px" , height:"25px", objectFit:"contain" , marginTop:"4px"}} src="../assets/p2.png" alt="" />
          </div>
        <p className="text-lg "><strong>Address:</strong> 80 Manitoba St E, Moose Jaw, SK S6H 0A2, Canada</p>

        </div>

        <div className="mb-4">
          <div className="flex items-start gap-2 mb-4">
          <div>
          <img style={{width:"20px" , height:"20px", objectFit:"contain" , marginTop:"4px"}} src="../assets/p1.png" alt="" />
          </div>
          <h3 className="text-lg font-semibold">Business Hours</h3>
          </div>
          <p className="info-text">Monday-Friday <span style={{marginLeft:'20px'}}>11:00 AM - 07:00 PM</span> </p>
          <p className="info-text">Saturday <span style={{marginLeft:'65px'}}>11:00 AM - 07:00 PM</span></p>
          <p className="info-text">Sunday <span style={{marginLeft:'75px'}}>Closed</span></p>
        </div>
        <Link to='/Direction'><button className="all-btn text-white p-3 w-30">Get Directions</button></Link>
      </div>            
    </div>

    <section>
      <Footer/>
    </section>
  
  
  </>
  );
}

export default Appointment;
