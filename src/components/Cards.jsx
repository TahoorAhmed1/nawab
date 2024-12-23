const InstagramCard = ({
  imgSrc,
  year,
  make,
  price,
  mileage,
  transmission,
}) => {
  return (
    <div className="relative overflow-hidden group  rounded-xl min-h-[427px]">
      <div className=" w-full relative">
        <img
          src={imgSrc}
          alt={`${year} ${make}`}
          fill
          className="object-cover w-full h-[269px]"
        />
      </div>
      <div className="bg-[#222732] text-white py-[30px] px-[35px] min-h-[158px]">
        <div className="flex  font-normal items-center justify-between">
          <h3 className="text-base truncate">
            {year} {make}...
          </h3>
          <span className="text-[20px]">${price}</span>
        </div>
        <hr className="mt-[15px] mb-[12px] bg-white" />
        <div className="flex justify-between items-center gap-3 text-sm text-white">
          <span className="inline-flex items-center justify-center px-2 py-1 bg-red-600 rounded text-xs font-medium">
            2023
          </span>
          <span>{mileage} KM</span>
          <span>{transmission}</span>
        </div>
      </div>
    </div>
  );
};

export default InstagramCard;
