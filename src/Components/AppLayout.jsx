import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex justify-center w-[1512px] px-10 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
export default AppLayout;
