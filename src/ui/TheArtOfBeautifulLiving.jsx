import InteriorDesignImage from "/public/minimalist-interior-design 1.png";
import LineImage from "/public/Line 1.png";
import Group4Image from "/public/Group 4.png";
import Group4_1Image from "/public/Group 4 (1).png";
import ArrowNextImage from "/public/Arrow (next).png";
import ArrowNext1Image from "/public/Arrow (next) (1).png";

function TheArtOfBeautifulLiving() {
  return (
    <div className="flex w-full -mt-40 xl:mt-0">
      <div className="relative">
        <div className="flex items-center justify-center absolute inset-0  opacity-50 h-[764px]"></div>
        <img
          className="xl:min-w-[1124px] xl:min-h-[764px] h-[35rem] w-full"
          src={InteriorDesignImage}
          alt="Interior Design"
        />
        <div className="absolute inset-0 flex flex-col items-start">
          <div className="xl:ml-[7rem] mx-5  xl:mt-[17rem] mt-28">
            <h1 className="text-[#FFFFFF] text-[80px] max-w-[678px] w-full leading-none">
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
      <div className="relative top-[200px] right-48 flex-shrink-0 hidden xl:block">
        <div className="bg-[#FFC50A] w-[438px] h-[562px] mt-[-100px] z-10">
          <div className="absolute flex flex-col px-16 py-20">
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
