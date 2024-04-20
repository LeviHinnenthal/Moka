import React from "react";
import ProductosSlider from "./ProductosSlider";

const ProductosInicio = () => {


  return (
    <div id="productos" className="container w-[90%] min-h-[400px] h-auto mx-auto bg-white">
      <section className="mx-auto">
        <div
          className="sm:mb-8 mb-4 mt-6 sm:mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="sm:text-[35px] text-[20px] font-medium text-[#51534A]">
            Nuestros poductos
          </h2>
        </div>
        <div>
          <ProductosSlider />
        </div>
      </section>
    </div>
  );
};

export default ProductosInicio;
