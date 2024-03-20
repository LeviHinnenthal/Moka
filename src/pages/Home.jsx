import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Faq from "../components/Faq";
import ProductosInicio from "../components/ProductosInicio";
import Protagonistas from "../components/Protagonistas";
import Envios from "../components/Envios";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductosInicio />
      <About />
      <Protagonistas />
      <Envios />
      <Faq />
    </>
  );
};

export default Home;
