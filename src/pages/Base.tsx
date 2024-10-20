import { Outlet } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";
import TopNavBar from "../components/TopNavbar";

const Base: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="fixed top-0 w-full z-10">
          <TopNavBar />
        </div>
        <div className=" mt-20">
          <Outlet />
        </div>
        <div className="fixed bottom-0 w-full">
          <BottomNavBar />
        </div>
      </div>
    </>
  );
};

export default Base;
