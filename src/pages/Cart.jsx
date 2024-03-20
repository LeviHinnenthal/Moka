import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../utils/cartStore";

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
    <div className="flex flex-col md:flex-row items-start justify-center flex-wrap w-[80%] mx-auto">
      <h2 className="w-full text-center text-2xl font-bold my-10">
        Carrito de Compras
      </h2>
      {/* Visualización del carrito */}
      <div className="md:w-1/2 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="max-w-xs rounded overflow-hidden shadow-lg mb-4"
            >
              <img
                className="w-full"
                src={item.product.imageURL}
                alt="Product Image"
              />
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{item.product.name}</p>
                <p className="text-gray-700 text-base">
                  Precio: ${item.quantity * item.product.price}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-700 font-bold py-1 px-3">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Botón Siguiente o mensaje de carrito vacío */}
      {cart.length === 0 ? (
        <p className="md:w-full p-4 text-center">Ups! Parece que no hay ningun producto agregado al carrito.</p>
      ) : (
        <div className="md:w-1/2 p-4 flex justify-end">
          <Link
            to="/checkout"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Siguiente
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
