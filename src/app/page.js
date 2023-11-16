import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Plan from "@/components/Plan";
import React from "react";

const Home = () => {
  return <div>
    <Navbar />
    <Hero />
    <Offers />
    <Plan />
  </div>;
};

export default Home;
