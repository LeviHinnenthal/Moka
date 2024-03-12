import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Community from "../components/Community";
import Faq from "../components/Faq";
import ProductosInicio from "../components/ProductosInicio";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductosInicio />
      <About />
      <Pricing />
      <Community />
      <Faq />
    </>
  );
};

export default Home;
