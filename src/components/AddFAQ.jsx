import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProducts } from "../api/useProducts";

const AddFAQ = () => {
  const [faq, setFaq] = useState({
    titulo: "",
    texto: ""
  });
  const [uploading, setUploading] = useState(false);
  const {fetchFaqs} = useProducts(); // Función para actualizar los datos después de agregar una FAQ

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq((prevFaq) => ({
      ...prevFaq,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!faq.titulo || !faq.texto) {
      toast("Por favor, completa todos los campos.");
      return;
    }

    try {
      setUploading(true);

      await addDoc(collection(db, "faq"), faq);

      setFaq({
        titulo: "",
        texto: ""
      });

      setUploading(false);
      toast.success("FAQ agregada exitosamente");
      fetchFaqs(); // Refetch para actualizar los datos
    } catch (error) {
      console.error("Error al agregar la FAQ:", error);
      setUploading(false);
      toast.error("Ocurrió un error al agregar la FAQ. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Agregar FAQ</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="titulo" className="block font-medium mb-1">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={faq.titulo}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="texto" className="block font-medium mb-1">Texto:</label>
          <textarea
            id="texto"
            name="texto"
            value={faq.texto}
            onChange={handleChange}
            required
            className="border-2 rounded-md p-2 w-full"
          />
        </div>
        <button type="submit" disabled={uploading} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          {uploading ? "Subiendo..." : "Agregar FAQ"}
        </button>
      </form>
      <ToastContainer className="top-20" />
    </div>
  );
};

export default AddFAQ;
