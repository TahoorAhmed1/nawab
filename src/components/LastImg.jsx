import "../components/LastImg.css"

const LastImg = () => {
  return (
    <>
 
<div  
     style={{
        backgroundImage: "url(../assets/homeServices.png)", // Fallback background for unsupported media types
        backgroundSize: "cover",
        backgroundPosition: "center",
       
        zIndex: -1,
      }}
       className=" bg-cover bg-center h-auto max-sm:px-5  text-white  lg:py-28">
    <div className="container-web   flex flex-col lg:flex-row justify-between items-center gap-20 ">
        
        
           <div className="w-full max-w-[806px] h-auto lg:h-[302px] text-white  flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-6 text-left">
            <p className="text-[17px]  font-sans  w-full">Serving the SONI AUTO MARKETS, located at 456 New Place, Moose Jaw, SK S6H 2B2, Canada.</p >
            <p className="text-[17px]   font-sans w-full">We have a strong and committed sales staff with many years of experience satisfying our customers’ needs.</p >
            <p className="text-[17px]   font-sans w-full">Feel free to browse our inventory online, request more information about vehicles, set up a test drive or inquire about financing!</p>
        </div>
        <div className="grid grid-cols-4 mt-8 w-full flex-wrap gap-6">
            <img width={1000} className="w-[156.91px]" src="../assets/carfaxcanada_icon.png.png" alt="Car" />
            <img width={1000} className="w-[156.91px]" src="../assets/logo-omvic.png.png" alt="Car" />
            <img width={1000} className="w-[156.91px]" src="../assets/logo-ucda.png.png" alt="Car" />
            <img width={1000} className="w-[156.91px]" src="../assets/sgii_logo 1.png" alt="Car" />
        </div>
    </div>

    {/* Right Section */}
    <div style={{borderRight:'6px solid red'}} className="w-full max-w-[713.33px] bg-black  flex flex-col justify-center items-start  shadow-md">
    <div className="" style={{width:'100%'}}>
        <div className="flex justify-between  capitalize items-center  view-wala-card">
            <div className="flex p-6 gap-x-6 items-center" >
            <i className="fa-solid fa-car text-3xl"></i>

<h2 className="md:text-left text-[18px] font-normal">VIEW OUR INVENTORY <br /> <span className="text-[15px] font-light">find Your Dream Car at a Competitive price</span></h2>
            </div>
        </div>
        <div className="flex justify-between  capitalize items-center  view-wala-card">
            <div className="flex p-6 gap-x-6 items-center" >
        <i className="fa-solid fa-dollar-sign text-3xl"></i>
            <h2 className="md:text-left text-[18px] font-normal ">VIEW OUR INVENTORY <br /> <span className="text-[15px] font-light">find Your Dream Car at a Competitive price</span></h2>
        </div>
        </div>
        <div className="flex justify-between  capitalize items-center  view-wala-card">
            <div className="flex p-6 gap-x-6 items-center" >
        <i className="fa-solid fa-right-left text-3xl"></i>
            <h2 className="md:text-left text-[18px] font-normal">VIEW OUR INVENTORY <br /> <span className="text-[15px] font-light">find Your Dream Car at a Competitive price</span></h2>
        </div>
        </div>
    </div>
</div>

</div>
</div>



    </>
  )
}

export default LastImg
