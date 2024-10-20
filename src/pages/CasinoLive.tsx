import Carousel from "../components/reusables/Carousel";
import { FaRegBell, FaRegMoneyBillAlt } from "react-icons/fa";
import { Tabs } from "antd";
import {
  MdOutlineFiberNew,
  MdOutlineLocalFireDepartment,
} from "react-icons/md";
import { IoGameControllerOutline, IoSearchSharp } from "react-icons/io5";
import { GiVendingMachine } from "react-icons/gi";
import Cards from "../components/reusables/Cards";
import { useState } from "react";
import SearchGames from "../components/SearchGames";

type TabTypes = {
  id: string;
  icon: JSX.Element;
  label: string;
};

interface casinoProps {
  id: number;
  gameProvider: string;
  category: string;
  name: string;
  image: string;
  favorite: boolean;
}
interface CasinoLiveProps {
  data: casinoProps[];
  makeFavorites: (id: number) => void;
}

const CasinoLive = ({ data, makeFavorites }: CasinoLiveProps | any) => {
  const [games, setGames] = useState<casinoProps[]>(data);
  const [activeTab, setActiveTab] = useState("2");
  const tabList: TabTypes[] = [
    {
      id: "1",
      icon: <IoSearchSharp />,
      label: "Search",
    },
    {
      id: "2",
      icon: <MdOutlineLocalFireDepartment />,
      label: "Start",
    },
    {
      id: "3",
      icon: <MdOutlineFiberNew />,
      label: "New",
    },
    {
      id: "4",
      icon: <GiVendingMachine />,
      label: "Slots",
    },
    {
      id: "5",
      icon: <IoGameControllerOutline />,
      label: "Live",
    },
    {
      id: "6",
      icon: <FaRegMoneyBillAlt />,
      label: "Jackpot",
    },
  ];

  const handleTabChange = (key: string) => {
    if (key === "2") {
      setGames(data);
    } else {
      const category = tabList.find((entry) => entry.id === key);
      if (category) {
        const filterGame = data.filter(
          (entry: casinoProps) => entry.category === category.label
        );
        setGames(filterGame);
        setActiveTab(key);
      }
    }
  };
  return (
    <>
      <div className=" space-y-3 mb-20">
        <Carousel />
        <div className=" flex space-x-2 items-center justify-center">
          <FaRegBell className=" text-yellow-300" />
          <p className=" text-sm font-sans text-blue-600">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit.
            <strong>Magni, similique?</strong>
          </p>
        </div>
        <Tabs
          defaultActiveKey="2"
          centered
          size="small"
          onChange={handleTabChange}
          items={tabList.map((entry) => {
            return {
              key: entry.id,
              label:
                entry.label === "Search" ? (
                  <div className="flex items-center border-r pr-5 border-slate-500">
                    <p className="text-xl">{entry.icon}</p>
                    <p className=" font-sans text-xs">{entry.label}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center mx-2">
                    <p className="text-xl">{entry.icon}</p>
                    <p className=" font-sans text-xs">{entry.label}</p>
                  </div>
                ),
              children:
                entry.label !== "Search" ? (
                  <div className="grid grid-cols-3 grid-flow-row">
                    {activeTab !== "2"
                      ? games?.map(
                          ({
                            id,
                            gameProvider,
                            category,
                            name,
                            image,
                            favorite,
                          }: casinoProps) => (
                            <Cards
                              key={id}
                              id={id}
                              makeFavorites={makeFavorites}
                              gameProvider={gameProvider}
                              category={category}
                              name={name}
                              image={image}
                              favorite={favorite}
                            />
                          )
                        )
                      : data?.map(
                          ({
                            id,
                            gameProvider,
                            category,
                            name,
                            image,
                            favorite,
                          }: casinoProps) => (
                            <Cards
                              key={id}
                              id={id}
                              makeFavorites={makeFavorites}
                              gameProvider={gameProvider}
                              category={category}
                              name={name}
                              image={image}
                              favorite={favorite}
                            />
                          )
                        )}
                  </div>
                ) : (
                  <SearchGames data={data} makeFavorites={makeFavorites} />
                ),
            };
          })}
        />
      </div>
    </>
  );
};

export default CasinoLive;
