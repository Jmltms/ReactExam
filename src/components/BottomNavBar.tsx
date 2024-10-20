import { FaRegStar } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { LuDices } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

type NavigationObj = {
  id: number;
  label: string;
  path: string;
  icon: JSX.Element;
};
const BottomNavBar: React.FC = () => {
  // to detect the current location
  const location = useLocation();
  // navigation tab info
  const navigationArr: NavigationObj[] = [
    {
      id: 1,
      label: "Sports",
      path: "/sports",
      icon: <IoIosFootball />,
    },
    {
      id: 2,
      label: "Favorites",
      path: "/favorites",
      icon: <FaRegStar />,
    },
    {
      id: 3,
      label: "Invite",
      path: "/invite",
      icon: <IoPersonAddOutline />,
    },
    {
      id: 4,
      label: "Casino Live",
      path: "/casino-live",
      icon: <LuDices />,
    },
    {
      id: 5,
      label: "Cashier",
      path: "/cashier",
      icon: <MdPayment />,
    },
  ];

  return (
    <>
      <div>
        <ul className="bg-white flex justify-evenly items-center space-x-5 border border-slate-300 pt-3">
          {navigationArr.map((entry) => {
            // if nab is active or not
            let navigationColor: string;
            location.pathname === entry.path
              ? (navigationColor = "text-blue-700")
              : (navigationColor = "text-slate-600");

            return (
              <Link key={entry.id} to={entry.path}>
                <li
                  key={entry.id}
                  className=" flex flex-col justify-center items-center"
                >
                  <p className={`text-xl font-sans ${navigationColor}`}>
                    {entry.icon}
                  </p>
                  <p
                    className={`text-sm font-bold font-sans ${navigationColor}`}
                  >
                    {entry.label}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BottomNavBar;
