import React from "react";
import ProductosSlider from "./ProductosSlider";

const ProductosInicio = () => {


  return (
    <div id="productos" className="container mx-auto px-6 md:px-16 bg-white -mt-1">
      <section className="py-14  mx-auto">
        <div
          className="section-title-group max-w-[540px] mx-auto px-4 lg:px0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="h2 section-title">
            Productos <span className="text-primary-200">.</span>
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
