import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Acordion = () => {
  const [faqsFirebase, setFaqsFirebase] = useState("");
  const fetchData = async () => {
    try {
      const faq = collection(db, "faq");
      const faqSnapshot = await getDocs(faq);
      const faqData = faqSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Actualizar el estado de categories con las categorías únicas
      setFaqsFirebase(faqData);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Accordion
      className="mx-auto"
      variant="splitted"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {Object.values(faqsFirebase).map((pregunta, i) => (
        <AccordionItem
          key={i}
          className="md:mb-2"
          aria-label="Accordion 1"
          title={pregunta.titulo}
          classNames="bg-[#E2BAB380]"
        >
          {pregunta.texto}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Acordion;
