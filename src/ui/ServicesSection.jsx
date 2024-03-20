import serviceImage1 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6.png";
import serviceImage2 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (1).png";
import serviceImage3 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (2).png";
import serviceImage4 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (3).png";
import vectorIcon from "/public/Vector.png";
import groupIcon from "/public/Group 4 (1).png";

function ServicesSection() {
  return (
    <div className="mt-[200px]">
      <div className="flex items-center justify-between mb-10 px-52">
        <h1 className="text-[64px] leading-[71.42px]">Our Services</h1>
        <div className="flex items-center gap-6 cursor-pointer">
          <p className="text-black text-[18px] font-normal">View More</p>
          <img src={groupIcon} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-6 cursor-pointer ">
        {/* Service 1 */}
        <div className="w-[322px] h-[452px] bg-white p-3 ">
          <div className="flex items-center justify-between ">
            <p className="text-[32px]">01</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
            Residential Interior Design
          </h1>
          <img src={serviceImage1} alt="" />
        </div>
        {/* Service 2 */}
        <div className="w-[322px] h-[452px] bg-white p-3 ">
          <div className="flex items-center justify-between ">
            <p className="text-[32px]">01</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
            Residential Interior Design
          </h1>
          <img src={serviceImage2} alt="" />
        </div>
        {/* Service 3 */}
        <div className="w-[322px] h-[452px] bg-white p-3 ">
          <div className="flex items-center justify-between ">
            <p className="text-[32px]">01</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
            Residential Interior Design
          </h1>
          <img src={serviceImage3} alt="" />
        </div>
        {/* Service 4 */}
        <div className="w-[322px] h-[452px] bg-white p-3 ">
          <div className="flex items-center justify-between ">
            <p className="text-[32px]">01</p>
            <img className="mt-[-20px]" src={vectorIcon} alt="" />
          </div>
          <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
            Residential Interior Design
          </h1>
          <img src={serviceImage4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
