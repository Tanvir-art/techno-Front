import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 h-max text-white">
      <div className="flex justify-between bg-[#f97c39] flex-1 ">
        <div className="flex flex-col justify-center gap-4 items-center mx-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Bang & Olufsen Smart Speaker</h2>
          <p className="text-xl md:text-2xl">
            Wireless Connection With Computer, Laptop & TV
          </p>
        </div>
        <div className="py-20 mr-4 flex justify-center items-center">
          <img src="images/slider4.webp" alt="" />
        </div>
      </div>

      <div className="flex flex-row md:flex-col gap-6 flex-1">
        <div className="bgImg flex flex-col justify-center w-full">
          <p className="text-xl ml-4">Sparing Sales Coming</p>
          <h2 className="text-2xl font-bold ml-4">Smart Phone With Touch</h2>
        </div>

        <div className="bgImgOne flex flex-col justify-center w-full">
          <p className="text-xl ml-4">Sparing Sales Coming</p>
          <h2 className="text-2xl font-bold ml-4">Smart Phone With Touch</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
