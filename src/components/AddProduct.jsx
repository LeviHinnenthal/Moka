import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropzone from "./Dropzone";
import { useProducts } from "../api/useProducts";

const AddProduct = () => {
  const { addProduct } = useProducts(); // Obtener la función addProduct desde useProducts

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: "",
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (imageURL) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      imageURL: imageURL,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.imageURL
    ) {
      toast("Por favor, completa todos los campos y carga una imagen.");
      return;
    }

    try {
      setUploading(true);

      const docRef = await addDoc(collection(db, "products"), product);

      setProduct({
        name: "",
        description: "",
        price: "",
        imageURL: "",
      });

      setUploading(false);
      toast.success("Producto agregado exitosamente");
      addProduct(product); // Llamar a la función addProduct para agregar el nuevo producto
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      setUploading(false);
      toast.error("Ocurrió un error al agregar el producto. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageURL" className="block font-medium mb-1">Imagen URL:</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={product.imageURL}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <button type="submit" disabled={uploading} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          {uploading ? "Subiendo..." : "Agregar Producto"}
        </button>
      </form>
      <ToastContainer className="top-20" />
    </div>
  );
};

export default AddProduct;
