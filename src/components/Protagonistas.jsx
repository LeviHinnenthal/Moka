import {useEffect, useState} from "react";
import protagonistasImage from "../assets/Img/protagonistas.png";
import protagonistasImageM from "../assets/Img/protagonistasM.png";
import protagonista1 from "../assets/Img/protagonista1.png";
import fivestars from "../assets/Img/5stars.png";
import fourstars from "../assets/Img/4stars.png";
import threestars from "../assets/Img/3stars.png";
import twostars from "../assets/Img/2stars.png";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Protagonistas = () => {
  const [comentariosFirebase, setComentariosFirebase] = useState("");
  const fetchData = async () => {
    try {
      const comentarios = collection(db, "comentarios");
      const comentariosSnapshot = await getDocs(comentarios);
      const comentariosData = comentariosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Actualizar el estado de categories con las categorías únicas
      setComentariosFirebase(comentariosData);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative mt-10 sm:mt-10" id="opiniones">
      <img
        className="w-[90%] mx-auto hidden sm:flex"
        src={protagonistasImage}
        alt="Nuestros protagonistas image"
      />
        <img
        className="w-[90%] mx-auto flex sm:hidden"
        src={protagonistasImageM}
        alt="Nuestros protagonistas image"
      />
      <p className="text-white text-lg sm:text-5xl absolute top-6 sm:top-24 left-2/4 -translate-x-2/4">
        Nuestros protagonistas
      </p>

      <Swiper
        navigation={true}
        pagination={false}
        modules={[Navigation, Pagination]}
        className="ProductosSlider absolute sm:mt-10 w-[80%] sm:w-[50%] top-10 sm:top-20 left-2/4 -translate-x-2/4"
      >
        {Object.values(comentariosFirebase).map((protagonista, i) => (
          <SwiperSlide key={i} className="mt-4 sm:mt-20">
            <img
              className="mx-auto mb-2 sm:mb-4 w-20 sm:w-auto"
              src={
                protagonista.stars == 5
                  ? fivestars
                  : protagonista.stars == 4
                  ? fourstars
                  : protagonista.stars == 3
                  ? threestars
                  : twostars
              }
              alt=""
            />
            <p className="text-white text-center text-sm h-[60px] flex content-center justify-center items-center sm:text-2xl w-[70%] mx-auto">
              "{protagonista.comentario}"
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Protagonistas;
