/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import bgImg from "../../public/bg_img.jpeg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full h-screen">
      <Image
        className="top-0 left-0 w-full h-screen object-cover"
        src={bgImg}
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className="top-0 absolute w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt placeat eveniet fugit sapiente non porro libero omnis,
            distinctio repudiandae.
          </p>
          <button className="bg-white text-black">Reseve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
