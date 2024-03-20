import InteriorDesignImage from "/public/minimalist-interior-design 1.png";
import LineImage from "/public/Line 1.png";
import Group4Image from "/public/Group 4.png";
import Group4_1Image from "/public/Group 4 (1).png";
import ArrowNextImage from "/public/Arrow (next).png";
import ArrowNext1Image from "/public/Arrow (next) (1).png";

function TheArtOfBeautifulLiving() {
  return (
    <div className="flex w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50 h-[764px]"></div>
        <img
          className="max-w-[1124px]"
          src={InteriorDesignImage}
          alt="Interior Design"
        />
        <div className="absolute inset-0 flex items-start flex-col">
          <div className="ml-[7rem] mt-[17rem]">
            <h1 className="text-[#FFFFFF] text-[80px] w-[678px] leading-none">
              The Art of Beautiful Living
            </h1>
            <div className="flex items-center gap-16 mt-8">
              <p className="text-[#FFFFFF] text-[18px] font-normal">
                Book Consultation
              </p>
              <img src={Group4Image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[200px] right-48 flex-shrink-0">
        <div className="bg-[#FFC50A] w-[438px] h-[562px] mt-[-100px] z-10">
          <div className="absolute flex flex-col py-20 px-16">
            <h6 className="text-[24px]">Chariz Interiors;</h6>
            <img className="w-[1px] h-[130px] ml-1" src={LineImage} alt="" />
            <p className="text-[24px] font-bold">
              Dedicated to creating remarkable spaces that elevate living and
              working experiences.
            </p>
            <div className="flex items-center gap-6 mt-20">
              <p className="text-black text-[18px] font-normal">
                View Recent Projects
              </p>
              <img src={Group4_1Image} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-16 mx-5 my-7">
          <img className="cursor-pointer" src={ArrowNextImage} alt="" />
          <img className="cursor-pointer" src={ArrowNext1Image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TheArtOfBeautifulLiving;
