import { useState, useEffect } from "react";
import axios from "axios";        
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./CarFinder.css"
import Swal from "sweetalert2";
const CarFinder = () => {
  // State hooks for each form field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [trim, setTrim] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [bodyStyleId, setBodyStyleId] = useState("");
  const [transmissionId, setTransmissionId] = useState("");
  const [drivetrainId, setDrivetrainId] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [condition, setCondition] = useState("");
  const [vin, setVin] = useState("");
  const [exteriorColorId, setExteriorColorId] = useState("");
  const [interiorColorId, setInteriorColorId] = useState("");
  const [description, setDescription] = useState("");
  const [carId, setCarId] = useState("");
  const [doors, setDoors] = useState("");

  // State for dropdown options
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [driveTrains, setDriveTrains] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [bodyStyles, setBodyStyles] = useState([]);

  // Fetch API data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const brandRes = await axios.get('https://sonimotors.themerchantinc.com/api/brand');
        const colorRes = await axios.get('https://sonimotors.themerchantinc.com/api/color');
        const driveTrainRes = await axios.get('https://sonimotors.themerchantinc.com/api/drive_train');
        const transmissionRes = await axios.get('https://sonimotors.themerchantinc.com/api/transmission');
        const bodyStyleRes = await axios.get('https://sonimotors.themerchantinc.com/api/body_style');

        // Update state with the API response data
        setBrands(brandRes.data.data.brands);
        setColors(colorRes.data.data.Colors);
        setDriveTrains(driveTrainRes.data.data.drive_train);
        setTransmissions(transmissionRes.data.data.transmission);
        setBodyStyles(bodyStyleRes.data.data.body_styles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [cars, setCars] = useState([]); // State to store cars

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      first_name: firstName,
      last_name: lastName,
      contact,
      email,
      body_style_id: bodyStyleId,
      make,
      year,
      model,
      transmission_id: transmissionId,
      exterior_color_id: exteriorColorId,
      drivetrain_id: drivetrainId,
      fuel_type: fuelType,
      condition,
      kilometers,
      vin,
      trim,
      description,
      car_id: carId,
      interior_color: interiorColorId,
      doors: doors,
    };
  
    try {
      const response = await fetch("https://sonimotors.themerchantinc.com/api/cars/appraise-my-trade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Trade appraisal submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to submit trade appraisal. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error:", error);
    }
  };
  

  
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

  return (
    <>
    <div className=" min-h-screen p-6" >
        <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6" >
          {/* Form Section */}
          <div className="flex flex-col space-y-6 lg:w-3/5  p-6 border border-gray-300 rounded-lg shadow-md" style={{background: "#F3F3F3"}} >
            <h2 className="text-2xl font-semibold">Car Finder</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input border border-gray-300 w-full p-2" />
                    </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="input border border-gray-300 w-full p-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input border border-gray-300  w-full p-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Phone" className="input border border-gray-300  w-full p-2" />
                  </div>
                </div>
              </div>

              <div>
  <h3 className="text-lg font-medium">Vehicle Information</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium text-gray-700">Make</label>
      <select value={make} onChange={(e) => setMake(e.target.value)} className="input border border-gray-300 w-full p-2">
                    <option value="">Select Make</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.title}>
                        {brand.title}
                      </option>
                    ))}
                  </select>
    </div>
   

          

    <div className="relative w-[100%]">
      <label className="text-sm font-medium text-gray-700">Year</label>
              <select className="w-full p-2 border  appearance-none pr-8" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Used cars in Toronto, Ontario">
    <option style={{marginTop:"30px"}}>Year</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute bottom-[-17px]  right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>


    <div>
      <label className="text-sm font-medium text-gray-700">Trim</label>
      <input value={trim} onChange={(e) => setTrim(e.target.value)} type="text" placeholder="Trim" className="input border border-gray-300  w-full p-2" />
    </div>
    
    <div>
      <label className="text-sm font-medium text-gray-700">Kilometer</label>
      <input value={kilometers} onChange={(e) => setKilometers(e.target.value)} type="text" placeholder="Kilometer" className="input border border-gray-300  w-full p-2" />
    </div>   

    <div className="relative w-[100%]">
      <label className="text-sm font-medium text-gray-700">Body Style</label>
              <select value={bodyStyleId} onChange={(e) => setBodyStyleId(e.target.value)} className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option value="">Select Body Style</option>
                    {bodyStyles.map((bodyStyle) => (
                      <option key={bodyStyle.id} value={bodyStyle.id}>
                        {bodyStyle.title}
                      </option>
                    ))}
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute bottom-[-17px]  right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>


       

              <div className="relative w-[100%]">
      <label className="text-sm font-medium text-gray-700">Transmition</label>

              <select value={transmissionId} onChange={(e) => setTransmissionId(e.target.value)} className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option value="">Select Transmission</option>
                    {transmissions.map((transmission) => (
                      <option key={transmission.id} value={transmission.id}>
                        {transmission.title}
                      </option>
                    ))}
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute bottom-[-17px] right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

                <div className="relative w-[100%]">
      <label className="text-sm font-medium text-gray-700">Drivenline</label>

              <select value={drivetrainId} onChange={(e) => setDrivetrainId(e.target.value)}  className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option value="">Select Drivetrain</option>
                    {driveTrains.map((driveTrain) => (
                      <option key={driveTrain.id} value={driveTrain.id}>
                        {driveTrain.title}
                      </option>
                    ))}
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute bottom-[-17px] right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

   
              <div>
      <label className="text-sm font-medium text-gray-700">Fuel Type</label>
      <input type="text" value={fuelType} onChange={(e) => setFuelType(e.target.value)} placeholder="Fuel Type" className="input border border-gray-300  w-full p-2" />
    </div>   

    <div className="relative w-[100%]">
      <label className="text-sm font-medium text-gray-700">Condition</label>
              <select value={condition} onChange={(e) => setCondition(e.target.value)} className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Condition</option>
              <option>UBL</option>
              <option>HBL</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute bottom-[-17px]  right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>


    
              <div>
      <label className="text-sm font-medium text-gray-700">Vin</label>
      <input type="text" value={vin} onChange={(e) => setVin(e.target.value)} placeholder="Vin" className="input border border-gray-300  w-full p-2" />
    </div>   

    <div className="relative w-[100%]">
      <label className="text-sm font-medium text-gray-700">Exterior Color</label>
              <select value={exteriorColorId} onChange={(e) => setExteriorColorId(e.target.value)} className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Exterior Color</option>
              {colors.map((color) => (
                      <option key={color.id} value={color.id}>
                        {color.title}
                      </option>
                    ))}
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute bottom-[-17px]  right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
    <div className="relative w-[100%]">
      <label className="text-sm font-medium text-gray-700">interior Color</label>
              <select value={interiorColorId} onChange={(e) => setInteriorColorId(e.target.value)} className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Exterior Color</option>
              {colors.map((color) => (
                      <option key={color.id} value={color.id}>
                        {color.title}
                      </option>
                    ))}
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute bottom-[-17px]  right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>




              
  </div>
  <div className="grid grid-cols-1 gap-4 mt-4">
        <div className=" w-[100%]">
        <h3 className="font-semibold text-lg mb-2">Choose Your Vehicle Model</h3>
        <select value={model} onChange={(e) => setModel(e.target.value)} className="input border border-gray-300 w-full p-2">
                    <option value="">Choose Your Model</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.title}>
                        {brand.title}
                      </option>
                    ))}
                  </select>
              </div> 
              <div className=" w-[100%]">
        <h3 className="font-semibold text-lg mb-2">Choose Your Vehicle</h3>
        <select value={carId} onChange={(e) => setCarId(e.target.value)} className="input border border-gray-300 w-full p-2">
                    <option value="">Choose Your Car</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.title}
                      </option>
                    ))}
                  </select>
              </div> 
              <div className=" w-[100%]">
        <h3 className="font-semibold text-lg mb-2">Choose Your Vehicle Doors</h3>
        <select className="w-full p-2 border  appearance-none pr-8" value={doors} onChange={(e) => setDoors(e.target.value)} placeholder="Used cars in Toronto, Ontario">
    <option style={{marginTop:"30px"}}>Year</option>
              <option>2</option>
              <option>4</option>
              <option>6</option>
                </select>
              </div> 
    <div>
      <label className="text-sm font-medium text-gray-700">Additional Info</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Additional Info" className="input h-36 border border-gray-300  w-full p-2"></textarea>
    </div>
  </div>
</div>

<button type="submit" className="p-3 text-lg   text-white py-2 px-9   mt-4 all-btn">
  Submit
</button>

            </form>
          </div>

          {/* Contact Information */}
          <div style={{background: "#F3F3F3"}}  className=" card-bhai p-6 shadow-lg w-full lg:w-1/4 h-max"> {/* Set height to max-content */}
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
        <Link to='/Contact'><button className="all-btn text-white p-3 w-30">Get Directions</button></Link>
      </div>
      
        </div>
      </div>

      <section className="car-finder-3000">
        <Footer/>
      </section>
    </>
  )
}

export default CarFinder
