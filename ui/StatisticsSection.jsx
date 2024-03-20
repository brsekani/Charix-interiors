import statisticsSectionImg from "/public/dining-room-in-a-coffee-shop-2023-11-27-05-05-18-utc 1.png";

function StatisticsSection() {
  return (
    <div className="relative h-[392px] mt-20 flex items-center justify-center">
      <div
        className="absolute inset flex items-center justify-center"
        style={{ backgroundColor: "#000000C9" }}
      >
        <img src={statisticsSectionImg} alt="" className="opacity-50" />
      </div>
      <div className="z-10 flex items-center gap-32">
        <div className="flex items-center flex-col">
          <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">60</h1>
          <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
            Projects Completed
          </p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">1260</h1>
          <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
            Locations
          </p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">260</h1>
          <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
            Square Feet
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection;
