import { FaAngleDown } from "react-icons/fa";

function Nav() {
  return (
    <nav className="flex items-center justify-between h-[157px] w-[1512px] px-20 fixed top-0 bg-white z-50">
      <img className="cursor-pointer" src="/Chariz Interiors 1.png" />,
      <div className="flex items-center gap-24">
        <ul className="flex items-center gap-16 mb-5  ">
          <li className="hover:text-[#FFC50A] cursor-pointer">Home</li>
          <li className="flex items-center justify-center gap-2 hover:text-[#FFC50A] cursor-pointer">
            Pages <span className="mt-1">{<FaAngleDown size={20} />}</span>{" "}
          </li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Gallary</li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Shop</li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Contact</li>
          <li className="hover:text-[#FFC50A] cursor-pointer">Login</li>
        </ul>
        <div className="flex items-center gap-4 mb-5 ">
          <img className="cursor-pointer" src="public\user.png" />
          <img src="public/Line 4.png" />
          <img className="cursor-pointer" src="public\search-01.png" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
