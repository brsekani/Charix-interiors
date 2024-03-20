import { FaAngleDown } from "react-icons/fa";
import logoImg from "/public/Chariz Interiors 1.png";
import userImg from "/public/user.png";
import lineImg from "/public/Line 4.png";
import searchImg from "/public/search-01.png";

function Nav() {
  return (
    <nav className="flex items-center justify-between h-[157px] w-full px-20 fixed top-0 bg-white z-50">
      <img className="cursor-pointer" src={logoImg} alt="Logo" />
      <div className="flex items-center gap-24">
        <ul className="flex items-center gap-16 mb-5">
          <li className="hover:text-[#FFC50A] cursor-pointer">Home</li>
          <li className="flex items-center justify-center gap-2 hover:text-[#FFC50A] cursor-pointer">
            Pages <span className="mt-1">{<FaAngleDown size={20} />}</span>{" "}
          </li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Gallery</li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Shop</li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Contact</li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Login</li>
        </ul>
        <div className="flex items-center gap-4 mb-5">
          <img className="cursor-pointer" src={userImg} alt="User" />
          <img src={lineImg} alt="Line" />
          <img className="cursor-pointer" src={searchImg} alt="Search" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
