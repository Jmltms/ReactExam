import React from "react";
import { Carousel } from "antd";
import img1 from "../../assets/carousel/img1.jpg";
import img2 from "../../assets/carousel/img2.jpg";
import img3 from "../../assets/carousel/img3.jpg";

const Carousels: React.FC = () => {
  const imageArr: string[] = [img1, img2, img3];
  return (
    <>
      <Carousel autoplay speed={200} className="bg-slate-400 mx-2 rounded-lg">
        {imageArr.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={img}
            className=" aspect-video object-cover rounded-lg"
          />
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
