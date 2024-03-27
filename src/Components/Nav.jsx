import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logoImg from "/public/Chariz Interiors 1.png";
import userImg from "/public/user.png";
import lineImg from "/public/Line 4.png";
import searchImg from "/public/search-01.png";
import { useState } from "react";

function Nav({ setIsOpen }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleToggleMenu() {
    setIsOpenMenu((isOpenMenu) => !isOpenMenu);
  }

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <nav className="flex items-center justify-between h-[157px] w-full xl:px-20 px-5 xl:fixed top-0 bg-white z-50 relative">
      <img className="cursor-pointer -mt-6 -ml-4" src={logoImg} alt="Logo" />
      <div className="items-center gap-24 hidden xl:flex">
        <ul className="flex items-center gap-16 mb-5">
          <NavLink to="home">
            <li className="hover:text-[#FFC50A] cursor-pointer">Home</li>
          </NavLink>
          <li className="flex items-center justify-center gap-2 hover:text-[#FFC50A] cursor-pointer">
            Pages{" "}
            <span className="mt-1">
              <FaAngleDown size={20} />
            </span>
          </li>
          <NavLink to="gallery">
            <li className="hover:text-[#FFC50A] cursor-pointer">Gallery</li>
          </NavLink>
          <NavLink to="shop">
            <li className="hover:text-[#FFC50A] cursor-pointer">Shop</li>
          </NavLink>
          <NavLink to="contact">
            <li className="hover:text-[#FFC50A] cursor-pointer">Contact</li>
          </NavLink>
          <NavLink to="login">
            <li className="hover:text-[#FFC50A] cursor-pointer">Login</li>
          </NavLink>
        </ul>
        <div className="flex items-center gap-4 mb-5">
          <NavLink to="account">
            <img className="cursor-pointer" src={userImg} alt="User" />
          </NavLink>
          <img src={lineImg} alt="Line" />
          <img
            className="cursor-pointer"
            src={searchImg}
            alt="Search"
            onClick={handleClick}
          />
        </div>
      </div>
      <RxHamburgerMenu
        className="block -mt-12 xl:hidden"
        size={30}
        onClick={handleToggleMenu}
      />
      {isOpenMenu && (
        <div className="bg-white shadow-lg flex xl:hidden items-start flex-col w-32 h-58 absolute top-24 right-4">
          <ul className="flex flex-col gap-3 mx-auto py-5">
            <NavLink to="home">
              <li
                className="hover:text-[#FFC50A] cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              >
                Home
              </li>
            </NavLink>
            <li
              className="flex items-center gap-2 hover:text-[#FFC50A] cursor-pointer"
              onClick={() => setIsOpenMenu(false)}
            >
              Pages{" "}
              <span className="mt-1">
                <FaAngleDown size={20} />
              </span>
            </li>
            <NavLink to="gallery">
              <li
                className="hover:text-[#FFC50A] cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              >
                Gallery
              </li>
            </NavLink>
            <NavLink to="shop">
              <li
                className="hover:text-[#FFC50A] cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              >
                Shop
              </li>
            </NavLink>
            <NavLink to="contact">
              <li
                className="hover:text-[#FFC50A] cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              >
                Contact
              </li>
            </NavLink>
            <NavLink to="login">
              <li
                className="hover:text-[#FFC50A] cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              >
                Login
              </li>
            </NavLink>

            <div className="flex items-center gap-4">
              <NavLink to="account">
                <img className="cursor-pointer" src={userImg} alt="User" />
              </NavLink>
              <img src={lineImg} alt="Line" />
              <img
                className="cursor-pointer"
                src={searchImg}
                alt="Search"
                onClick={handleClick}
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

Nav.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Nav;
