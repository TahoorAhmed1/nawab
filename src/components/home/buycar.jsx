import { FaFrown } from "react-icons/fa";
import { FiFrown } from "react-icons/fi";
import { LuSmilePlus } from "react-icons/lu";

export default function SellCar() {
  return (
    <div className="container-web  py-24 flex flex-col gap-y-[100px]">
    <div className="w-full ">

      <h1 className="text-center text-3xl md:text-5xl font-bold mb-[16px]">
      BUY WITH 
              <span className="text-red-600">CONFIDENCE</span> ?
      </h1>
      <p className="text-[18px] font-normal text-center mb-[51px]">Every car we sell has undergone rigorous inspection to insure top-tier and reliability</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Dealer Ship */}
        <div className=" shadow-md  h-[396.88px]  rounded-sm">
          <p className="text-3xl py-6 bg-[#E5E3DF] font-semibold text-[#666666] text-center ">Dealer Ship</p>
          <div className=" flex flex-col gap-y-[16px] py-[50px] px-[23px]">
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Higher Prices</span>
            </div>
            
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Limited Inventory</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">No inspection report</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Mostly former rental cars</span>
            </div>
          </div>
        </div>

        {/* Soni Auto Market */}
        <div className=" shadow-xl  h-[559px]  rounded-sm">
            <div className="py-6  bg-[#F40000] flex justify-center ">

          <p className="text-3xl  font-semibold text-white text-center ">Soni Auto Market</p>
            </div>
          <div className=" flex flex-col gap-y-[16px] py-[50px] px-[23px]">
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">Pay less then marketplace</span>
            </div>
            
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">Pre book cars of your choice cars</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">Rv boats</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">Hundreds of cars to pick from</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">Certified inspection report</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">No former rental cars or texis</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">No haggling</span>
            </div>
          </div>
        </div>

       {/* Dealer Ship */}
       <div className=" shadow-md  h-[396.88px]  rounded-sm">
          <p className="text-3xl py-6 bg-[#E5E3DF]  font-semibold text-[#666666] text-center ">Dealer Ship</p>
          <div className=" flex flex-col gap-y-[16px] py-[50px] px-[23px]">
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Haggle with Strangers</span>
            </div>
            
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Potentially stolen car</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">No inspection report</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Unclear vehicle history</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full ">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-[70px]">
        WHY SELL YOUR CAR ONLINE TO{' '}
        <span className="text-red-600">SONI AUTO MARKET</span> ?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Dealer Ship */}
        <div className=" shadow-md  h-[396.88px]  rounded-sm">
          <p className="text-3xl py-6 bg-[#E5E3DF] font-semibold text-[#666666] text-center ">Dealer Ship</p>
          <div className=" flex flex-col gap-y-[16px] py-[50px] px-[23px]">
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Payment can take 20 days</span>
            </div>
            
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Haggling guaranteed</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Lengthy inspection</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Requires vehicle prep</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Be ready to wait</span>
            </div>
          </div>
        </div>

        {/* Soni Auto Market */}
        <div className=" shadow-xl  h-[507px]  rounded-sm">
            <div className="py-6  bg-[#F40000] flex justify-center ">

          <p className="text-3xl  font-semibold text-white text-center ">Soni Auto Market</p>
            </div>
          <div className=" flex flex-col gap-y-[16px] py-[50px] px-[23px]">
            
            
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">We pay instantly</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">We don’t haggle</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">Our offers are firm</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">We’ll buy your car today</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">No need to clean your car</span>
            </div>
            <div className="flex items-start gap-3">
              <LuSmilePlus className="w-8 h-8 flex-shrink-0 text-[#0D9E11]" />
              <span className="text-black">We can pick up your car</span>
            </div>
          </div>
        </div>

       {/* Dealer Ship */}
       <div className=" shadow-lg  h-[396.88px]  rounded-sm">
          <p className="text-3xl py-6 bg-[#E5E3DF]  font-semibold text-[#666666] text-center ">Dealer Ship</p>
          <div className=" flex flex-col gap-y-[16px] py-[50px] px-[23px]">
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Insecure payment</span>
            </div>
            
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Haggling guaranteed</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">No-shows</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Requires vehicle prep</span>
            </div>
            <div className="flex items-start gap-3">
              <FiFrown className="w-8 h-8 flex-shrink-0 text-black" />
              <span className="text-[#0000008F]">Be ready to wait</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

