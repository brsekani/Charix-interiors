import { CiHeart } from "react-icons/ci";

import VintageLampImage1 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1.png";
import VintageLampImage2 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1 (1).png";
import VintageLampImage3 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1 (2).png";
import VintageLampImage4 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1 (3).png";
import Group4_1Image from "/public/Group 4 (1).png";

function ShopInteriorAccessories() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <h1 className="text-[55px] leading-[61.38px]">
        Shop Interior Accessories
      </h1>
      <div className="flex flex-row items-center justify-center gap-4 px-20 mt-16">
        <div className="w-[270px] h-[330px] hover:h-[390px] p-2 border border-red-300 group transition-all duration-300">
          <img src={VintageLampImage1} alt="" />
          <div className="flex items-center justify-between gap-12 mt-3">
            <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
              Vintage Lamp
            </h1>
            <p className="text-[20px]">
              $<span>36</span>
            </p>
          </div>
          <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
            Vintage ceiling lamp in dark brown shade. Comes with adjustable
            brightness levels.
          </p>
          <div className="hidden items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:flex">
            <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
            <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
              <CiHeart size={30} color="yellow" />
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[330px] hover:h-[390px] p-2 border border-red-300 group transition-all duration-300">
          <img src={VintageLampImage2} alt="" />
          <div className="flex items-center justify-between gap-12 mt-3">
            <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
              Vintage Lamp
            </h1>
            <p className="text-[20px]">
              $<span>36</span>
            </p>
          </div>
          <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
            Vintage ceiling lamp in dark brown shade. Comes with adjustable
            brightness levels.
          </p>
          <div className="hidden items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:flex">
            <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
            <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
              <CiHeart size={30} color="yellow" />
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[330px] hover:h-[390px] p-2 border border-red-300 group transition-all duration-300">
          <img src={VintageLampImage3} alt="" />
          <div className="flex items-center justify-between gap-12 mt-3">
            <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
              Vintage Lamp
            </h1>
            <p className="text-[20px]">
              $<span>36</span>
            </p>
          </div>
          <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
            Vintage ceiling lamp in dark brown shade. Comes with adjustable
            brightness levels.
          </p>
          <div className="hidden items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:flex">
            <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
            <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
              <CiHeart size={30} color="yellow" />
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[330px] hover:h-[390px] p-2 border border-red-300 group transition-all duration-300">
          <img src={VintageLampImage4} alt="" />
          <div className="flex items-center justify-between gap-12 mt-3">
            <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
              Vintage Lamp
            </h1>
            <p className="text-[20px]">
              $<span>36</span>
            </p>
          </div>
          <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
            Vintage ceiling lamp in dark brown shade. Comes with adjustable
            brightness levels.
          </p>
          <div className="hidden items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:flex">
            <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
            <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
              <CiHeart size={30} color="yellow" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 cursor-pointer mt-24">
        <p className="text-black text-[18px] font-normal">
          Shop Interior Accessories
        </p>
        <img src={Group4_1Image} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ShopInteriorAccessories;
