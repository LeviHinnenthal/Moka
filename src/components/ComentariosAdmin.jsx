import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ComentariosAdmin = () => {
  const [comentarios, setComentarios] = useState([]);
  const [editingComentarioId, setEditingComentarioId] = useState(null);
  const [editedComentario, setEditedComentario] = useState({
    comentario: "",
    stars: 0,
  });

  const fetchComentarios = async () => {
    try {
      const comentariosCollection = collection(db, "comentarios");
      const comentariosSnapshot = await getDocs(comentariosCollection);
      const comentariosData = comentariosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComentarios(comentariosData);
    } catch (error) {
      console.error("Error al obtener los comentarios:", error);
    }
  };

  useEffect(() => {
    fetchComentarios();
  }, []);

  const handleEdit = (comentario) => {
    setEditingComentarioId(comentario.id);
    setEditedComentario({
      comentario: comentario.comentario,
      stars: comentario.stars,
    });
  };

  const handleSave = async (id, updatedComentario) => {
    try {
      const comentarioRef = doc(db, "comentarios", id);
      await updateDoc(comentarioRef, updatedComentario);
      console.log("Comentario actualizado en Firebase");
      fetchComentarios(); // Refetch para actualizar los datos
    } catch (error) {
      console.error("Error al actualizar el comentario:", error);
    }
    setEditingComentarioId(null);
  };

  const handleDelete = async (id) => {
    try {
      const comentarioRef = doc(db, "comentarios", id);
      await deleteDoc(comentarioRef);
      console.log("Comentario eliminado de Firebase");
      fetchComentarios(); // Refetch para actualizar los datos
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedComentario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto">
      {Object.values(comentarios).map((comentario, index) => (
        <div key={index} className="mb-4">
          <p>{`Comentario: "${comentario.comentario}"`}</p>
          <p>{`Estrellas: ${comentario.stars}`}</p>
          {editingComentarioId === comentario.id ? (
            <>
              <input
                type="text"
                name="comentario"
                value={editedComentario.comentario}
                onChange={handleChange}
                className="rounded-md p-2 w-full mb-4"
              />
              <input
                type="number"
                name="stars"
                value={editedComentario.stars}
                onChange={handleChange}
                className="rounded-md p-2 w-full mb-4"
              />
              <button
                onClick={() => handleSave(comentario.id, editedComentario)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditingComentarioId(null)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleEdit(comentario)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(comentario.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6 ml-2"
              >
                Eliminar
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComentariosAdmin;
