import React, { useState } from "react";
import Cards from "../components/reusables/Cards";

interface favProps {
  id: number;
  gameProvider: string;
  category: string;
  name: string;
  image: string;
  favorite: boolean;
}
interface FavoriteDataProps {
  data: favProps[];
  makeFavorites: (id: number) => void;
}
const Favorites = ({ data, makeFavorites }: FavoriteDataProps | any) => {
  const filterData = data?.filter((entry: favProps) => entry.favorite);
  const [fav, setFav] = useState(filterData);
  return (
    <>
      {fav?.map(
        ({ id, gameProvider, category, name, image, favorite }: favProps) => (
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
    </>
  );
};

export default Favorites;
