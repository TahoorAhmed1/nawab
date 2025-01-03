
import { Link } from "react-router-dom"
import "../components/BackImgSection.css"


const BackImgSection = () => {
  return (
    <>
<div className="background-img-sec-rs sticky flex flex-col items-center justify-center text-center">
    <h1 style={{ opacity:'10', zIndex:'1',textAlign:'center'}} className="text-2xl md:text-[2.2rem] font-semibold mb-4 text-white ">WELCOME TO SONI AUTO MARKET</h1>
    <p style={{ width: '80%' , opacity:'10', zIndex:'1',textAlign:'center'}} className="mb-6 px-4   text-white text-sm md:text-base lg:text-[16px]">
        At SONi AUTO MARKETS, we treat the needs of each individual customer with paramount concern & are committed to saving our customers both time and money, while providing a wide selection of High Quality Pre-Owned Cars & Trucks. Offering a selection from Torontos best Family sedans & coupes such as Mercedes-Benz, Lexus, Honda, Toyota, Nissan, Infiniti, BMW to the finest SUVs and Wagons on todays market. Our experienced sales staff is eager to share its knowledge and enthusiasm with you.
    </p>
    <Link  to='/Contact'><button
        style={{   opacity:'10', zIndex:'1', textAlign: "center" }}
        className="text-white py-2 px-4 w-32 rounded  transition border-2 border-[#F40000] bg-transparent hover:bg-[#F40000]"
    >
        Learn More
    </button></Link>
</div>



    </>
  )
}

export default BackImgSection
