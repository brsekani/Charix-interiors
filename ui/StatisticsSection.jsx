function StatisticsSection() {
  return (
    <div className="bg-[#000000C9] h-[392px] mt-20 flex items-center justify-center gap-[20rem] ">
      <div className="flex items-center flex-col">
        <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">60</h1>
        <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
          Projects Completed
        </p>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">1260</h1>
        <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">Locations</p>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-[64px] text-[#FFC50A] leading-[71.42px]">260</h1>
        <p className="text-[20px] text-[#FFC50A] leading-[24.8px]">
          Square Feet
        </p>
      </div>
    </div>
  );
}

export default StatisticsSection;
