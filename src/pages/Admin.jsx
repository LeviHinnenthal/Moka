// Admin.jsx

import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AddProduct from "../components/AddProduct";
import ViewProducts from "../components/ViewProducts";
import FAQSAdmin from "../components/FAQSAdmin";
import AddFAQ from "../components/AddFAQ";
import ComentariosAdmin from "../components/ComentariosAdmin";
import AddComentarios from "../components/AddComentarios";
const Admin = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddFAQ, setShowAddFAQ] = useState(false);
  const [showAddComentarios, setShowAddComentarios] = useState(false);

  const handleLogout = () => {
    // Cerrar sesión del usuario
    signOut(auth)
      .then(() => {
        // Limpiar el almacenamiento local
        localStorage.removeItem("user");
        // Redirigir al usuario a la página de inicio o a la página de inicio de sesión
        // Aquí puedes usar Navigate para redirigir a la página que desees
      })
      .catch((error) => {
        // Manejar cualquier error que ocurra al cerrar sesión
        console.error("Error al cerrar sesión:", error);
      });
  };

  const handleAddProductClick = () => {
    setShowAddProduct(true);
  };

  const handleAddFAQClick = () => {
    setShowAddFAQ(true);
  };

  const handleAddFAQClose = () => {
    setShowAddFAQ(false);
  };

  const handleAddComentariosClick = () => {
    setShowAddComentarios(true);
  };

  const handleAddComentariosClose = () => {
    setShowAddComentarios(false);
  };

  const handleAddProductClose = () => {
    setShowAddProduct(false);
  };

  return (
    <div className="flex justify-center my-6 mx-4">
      <div className="w-1/5 bg-gray-100 p-4 rounded mr-4">
        <button
          onClick={handleLogout}
          className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Cerrar sesión
        </button>
        <button
          onClick={handleAddProductClick}
          className="block w-full bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Agregar Producto
        </button>
        {showAddProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-8 rounded-md w-[50%] relative">
              <button
                onClick={handleAddProductClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <AddProduct onClose={handleAddProductClose} />
            </div>
          </div>
        )}

        <button
          onClick={handleAddFAQClick}
          className="block w-full bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Agregar FAQS
        </button>
        {showAddFAQ && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-8 rounded-md w-96 relative">
              <button
                onClick={handleAddFAQClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <AddFAQ onClose={handleAddFAQClose} />
            </div>
          </div>
        )}

        <button
          onClick={handleAddComentariosClick}
          className="block w-full bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Agregar Comentarios
        </button>
        {showAddComentarios && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-8 rounded-md w-96 relative">
              <button
                onClick={handleAddComentariosClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <AddComentarios onClose={handleAddComentariosClose} />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col w-4/5">
        <div className="w-5/5 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Productos</h2>
          <ViewProducts />
        </div>

        <div className="w-5/5 bg-gray-100 p-4 rounded mt-4">
          <h2 className="text-xl font-bold mb-4">FAQS</h2>
          <FAQSAdmin />
        </div>

        <div className="w-5/5 bg-gray-100 p-4 rounded mt-4">
          <h2 className="text-xl font-bold mb-4">Comentarios</h2>
          <ComentariosAdmin />
        </div>
      </div>
    </div>
  );
};

export default Admin;
