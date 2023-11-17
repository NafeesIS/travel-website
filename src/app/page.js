import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Plan from "@/components/Plan";
import Rooms from "@/components/Rooms";
import React from "react";

const Home = () => {
  return <div>
    <Navbar />
    <Hero />
    <Offers />
    <Plan />
    <Rooms />
    <ImageSlider />
  </div>;
};

export default Home;
