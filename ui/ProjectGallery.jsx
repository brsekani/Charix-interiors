import LivingRoomImage from "/public/photo1.png";
import KitchenImage from "/public/photo4.png";
import RoomImage from "/public/photo2.png";
import OfficeImage from "/public/photo3.png";
import ViewMoreImage from "/public/Group 4 (1).png";

function ProjectGallery() {
  return (
    <div className="flex items-center flex-col mt-52">
      <h1 className="text-[64px] leading-[71.42px]">Project Gallery</h1>
      <p className="text-[24px] text-center w-[1026px] leading-[29.76px] mt-6">
        We will continue to grow and evolve Chariz Interiors for the betterment
        of our clients and our people. Vision includes the continual expansion.
      </p>
      <div className="flex items-center flex-col gap-3 mt-12">
        <div className="flex items-center justify-between gap-16 ">
          <p className="text-[20px] relative pb-2  group cursor-pointer">
            Living room Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-100 group-hover:scale-x-100 transition-transform"></span>
          </p>
          <p className="text-[20px] relative pb-2 group cursor-pointer">
            Kitchen Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </p>
          <p className="text-[20px] relative pb-2 group cursor-pointer">
            Room Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </p>
          <p className="text-[20px] relative pb-2 group cursor-pointer">
            Office Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </p>
        </div>
        <hr className="border border-[#000000] w-[898px]" />
      </div>
      <div className="flex gap-3 mt-10">
        <div className="flex gap-3 flex-col">
          <div className="flex gap-3">
            <img src={LivingRoomImage} alt="" />
            <img src={KitchenImage} alt="" />
          </div>
          <div>
            <img src={RoomImage} alt="" />
          </div>
        </div>
        <div>
          <img src={OfficeImage} alt="" />
        </div>
      </div>
      <div className="flex items-center gap-6 cursor-pointer mt-16">
        <p className="text-black text-[18px] font-normal">View More</p>
        <img src={ViewMoreImage} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ProjectGallery;
