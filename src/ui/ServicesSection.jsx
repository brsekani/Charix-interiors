import serviceImage1 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6.png";
import serviceImage2 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (1).png";
import serviceImage3 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (2).png";
import serviceImage4 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (3).png";
import vectorIcon from "/public/Vector.png";
import groupIcon from "/public/Group 4 (1).png";

function ServicesSection() {
  return (
    <div className="xl:mt-[200px] mt-[40px] w-full flex justify-center items-center flex-col">
      <div className="flex items-center justify-between mb-10 xl:px-52 px-2 w-full">
        <h1 className="xl:text-[64px] text-[30px] leading-[71.42px]">
          Our Services
        </h1>
        <div className="flex items-center xl:gap-6 gap-2 cursor-pointer">
          <p className="text-black xl:text-[18px] text-1 font-normal">
            View More
          </p>
          <img
            src={groupIcon}
            alt=""
            className="cursor-pointer w-10 xl:w-[4rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6 items-center justify-center cursor-pointer m-auto xl:m">
        {/* Service 1 */}
        <div className="w-full md:w-[322px] h-[452px] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[32px]">01</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5">
            Residential Interior Design
          </h1>
          <img src={serviceImage1} alt="" />
        </div>
        {/* Service 2 */}
        <div className="w-full md:w-[322px] h-[452px] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[32px]">02</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5">
            Residential Interior Design
          </h1>
          <img src={serviceImage2} alt="" />
        </div>
        {/* Service 3 */}
        <div className="w-full md:w-[322px] h-[452px] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[32px]">03</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5">
            Residential Interior Design
          </h1>
          <img src={serviceImage3} alt="" />
        </div>
        {/* Service 4 */}
        <div className="w-full md:w-[322px] h-[452px] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[32px]">04</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5">
            Residential Interior Design
          </h1>
          <img src={serviceImage4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
