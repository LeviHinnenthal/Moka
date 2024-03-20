import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Acordion = () => {
  return (
    <Accordion
      className=" mx-auto"
      variant="splitted"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <AccordionItem
        className="md:mb-2"
        aria-label="Accordion 1"
        title="hola"
        classNames="bg-[#E2BAB380]"
      >
        Hola
      </AccordionItem>
    </Accordion>
  );
};

export default Acordion;
