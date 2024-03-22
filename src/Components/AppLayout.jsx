import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import Search from "../ui/Search";
import { useState } from "react";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav setIsOpen={setIsOpen} />
      <Search isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex justify-center w-[1512px] px-10 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
