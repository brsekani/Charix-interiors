import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import VectorImage from "/public/Vector (1).png";

function ContactSection() {
  return (
    <div
      className="bg-[#FFC50A] h-[733px] mt-5 px-28"
      style={{ marginLeft: "-80px", marginRight: "-80px" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center cursor-pointer group">
            <h1 className="text-[128px] mt-20 group-hover:font-bold transition-all duration-300 animate-pulse">
              Let’s Talk
            </h1>
            <img className="mt-[-50px] ml-7" src={VectorImage} alt="" />
          </div>

          <div className="mt-10 gap-1 cursor-default">
            <p>General Enquiries</p>
            <p>business@lachariz.com</p>
          </div>
          <div className="mt-20 cursor-default">
            <p>Office Address</p>
            <p className="w-[200px] leading-[19.84px] cursor-default">
              4th Floor, Ocean Centre, off Oladipo Diya Road, Gudu, Apo, Abuja.
            </p>
          </div>
        </div>
        <div className="flex items-end justify-end flex-col gap-32 mt-44 cursor-default">
          <p>Go back to top</p>
          <div className="flex items-end flex-col gap-5">
            <p>Social Media</p>
            <div className="flex items-center justify-between gap-9">
              <FaLinkedin className="cursor-pointer" size={20} />
              <FaTwitter className="cursor-pointer" size={20} />
              <FaInstagram className="cursor-pointer" size={20} />
              <BsFacebook className="cursor-pointer" size={20} />
            </div>
          </div>
          <div className="flex gap-20">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <hr className="w-[1331.9px]" />
        <p>All Rights Reserved La Chariz Group 2023</p>
      </div>
    </div>
  );
}

export default ContactSection;
