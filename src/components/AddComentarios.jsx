import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProducts } from "../api/useProducts";

const AddComentarios = () => {
  const [comentario, setComentario] = useState({
    comentario: "",
    stars: 0
  });
  const [uploading, setUploading] = useState(false);
  const { fetchComentarios } = useProducts(); // Función para actualizar los datos después de agregar un comentario

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComentario((prevComentario) => ({
      ...prevComentario,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comentario.comentario || comentario.stars === 0) {
      toast("Por favor, completa todos los campos.");
      return;
    }

    try {
      setUploading(true);

      await addDoc(collection(db, "comentarios"), comentario);

      setComentario({
        comentario: "",
        stars: 0
      });

      setUploading(false);
      toast.success("Comentario agregado exitosamente");
      fetchComentarios(); // Refetch para actualizar los datos
    } catch (error) {
      console.error("Error al agregar el comentario:", error);
      setUploading(false);
      toast.error("Ocurrió un error al agregar el comentario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Agregar Comentario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="comentario" className="block font-medium mb-1">Comentario:</label>
          <textarea
            id="comentario"
            name="comentario"
            value={comentario.comentario}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stars" className="block font-medium mb-1">Estrellas:</label>
          <input
            type="number"
            id="stars"
            name="stars"
            value={comentario.stars}
            onChange={handleChange}
            min="1"
            max="5"
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <button type="submit" disabled={uploading} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          {uploading ? "Subiendo..." : "Agregar Comentario"}
        </button>
      </form>
      <ToastContainer className="top-20" />
    </div>
  );
};

export default AddComentarios;
