import { Input, Select } from "antd";
import React, { useState } from "react";
import Cards from "./reusables/Cards";

interface searchGamesProps {
  id: number;
  gameProvider: string;
  category: string;
  name: string;
  image: string;
  favorite: boolean;
}
interface SearchProps {
  data: searchGamesProps[];
  makeFavorites: (id: number) => void;
}
const SearchGames = ({ data, makeFavorites }: SearchProps | any) => {
  const [filterGame, setFilterGame] = useState<searchGamesProps[]>();
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // select options
  const mapProvider = data?.map(
    (entry: searchGamesProps) => entry.gameProvider
  );
  const filterDistinct = mapProvider?.filter(
    (val: any, index: any) => mapProvider?.indexOf(val) === index
  );

  // filtering of game provider
  const filterProvider = (name: string) => {
    const filteredData = data.filter(
      (entry: searchGamesProps) => entry.gameProvider === name
    );
    setFilterGame(filteredData);
  };

  // handle search
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    const findData = data?.filter((entry: searchGamesProps) =>
      entry?.gameProvider.includes(query)
    );
    // setFilterGame(findData);
  };
  return (
    <>
      <div className=" mx-3">
        <div className="">
          <Input placeholder="Search game" onKeyUp={handleSearch} />
          <p>Filter game provider</p>
          <div className=" grid grid-cols-3 grid-flow-row">
            {filterDistinct.map((name: string, index: string) => (
              <p
                key={index}
                className=" cursor-pointer hover:text-blue-700"
                onClick={() => filterProvider(name)}
              >
                {name}
              </p>
            ))}
          </div>
        </div>
        {filterGame?.map(
          ({
            id,
            gameProvider,
            category,
            name,
            image,
            favorite,
          }: searchGamesProps) => (
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
    </>
  );
};

export default SearchGames;
