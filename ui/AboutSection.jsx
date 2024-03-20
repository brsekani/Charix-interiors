import DoorImage from "/public/Door.png";
import Group4_1Image from "/public/Group 4 (1).png";
import RoomDecorImage from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 2.png";

function AboutSection() {
  return (
    <div className="flex flex-row mt-48 gap-24 relative">
      <img className="w-[551px] h-[803px] z-10" src={RoomDecorImage} alt="" />
      <div>
        <h2 className="text-[64px] leading-[71.42px] w-[400px] h-[142px] mt-20">
          About Chariz Interiors
        </h2>
        <p className="text-[24px] leading-[29.76px] mt-10">
          Fueled by our love for creativity and a meticulous eye for detail, we
          not only bring our clients' dreams to fruition but also seamlessly
          integrate aesthetics, functionality, and cost-efficiency. Our team,
          comprised of adept designers, smart home specialists, artisans, and
          project managers, collaborates to ensure unparalleled results for both
          residential and commercial endeavors.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 border border-[#FFC50A] w-[324px] h-[46px] px-1 cursor-pointer">
              <img src="public\Door.png" alt="" />
              <p>Consultation</p>
            </div>
            <div className="flex items-center gap-3 border border-[#FFC50A] w-[324px] h-[46px] px-1 cursor-pointer">
              <img src="public\Door.png" alt="" />
              <p>Furniture Design</p>
            </div>
            <div className="flex items-center gap-3 border border-[#FFC50A] w-[324px] h-[46px] px-1 cursor-pointer">
              <img src="public\Door.png" alt="" />
              <p>3D Visualization</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 border border-[#FFC50A] w-[324px] h-[46px] px-1 cursor-pointer">
              <img src="public\Door.png" alt="" />
              <p>Design Development</p>
            </div>
            <div className="flex items-center gap-3 border border-[#FFC50A] w-[324px] h-[46px] px-1 cursor-pointer">
              <img src="public\Door.png" alt="" />
              <p>Space Planning</p>
            </div>
            <div className="flex items-center gap-3 border border-[#FFC50A] w-[324px] h-[46px] px-1 cursor-pointer">
              <img src="public\Door.png" alt="" />
              <p>ighting Design</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 cursor-pointer mt-16">
          <p className="text-black text-[18px] font-normal">Read More</p>
          <img src="public\Group 4 (1).png" alt="" className="cursor-pointer" />
        </div>
        <h1 className="absolute w-[831px] text-[200px] text-yellow-400 text-opacity-25 top-[-120px] left-[33rem] cursor-default">
          About Us
        </h1>
      </div>
    </div>
  );
}

export default AboutSection;
