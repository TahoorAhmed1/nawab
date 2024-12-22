import { Link } from "react-router-dom"
import "../components/Footer.css"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

// const Footer = () => {
//   return (
//     <>
// <div className="footer-back-img  py-5 ">
//   <div className="container-web">
  
//   <div className="mb-10 f-logo">
//     <img src="../assets/soni_auto_1 1.png" alt="" />
//   </div>
//   <div className="footerr   text-white">
//     <div style={{marginRight:'70px'}} >
//       <h4 className="heading text-xl " style={{fontWeight:'bold'}}>
//         Dealership
//       </h4>
//       <p style={{fontSize:"14px"}} className="footer-p">
//       Welcome to Soni Auto Market, your premier destination for quality vehicles and <br /> exceptional service. With over 17 years of experience in the automotive industry, <br /> Soni Auto Market has established itself as a trusted name in the market.
//       </p>
//       <div className=" mt-5 social-icons">
//       <i className="fa-brands fa-tiktok"></i>
//       <i className="fa-brands fa-instagram"></i>
//       <i className="fa-brands fa-facebook-f"></i>
//       </div>

//     </div>




//   <div className="f-all-text " style={{lineHeight:"30px"}}>

//   <div>
//       <h4 className="heading text-xl" style={{fontWeight:'bold'}}>
//       Our Hours
//       </h4>
//       <p className="text-sm mt-2">Monday</p>
//       <p className="text-sm mt-2">Tuesday</p>
//       <p className="text-sm mt-2">Wednesday</p>
//       <p className="text-sm mt-2">Thursday</p>
//       <p className="text-sm mt-2">Friday</p>
//       <p className="text-sm mt-2">Saturday</p>
//       <p className="text-sm mt-2">Sunday</p>
//     </div>
//     <div className="mt-12">
//       <p className="text-sm  mt-2" >11:00 AM - 07:00 PM</p>
//       <p className="text-sm  mt-2" >11:00 AM - 07:00 PM</p>
//       <p className="text-sm  mt-2" >11:00 AM - 07:00 PM</p>
//       <p className="text-sm  mt-2" >11:00 AM - 07:00 PM</p>
//       <p className="text-sm  mt-2" >11:00 AM - 07:00 PM</p>
//       <p className="text-sm  mt-2" >11:00 AM - 07:00 PM</p>
//       <p className="text-sm  mt-2" >11:00 AM - 07:00 PM</p>
//     </div>
//     <div>
//       <h4 className="heading text-xl" style={{fontWeight:'bold'}}>
//       Our Contacts
//       </h4>
//       <h6 style={{color:'red'}}>Call us +1 93843-34934-32</h6>
     

//      <div className="f-sell pb-4">
     

          
//           {/* Google Maps Embed */}
//           {/* <div className="w-[310px] h-[150px] rounded-lg overflow-hidden shadow-lg border"  style={{backgroundColor:"#F3F3F3"}}>
//             <iframe className=" iframe"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.2339370100154!2d-105.55868822353861!3d50.39324857147378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c51cb7e380dff%3A0x6f8c257d3428d9c3!2s80%20Manitoba%20St%20E%2C%20Moose%20Jaw%2C%20SK%20S6H%200A2%2C%20Canada!5e0!3m2!1sen!2sus!4v1698420000000!5m2!1sen!2sus"
//               width="310px"
//               height="150px"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div> */}

      
      
//               </div>
//               <h4 className="heading text-xl" style={{ fontWeight: 'bold' }}>
//                 Our Location
//               </h4>
//               <p>456 New Place, Moose Jaw, SK S6H 2B2, Canada</p>
//               {/* <h6 style={{color:'red'}}>Call us +1 93843-34934-32</h6> */}
//               <p>Other location is 80 Manitoba street east moosejaw Saskatchewan</p>
//     </div>
   
//   </div>





//   </div>
//   </div>
// </div>



//     </>
//   )
// }



// export  {Footer}

export  default function Footer() {
  return (
    <footer className= " relative  FooterBack text-white ">
      <div className="container-web relative py-10 z-10">
        <div className="mb-8">
          <img
           src="../assets/soni_auto_1 1.png" 
            alt="Soni Auto Market"
            width={200}
            height={80}
            className="h-20 w-auto"
          />
        </div>

        <div className="grid grid-cols-1  md:grid-cols-[2fr,2fr,2fr] gap-8 lg:gap-16">
          <div className="space-y-3">
            <h4 className="text-xl font-bold">Dealership</h4>
            <p className="text-sm leading-relaxed max-w-md">
              Welcome to Soni Auto Market, your premier destination for quality vehicles and 
              exceptional service. With over 17 years of experience in the automotive industry, 
              Soni Auto Market has established itself as a trusted name in the market.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <FaTiktok className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Hours Section */}
          <div>
            <h4 className="text-xl font-bold mb-4"> <span className="border-b-2 border-[#F40000]">

               Ou
              </span>
               r
                Hours</h4>
            <div className="grid grid-cols-2 gap-x-4 text-sm">
              <div className="space-y-2">
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className="space-y-2">
                <p>11:00 AM - 07:00 PM</p>
                <p>11:00 AM - 07:00 PM</p>
                <p>11:00 AM - 07:00 PM</p>
                <p>11:00 AM - 07:00 PM</p>
                <p>11:00 AM - 07:00 PM</p>
                <p>11:00 AM - 07:00 PM</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Contact and Locations Section */}
          <div className="space-y-3">
            <div>
              <h4 className="text-xl font-bold mb-2"> <span className="border-b-2 border-[#F40000]">

                 Ou
                </span>
                 r
                  Contacts</h4>
              <p className="text-red-500 mb-1">Call us <span className="text-white">+1 93843-34934-32</span> </p>
              <p className="text-sm">456 New Place, Moose Jaw, SK S6H 2B2, Canada</p>

    </div>
<div className="grid grid-cols-2 gap-3">
  

            <div>
              <h4 className="text-xl font-bold mb-1">Browse by Location:</h4>
              <div className="grid grid-cols-1 gap-1 text-sm">
                <Link href="#" className="hover:text-primary">Used Cars in Toronto, ON</Link>
                <Link href="#" className="hover:text-primary">Used Cars in Brampton, ON</Link>
                <Link href="#" className="hover:text-primary">Used Cars in Mississauga, ON</Link>
                <Link href="#" className="hover:text-primary">Used Cars in Markham, ON</Link>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-1">Sell My Car:</h4>
              <div className="grid grid-cols-1 gap-1 text-sm">
                <Link href="#" className="hover:text-primary">Sell My Car in Toronto</Link>
                <Link href="#" className="hover:text-primary">Sell My Car in Mississauga</Link>
                <Link href="#" className="hover:text-primary">Sell My Car in Guelph</Link>
                <Link href="#" className="hover:text-primary">Sell My Car in Brampton</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


