import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Homepage() {
  return (
    <div className="flex justify-center">
      <div className="w-[1512px] px-20 h-[1162px] bg-[#F2F2F2] mt-[9.5rem]">
        {/* The Art of Beautiful Living section */}
        <div className="flex w-full  ">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-50 h-[764px]"></div>
            <img
              className="max-w-[1124px]"
              src="public\minimalist-interior-design 1.png"
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
                  <img src="public\Group 4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative top-[200px] right-48 flex-shrink-0">
            <div className="bg-[#FFC50A] w-[438px] h-[562px] mt-[-100px] z-10">
              <div className="absolute flex flex-col py-20 px-16">
                <h6 className="text-[24px]">Chariz Interiors;</h6>
                <img
                  className="w-[1px] h-[130px] ml-1"
                  src="public\Line 1.png"
                  alt=""
                />
                <p className="text-[24px] font-bold">
                  Dedicated to creating remarkable spaces that elevate living
                  and working experiences.
                </p>
                <div className="flex items-center gap-6 mt-20">
                  <p className="text-black text-[18px] font-normal">
                    View Recent Projects
                  </p>
                  <img src="public\Group 4 (1).png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-16 mx-5 my-7">
              <img
                className="cursor-pointer"
                src="public\Arrow (next).png"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="public\Arrow (next) (1).png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Our Services section */}
        <div className="mt-[200px]">
          <div className="flex items-center justify-between px-52 mb-10">
            <h1 className="text-[64px] leading-[71.42px]">Our Services</h1>
            <div className="flex items-center gap-6 cursor-pointer">
              <p className="text-black text-[18px] font-normal">View More</p>
              <img
                src="public\Group 4 (1).png"
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex gap-6  cursor-pointer ">
            <div className="w-[322px] h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[32px]">01</p>
                <img className="mt-[-20px]" src="public\Vector.png" alt="" />
              </div>
              <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img
                src="public\3d-room-decor-with-furniture-minimalist-beige-tones (2) 6.png"
                alt=""
              />
            </div>
            <div className="w-[322px] h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[32px]">01</p>
                <img className="mt-[-20px]" src="public\Vector.png" alt="" />
              </div>
              <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img
                src="public\3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (1).png"
                alt=""
              />
            </div>
            <div className="w-[322px] h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[32px]">01</p>
                <img className="mt-[-20px]" src="public\Vector.png" alt="" />
              </div>
              <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img
                src="public\3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (2).png"
                alt=""
              />
            </div>
            <div className="w-[322px] h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[32px]">01</p>
                <img className="mt-[-20px]" src="public\Vector.png" alt="" />
              </div>
              <h1 className="text-[32px] w-[216px] leading-[35.71px] mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img
                src="public\3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (3).png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* About Chariz Interiors section */}
        <div className="flex flex-row mt-48 gap-24 relative">
          <img
            className="w-[551px] h-[803px] z-10"
            src="public\3d-room-decor-with-furniture-minimalist-beige-tones (2) 2.png"
            alt=""
          />
          <div>
            <h2 className="text-[64px] leading-[71.42px] w-[400px] h-[142px] mt-20">
              About Chariz Interiors
            </h2>
            <p className="text-[24px] leading-[29.76px] mt-10">
              Fueled by our love for creativity and a meticulous eye for detail,
              we not only bring our clients dreams to fruition but also
              seamlessly integrate aesthetics, functionality, and
              cost-efficiency. Our team, comprised of adept designers, smart
              home specialists, artisans, and project managers, collaborates to
              ensure unparalleled results for both residential and commercial
              endeavors.
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
              <img
                src="public\Group 4 (1).png"
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
          <h1 className="absolute w-[831px] text-[200px] text-yellow-400 text-opacity-25 top-[-120px] left-[33rem] cursor-default">
            About Us
          </h1>
        </div>

        {/* Projects Completed section */}
        <div className="bg-[#000000C9] h-[392px] mt-20 flex items-center justify-center gap-[20rem] ">
          <div className="flex items-center flex-col">
            <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">60</h1>
            <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
              Projects Completed
            </p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">
              1260
            </h1>
            <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
              Locations
            </p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">
              260
            </h1>
            <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
              Square Feet
            </p>
          </div>
        </div>

        {/* Chariz section */}
        <div
          className="relative flex gap-5 mt-16 "
          style={{ marginLeft: "-80px", marginRight: "-80px" }}
        >
          <img
            className="mt-5 h-[662px] w-[284px]"
            src="public\modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 1.png"
            alt=""
          />
          <img
            className="mt-72 h-[662px]  w-[284px]"
            src="public\modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 2.png"
            alt=""
          />
          <img
            className="mt-32 h-[662px]  w-[284px]"
            src="public\modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 3.png"
            alt=""
          />
          <img
            className="mt-96 h-[662px]  w-[284px]"
            src="public\modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 4.png"
            alt=""
          />
          <img
            className="mt-16 h-[662px]  w-[284px]"
            src="public\modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 5.png"
            alt=""
          />
          <h1 className="absolute top-[-10%] left-[35%] text-[200px] text-[#FFC50A1A] cursor-default ">
            Chariz
          </h1>
        </div>

        {/* Our Recent Projects section */}
        <div className="flex flex-col mt-32">
          <div className="flex items-center justify-between px-24">
            <h1 className="text-[55px] leading-[61.38px] ">
              Our Recent Projects
            </h1>
            <div className="flex items-center gap-6 cursor-pointer">
              <p className="text-black text-[18px] font-normal">View More</p>
              <img
                src="public\Group 4 (1).png"
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 mt-20 ">
            <div>
              <img src="public\cb0c4888461127.png" alt="" />
              <div className="flex items-center justify-between mt-5">
                <h3 className="text-[24px]">Bon Hotels</h3>
                <div className="flex items-center gap-6 cursor-pointer">
                  <p className="text-black text-[18px] font-normal">
                    View More
                  </p>
                  <img
                    src="public\Group 4 (1).png"
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div>
              <img src="public\cb0c4888461127 (1).png" alt="" />
              <div className="flex items-center justify-between mt-5">
                <h3 className="text-[24px]">Bon Hotels</h3>
                <div className="flex items-center gap-6 cursor-pointer">
                  <p className="text-black text-[18px] font-normal">
                    View More
                  </p>
                  <img
                    src="public\Group 4 (1).png"
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div>
              <img src="public\cb0c4888461127 (2).png" alt="" />
              <div className="flex items-center justify-between mt-5">
                <h3 className="text-[24px]">Bon Hotels</h3>
                <div className="flex items-center gap-6 cursor-pointer">
                  <p className="text-black text-[18px] font-normal">
                    View More
                  </p>
                  <img
                    src="public\Group 4 (1).png"
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-12 m-auto mt-12">
            <MdKeyboardArrowLeft size={30} className="cursor-pointer" />
            <div className="flex items-center justify-center bg-[#FFC50A] border w-[54px] h-[54px] rounded-[50%]">
              <p className="text-[18px] cursor-pointer ">1</p>
            </div>
            <div className="flex items-center justify-center ">
              <p className="text-[18px] cursor-pointer ">2</p>
            </div>
            <div className="flex items-center justify-center ">
              <p className="text-[18px] cursor-pointer ">3</p>
            </div>
            <div className="flex items-center justify-center ">
              <p className="text-[18px] cursor-pointer ">4</p>
            </div>
            <div className="flex items-center justify-center ">
              <p className="text-[18px] cursor-pointer ">5</p>
            </div>
            <MdKeyboardArrowRight size={30} className="cursor-pointer" />
          </div>
        </div>

        {/* Project Gallery section */}
        <div className="flex items-center flex-col mt-52">
          <h1 className="text-[64px] leading-[71.42px]">Project Gallery</h1>
          <p className="text-[24px] text-center w-[1026px] leading-[29.76px] mt-6">
            We will continue to grow and evolve Chariz Interiors for the
            betterment of our clients and our people. Vision includes the
            continual expansion.
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
            <hr className="border border-[#000000] w-[898px] " />
          </div>
          <div className="flex gap-3 mt-10">
            <div className="flex gap-3 flex-col">
              <div className="flex gap-3">
                <img src="public\photo1.png" alt="" />
                <img src="public\photo4.png" alt="" />
              </div>
              <div>
                <img src="public\photo2.png" alt="" />
              </div>
            </div>
            <div>
              <img src="public\photo3.png" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-6 cursor-pointer mt-16">
            <p className="text-black text-[18px] font-normal">View More</p>
            <img
              src="public\Group 4 (1).png"
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
