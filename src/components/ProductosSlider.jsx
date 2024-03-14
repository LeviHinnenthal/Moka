import React from "react";
import { useProducts } from "../api/useProducts";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "../ProductosSlider.css";


import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { useParams } from "react-router-dom";

const ProductosSlider = () => {
  const { categories, products, setSearchTerm, setCategoryFilter, loading } =
    useProducts();
  const { category } = useParams(); // Agrega esta línea para obtener el parámetro de la URL

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={16}
      freeMode={false}
      // navigation={true}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          freeMode: true,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
      modules={[Navigation, FreeMode]}
      className="ProductosSlider"
    >
      {products.map((product) => {
        return (
          <SwiperSlide
            className="max-w-[400px] max-h-[400px] relative"
            key={product.id}
          >
            <img
              className="w-full h-full"
              src={product.imageURL}
              alt={product.imageURL}
            />
            <div className="text-black px-4 py-1 rounded-md">
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>{product.price}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductosSlider;
