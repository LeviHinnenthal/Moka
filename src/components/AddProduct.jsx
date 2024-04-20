import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProducts } from "../api/useProducts";

const AddProduct = () => {
  const { addProduct } = useProducts(); // Obtener la función addProduct desde useProducts

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: [""], // Inicializar con un campo vacío por defecto
    etiquetas: [""], // Inicializar con un campo vacío por defecto
    category: "", // Inicializar con un string vacío por defecto
    active: "",
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleArrayFieldChange = (field, index, value) => {
    const newArray = [...product[field]];
    newArray[index] = value.trim(); // Eliminar espacios en blanco al inicio y al final
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: newArray,
    }));
  };

  const handleAddField = (field) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: [...prevProduct[field], ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.category ||
      product.imageURL.some(url => url === "") || // Verificar si hay algún campo de URL vacío
      product.etiquetas.some(tag => tag === "") // Verificar si hay algún campo de etiqueta vacío
    ) {
      toast("Por favor, completa todos los campos y carga al menos una imagen.");
      return;
    }

    try {
      setUploading(true);

      const docRef = await addDoc(collection(db, "products"), {
        ...product,
        // Eliminar las comillas al principio y al final de cada URL
        imageURL: product.imageURL.map(url => url.replace(/^"(.*)"$/, "$1")),
        // Eliminar las comillas al principio y al final de cada etiqueta
        etiquetas: product.etiquetas.map(tag => tag.replace(/^"(.*)"$/, "$1")),
      });

      setProduct({
        name: "",
        description: "",
        price: "",
        imageURLs: [""], // Restablecer a un solo campo vacío después de enviar
        etiquetas: [""], // Restablecer a un solo campo vacío después de enviar
        category: "", // Restablecer a un string vacío después de enviar
        active: "",
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
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
        <div className="mb-4 w-[47%]">
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
        <div className="mb-4 w-[47%]">
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
        <div className="mb-4 w-[47%]">
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
        <div className="mb-4 w-[47%]">
          <label htmlFor="category" className="block font-medium mb-1">Categoría:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4 w-[47%]">
          <label className="block font-medium mb-1">Etiquetas:</label>
          {Object.values(product.etiquetas).map((tag, index) => (
            <input
              key={index}
              type="text"
              value={tag}
              onChange={(e) => handleArrayFieldChange('etiquetas', index, e.target.value)}
              required
              className="border-2 rounded-md p-2 w-full mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => handleAddField('etiquetas')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            +
          </button>
        </div>
        <div className="mb-4 w-[47%]">
          <label className="block font-medium mb-1">Imagen URLs:</label>
          {Object.values(product.imageURL).map((imageURL, index) => (
            <input
              key={index}
              type="text"
              value={imageURL}
              onChange={(e) => handleArrayFieldChange('imageURL', index, e.target.value)}
              required
              className="border-2 rounded-md p-2 w-full mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => handleAddField('imageURL')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            +
          </button>
        </div>
       
        <div className="mb-4 w-[47%]">
          <label htmlFor="active" className="block font-medium mb-1">Activo:</label>
          <input
            type="text"
            id="active"
            name="active"
            value={product.active}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <button type="submit" disabled={uploading} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4">
          {uploading ? "Subiendo..." : "Agregar Producto"}
        </button>
      </form>
      <ToastContainer className="top-20" />
    </div>
  );
};

export default AddProduct;
