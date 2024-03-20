import Image1 from "../public/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 1.png";
import Image2 from "../public/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 2.png";
import Image3 from "../public/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 3.png";
import Image4 from "../public/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 4.png";
import Image5 from "../public/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 5.png";

function ImageGallery() {
  return (
    <div
      className="relative flex gap-5 mt-16"
      style={{ marginLeft: "-80px", marginRight: "-80px" }}
    >
      <img className="mt-5 h-[662px] w-[284px]" src={Image1} alt="" />
      <img className="mt-72 h-[662px] w-[284px]" src={Image2} alt="" />
      <img className="mt-32 h-[662px] w-[284px]" src={Image3} alt="" />
      <img className="mt-96 h-[662px] w-[284px]" src={Image4} alt="" />
      <img className="mt-16 h-[662px] w-[284px]" src={Image5} alt="" />
      <h1 className="absolute top-[-10%] left-[35%] text-[200px] text-[#FFC50A1A] cursor-default">
        Chariz
      </h1>
    </div>
  );
}

export default ImageGallery;
