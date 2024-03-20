import React, { useState } from "react";
import { useProducts } from "../api/useProducts";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "../ProductosSlider.css";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import useCartStore from "../utils/cartStore";
import { toast } from "react-toastify";

const ProductoDetallePage = () => {
  const { slug } = useParams();
  const { products } = useProducts();
  const product = products.find((product) => product.id === slug);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => {
      const newQuantity = increment
        ? prevQuantity + 1
        : Math.max(prevQuantity - 1, 1);
      return newQuantity;
    });
  };

  const addToCart = (productToAdd, qtyToAdd) => {
    useCartStore.setState((state) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === productToAdd.id
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === productToAdd.id
              ? { product: item.product, quantity: item.quantity + qtyToAdd }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { product: productToAdd, quantity: qtyToAdd }],
        };
      }
    });
    console.log(
      `Agregado al carrito: ${productToAdd.name} - Cantidad: ${qtyToAdd}`
    );
    // Mostrar toaster de agregado al carrito
    toast.success("Agregado a carrito");
  };

  if (!product) return <div>Producto no encontrado</div>;

  const productsRecommended = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-4 mb-4 justify-between">
        <button onClick={goBack} className="text-blue-500 w-full text-left">
          Volver
        </button>
        <div className="swiper-container w-full h-[60vh] md:h-auto md:w-[50%]">
          <Swiper navigation={true} pagination={true} className="main-swiper">
            {product.imageURL.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <img src={image} alt={`Product Image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-[45%]">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold mb-2">${product.price}</p>
          <div className="flex items-center mb-2">
            <button
              onClick={() => handleQuantityChange(false)}
              className="border border-gray-400 rounded-full px-3 py-1"
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(true)}
              className="border border-gray-400 rounded-full px-3 py-1"
            >
              +
            </button>
          </div>
          <button
            onClick={() => addToCart(product, quantity)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <h3 className="text-lg font-bold mt-20 mb-2">Productos Recomendados</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsRecommended.map((recommendedProduct) => (
          <div key={recommendedProduct.id}>
            <img
              src={recommendedProduct.imageURL[0]} // Utiliza la primera imagen como muestra
              alt={recommendedProduct.name}
              className="w-full h-100 object-cover rounded"
            />
            <div className="mt-2">
              <p className="text-sm font-bold">{recommendedProduct.name}</p>
              <p className="text-sm">{recommendedProduct.description}</p>
              <p className="text-sm font-bold">${recommendedProduct.price}</p>
              <button
                onClick={() => addToCart(recommendedProduct, 1)}
                className="bg-blue-500 text-white font-bold py-1 px-2 rounded"
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductoDetallePage;
