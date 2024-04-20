import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../utils/cartStore";
import CheckoutForm from "../components/CheckoutForm";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // Calcular el total de la compra
  const totalCompra = cart.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  return (
    <div className="flex flex-col sd:flex-row items-start justify-start flex-wrap sm:w-[80%] mx-auto">
      <h2 className="w-full text-center text-2xl font-bold my-10">
        Carrito de Compras
      </h2>
      {/* Visualización del carrito */}
      <div className="w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="w-full p-4 sm:p-0 sm:h-60 overflow-hidden shadow-lg mb-4 bg-white rounded-[30px] flex flex-col sm:flex-row items-center justify-between"
            >
              <img
                className="w-full sm:w-auto sm:h-[80%] sm:ml-6 rounded-xl mb-6 sm:mb-0 sm:rounded-lg"
                src={item.product.imageURL}
                alt="Product Image"
              />
              <div className="info mx-8 w-full">
                <p className="font-bold text-xl mb-2">{item.product.name}</p>
                <p className="font-bold text-md mb-2">
                  {item.product.description}
                </p>
              </div>

              <div className="flex sm:flex-col items-center justify-between bg-[#4E454C] w-full sm:w-auto relative rounded-[30px] mt-4 sm:mt-0 h-14 sm:h-[100%] p-4  sm:px-10">
                <p className="text-transparent hidden sm:flex">.</p>
                <p className="text-white text-base sm:w-36 text-center">
                  Precio: ${item.quantity * item.product.price}
                </p>
                <div className="flex items-center bg-[#A3FFE7] rounded-2xl">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item.product.id, item.quantity - 1);
                      }
                    }}
                    className=" text-[#4E454C] font-bold py-1 px-3"
                  >
                    -
                  </button>
                  <span className=" text-[#4E454C]  font-bold py-1 px-3">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className=" text-[#4E454C] font-bold py-1 px-3"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-[50px] sm:absolute  top-4 right-4"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Botón Siguiente o mensaje de carrito vacío */}
      {cart.length === 0 ? (
        <p className="md:w-full p-4 text-center">
          Ups! Parece que no hay ningun producto agregado al carrito.
        </p>
      ) : (
   
          <CheckoutForm />
        
      )}
    </div>
  );
};

export default Cart;
