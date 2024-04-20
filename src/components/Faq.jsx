import Acordion from "./Acordion";


const Faq = () => {
 
  return (
    <div id="preguntas-frecuentes" className="bg-white w-[90%] mx-auto mb-20">
      <h2 className="sm:text-[35px] text-[20px] font-medium text-[#51534A] mt-10 sm:mt-0 mb-4 sm:mb-10">
        Preguntas frecuentes
      </h2>

      <div>
        <Acordion />
      </div>
    </div>
  );
};

export default Faq;
