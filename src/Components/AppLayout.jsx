import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Nav />
      <div className="flex justify-center w-[1512px] px-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
