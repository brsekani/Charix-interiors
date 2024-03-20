import Group4_1Image from "/public/Group 4 (1).png";
import ProjectImage1 from "/public/cb0c4888461127.png";
import ProjectImage2 from "/public/cb0c4888461127 (1).png";
import ProjectImage3 from "/public/cb0c4888461127 (2).png";
import Pagination from "./Pagination";

function RecentProjects() {
  return (
    <div className="flex flex-col mt-32">
      <div className="flex items-center justify-between px-24">
        <h1 className="text-[55px] leading-[61.38px] ">Our Recent Projects</h1>
        <div className="flex items-center gap-6 cursor-pointer">
          <p className="text-black text-[18px] font-normal">View More</p>
          <img src={Group4_1Image} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-20 ">
        <div>
          <img src={ProjectImage1} alt="" />
          {/* Rest of the project details */}
        </div>
        <div>
          <img src={ProjectImage2} alt="" />
          {/* Rest of the project details */}
        </div>
        <div>
          <img src={ProjectImage3} alt="" />
          {/* Rest of the project details */}
        </div>
      </div>

      <Pagination />
    </div>
  );
}

export default RecentProjects;
