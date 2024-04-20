import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const FAQSAdmin = () => {
  const [faqsFirebase, setFaqsFirebase] = useState([]);
  const [editingFaqId, setEditingFaqId] = useState(null);
  const [editedFaq, setEditedFaq] = useState({
    titulo: "",
    texto: "",
  });

  const fetchData = async () => {
    try {
      const faqCollection = collection(db, "faq");
      const faqSnapshot = await getDocs(faqCollection);
      const faqData = faqSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFaqsFirebase(faqData);
    } catch (error) {
      console.error("Error al obtener las FAQs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (faq) => {
    setEditingFaqId(faq.id);
    setEditedFaq({
      titulo: faq.titulo,
      texto: faq.texto,
    });
  };

  const handleSave = async (id, updatedFaq) => {
    try {
      const faqRef = doc(db, "faq", id);
      await updateDoc(faqRef, updatedFaq);
      console.log("FAQ actualizada en Firebase");
      fetchData(); // Refetch para actualizar los datos
    } catch (error) {
      console.error("Error al actualizar la FAQ:", error);
    }
    setEditingFaqId(null);
  };

  const handleDelete = async (id) => {
    try {
      const faqRef = doc(db, "faq", id);
      await deleteDoc(faqRef);
      console.log("FAQ eliminada de Firebase");
      fetchData(); // Refetch para actualizar los datos
    } catch (error) {
      console.error("Error al eliminar la FAQ:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedFaq((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Accordion className="mx-auto" variant="splitted">
      {faqsFirebase.map((faq, index) => (
        <AccordionItem
          key={index}
          className="md:mb-2"
          aria-label={`Accordion ${index}`}
          title={
            editingFaqId === faq.id ? (
              <input
                type="text"
                name="titulo"
                value={editedFaq.titulo}
                onChange={handleChange}
                className="rounded-md p-2 w-full mb-4"
              />
            ) : (
              faq.titulo
            )
          }
          classNames="bg-[#E2BAB380]"
        >
          {editingFaqId === faq.id ? (
            <textarea
              name="texto"
              value={editedFaq.texto}
              onChange={handleChange}
              className="border-2 rounded-md p-2 w-full mb-4"
            />
          ) : (
            <div className="">{faq.texto}</div>
          )}
          {editingFaqId === faq.id && (
            <>
              <button
                onClick={() => handleSave(faq.id, editedFaq)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditingFaqId(null)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancelar
              </button>
            </>
          )}
          {editingFaqId !== faq.id && (
            <>
              <button
                onClick={() => handleEdit(faq)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(faq.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6 ml-2"
              >
                Eliminar
              </button>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQSAdmin;
