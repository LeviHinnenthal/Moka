import React, { useState } from "react";
import { useProducts } from "../api/useProducts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "../ProductosSlider.css";
import { Navigation, Pagination, FreeMode } from "swiper/modules";

import cat1 from "../assets/Img/cat1.png";
import cat2 from "../assets/Img/cat2.png";
import cat3 from "../assets/Img/cat3.png";
import cat4 from "../assets/Img/cat4.png";
import cart from "../assets/Img/cartLine.svg";
import arrowDown from "../assets/Img/arrowDown.svg";
import { useParams } from "react-router-dom";
import useCartStore from "../utils/cartStore";
import { toast } from "react-toastify";

const ProductosSlider = () => {
  const { categories, products, setSearchTerm, setCategoryFilter, loading } =
    useProducts();
  const { category } = useParams();
  const [catState, setCatState] = useState(false);
  const [catId, setCatId] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Producto agregado al carrito");
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        <div className="categoryHome" data="todos">
          <div className="imgContainer overflow-hidden relative rounded-[30px]">
            <img className="w-full h-full" src={cat1} alt="Categoría 1" />
            <div
              onClick={() => {
                {
                  catId == "todos" && catState
                    ? setCatState(false)
                    : setCatState(true);
                }
                setCatId("todos");
              }}
              className="viewMore bg-white w-fit px-4 py-2 absolute bottom-6 left-2/4 cursor-pointer items-center -translate-x-2/4 rounded-[50px] flex"
            >
              <p className="text-[#51534A]">
                {" "}
                {catId == "todos" && catState ? "Ocultar" : "Ver más"}
              </p>
              <img
                src={arrowDown}
                alt="Arrow down"
                className={`${
                  catId == "todos" && catState ? "rotate-0" : "rotate-180"
                } w-4 ml-2 transition-all`}
              />
            </div>
          </div>
        </div>

        <div className="categoryHome" data="desayunos">
          <div className="imgContainer relative overflow-hidden rounded-[30px]">
            <img className="w-full h-full" src={cat2} alt="Categoría 1" />
            <div
              onClick={() => {
                {
                  catId == "desayunos" && catState
                    ? setCatState(false)
                    : setCatState(true);
                }
                setCatId("desayunos");
              }}
              className="viewMore bg-white w-fit px-4 py-2 absolute bottom-6 left-2/4 cursor-pointer items-center -translate-x-2/4 rounded-[50px] flex"
            >
              <p className="text-[#51534A]">
                {" "}
                {catId == "desayunos" && catState ? "Ocultar" : "Ver más"}
              </p>
              <img
                src={arrowDown}
                alt="Arrow down"
                className={`${
                  catId == "desayunos" && catState ? "rotate-0" : "rotate-180"
                } w-4 ml-2 transition-all`}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-[#F5DDC3] w-[90vw] mt-10 rounded-[30px] grid grid-cols-3 gap-10 transition-all container ${
          catState ? "h-auto  p-10 " : "h-0 p-0"
        }`}
      >
        {products
          .filter((product) =>
            product.etiquetas.some((etiqueta) => etiqueta === catId)
          )
          .map((product, id) => (
            <div
              key={id}
              className="productBar rounded-[30px] bg-white overflow-hidden"
            >
              <Swiper
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="ProductosSlider"
              >
                {product.imageURL.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img src={url} alt={`Product ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="px-6 pt-4 text-xl text-[#51534A]">{product.name}</p>
              <div
                onClick={() => handleAddToCart(product)}
                className="buttonAdd cursor-pointer flex justify-between rounded-[30px] text-white text-xl px-6 py-4 m-6 mt-2 bg-[#6ECEB2]"
              >
                Agregar por ${product.price}
                <img className="w-6" src={cart} alt="Cart icon" />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductosSlider;
