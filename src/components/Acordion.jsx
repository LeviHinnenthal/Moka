import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Acordion = ({ accordions }) => {
  return (
    <Accordion className="w-11/12 mx-auto" variant="splitted" data-aos="fade-up" data-aos-delay="200">
      {accordions.map((accordion, id) => {
        return (
          <AccordionItem
          className="md:mb-2"
            key={id}
            aria-label="Accordion 1"
            title={accordion.question}
          >
            {accordion.answer}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Acordion;
