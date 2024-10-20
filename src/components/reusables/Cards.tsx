import React from "react";
import { Card } from "antd";
import { FaRegStar, FaStar } from "react-icons/fa";

interface casinoProps {
  id: number;
  gameProvider: string;
  category: string;
  name: string;
  image: string;
  favorite: boolean;
  makeFavorites: (id: number) => void;
}

const Cards = (props: casinoProps) => {
  return (
    <>
      <div className="px-3 mb-20">
        <div className="relative">
          <div className=" absolute top-1 right-1">
            {props.favorite ? (
              <FaStar
                className=" cursor-pointer text-lg text-yellow-600"
                onClick={() => props.makeFavorites(props.id)}
              />
            ) : (
              <FaRegStar
                className=" cursor-pointer text-lg text-yellow-600"
                onClick={() => props.makeFavorites(props.id)}
              />
            )}
          </div>
          <img
            className="aspect-auto object-contain"
            alt={props.image}
            src={props.image}
          />
          <div className=" absolute bottom-0">
            <p className=" font-sans text-sm text-white">{props.name}</p>
            <p className=" font-sans text-sm text-blue-500">
              {props.gameProvider}
            </p>
            <p className=" font-sans text-xs font-bold text-white">
              {props.category}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
