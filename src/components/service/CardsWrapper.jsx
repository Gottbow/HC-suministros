import React from "react";
import { CardBox } from "../../components/service/CardsBox";
import { blogs } from "../../data/dataServicios.json";

const CardsWrapper = () => {
    const carouselBlogs = [...blogs]
  return (
    <div className="container my-5">
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          {carouselBlogs.map((blog, index) => (
            <CardBox blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsWrapper;
