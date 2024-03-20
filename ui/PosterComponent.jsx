import PosterImage from "/public/poster-frames-mock-up-in-modern-room-interior-in-w-2023-11-27-05-06-31-utc 1.png";
import Group4Image from "/public/Group 4.png";

function PosterComponent() {
  return (
    <div className="relative mt-24">
      <img className="" src={PosterImage} alt="" />
      <div className="absolute flex flex-col items-center justify-center  bg-[#00000080] inset-0 gap-16">
        <p className="text-center h-[98px] w-[1026px] text-[24px] text-[#FFFFFF] mt-36">
          At La Chariz Interiors, we are dedicated to creating remarkable spaces
          that elevate living and working experiences. Whether it's revamping a
          single room or designing an entire property, we are ready to bring our
          expertise and creativity to meet our client's unique needs and
          aspirations.
        </p>
        <div className="flex items-center gap-16 mt-8">
          <p className="text-[#FFFFFF] text-[18px] font-normal">
            Start a Project
          </p>
          <img src={Group4Image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PosterComponent;
