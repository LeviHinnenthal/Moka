import { useState } from "react";
import { useProducts } from "../api/useProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, Pagination } from "swiper/modules";
import cat1 from "../assets/Img/cat1.png";
import cat2 from "../assets/Img/cat2.png";
import cat3 from "../assets/Img/cat3.png";
import cat4 from "../assets/Img/cat4.png";
import cart from "../assets/Img/cartLine.svg";
import arrowDown from "../assets/Img/arrowDown.svg";
import useCartStore from "../utils/cartStore";
import { toast } from "react-toastify";

const ProductosSlider = () => {
  const { products } = useProducts();
  const [catState, setCatState] = useState(false);
  const [catId, setCatId] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Producto agregado al carrito");
    setPopupVisible(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
    setPopupVisible(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="categoryHome" data="todos">
          <div className="imgContainer overflow-hidden relative rounded-2xl sm:rounded-[30px]">
            <img
              className="sm:w-full aspect-auto sm:aspect-auto h-[250px] sm:h-[450px] object-cover"
              src={cat1}
              alt="Categoría 1"
            />
            <div
              onClick={() => {
                catId === "todos" && catState
                  ? setCatState(false)
                  : setCatState(true);
                setCatId("todos");
              }}
              className="viewMore bg-white w-32 sm:w-fit px-4 py-2 absolute bottom-6 left-2/4 cursor-pointer items-center -translate-x-2/4 rounded-[50px] flex"
            >
              <p className="text-[#51534A]">
                {catId === "todos" && catState ? "Ocultar" : "Ver más"}
              </p>
              <img
                src={arrowDown}
                alt="Arrow down"
                className={`${
                  catId === "todos" && catState ? "rotate-0" : "rotate-180"
                } w-4 ml-2 transition-all`}
              />
            </div>
          </div>
        </div>

        <div className="categoryHome" data="desayunos">
          <div className="imgContainer relative overflow-hidden rounded-2xl sm:rounded-[30px]">
            <img
              className="sm:w-full aspect-auto h-[250px] sm:h-[450px] object-cover"
              src={cat2}
              alt="Categoría 2"
            />
            <div
              onClick={() => {
                catId === "desayunos" && catState
                  ? setCatState(false)
                  : setCatState(true);
                setCatId("desayunos");
              }}
              className="viewMore bg-white w-32 sm:w-fit px-4 py-2 absolute bottom-6 left-2/4 cursor-pointer items-center -translate-x-2/4 rounded-[50px] flex"
            >
              <p className="text-[#51534A]">
                {catId === "desayunos" && catState ? "Ocultar" : "Ver más"}
              </p>
              <img
                src={arrowDown}
                alt="Arrow down"
                className={`${
                  catId === "desayunos" && catState ? "rotate-0" : "rotate-180"
                } w-4 ml-2 transition-all`}
              />
            </div>
          </div>
        </div>

        <div className="categoryHome" data="picadas">
          <div className="imgContainer relative overflow-hidden rounded-2xl sm:rounded-[30px]">
            <img
              className="sm:w-full aspect-auto h-[250px] sm:h-[450px] object-cover"
              src={cat3}
              alt="Categoría 3"
            />
            <div
              onClick={() => {
                catId === "picadas" && catState
                  ? setCatState(false)
                  : setCatState(true);
                setCatId("picadas");
              }}
              className="viewMore bg-white w-32 sm:w-fit px-4 py-2 absolute bottom-6 left-2/4 cursor-pointer items-center -translate-x-2/4 rounded-[50px] flex"
            >
              <p className="text-[#51534A]">
                {catId === "picadas" && catState ? "Ocultar" : "Ver más"}
              </p>
              <img
                src={arrowDown}
                alt="Arrow down"
                className={`${
                  catId === "picadas" && catState ? "rotate-0" : "rotate-180"
                } w-4 ml-2 transition-all`}
              />
            </div>
          </div>
        </div>

        <div className="categoryHome" data="fiestas-especiales">
          <div className="imgContainer relative overflow-hidden rounded-2xl sm:rounded-[30px]">
            <img
              className="sm:w-full aspect-auto h-[250px] sm:h-[450px] object-cover"
              src={cat4}
              alt="Categoría 4"
            />
            <div
              onClick={() => {
                catId === "fiestas-especiales" && catState
                  ? setCatState(false)
                  : setCatState(true);
                setCatId("fiestas-especiales");
              }}
              className="viewMore bg-white w-32 sm:w-fit px-4 py-2 absolute bottom-6 left-2/4 cursor-pointer items-center -translate-x-2/4 rounded-[50px] flex"
            >
              <p className="text-[#51534A]">
                {catId === "fiestas-especiales" && catState
                  ? "Ocultar"
                  : "Ver más"}
              </p>
              <img
                src={arrowDown}
                alt="Arrow down"
                className={`${
                  catId === "fiestas-especiales" && catState
                    ? "rotate-0"
                    : "rotate-180"
                } w-4 ml-2 transition-all`}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-[#FEECDD] w-[95] sm:w-[90vw] mt-10 rounded-2xl sm:rounded-[30px] grid grid-cols-1 sm:grid-cols-3 gap-10 transition-all container ${
          catState ? "h-auto p-4  sm:p-10 " : "h-0 p-0"
        }`}
      >
        {products
          .filter(
            (product) =>
              product.etiquetas.some((etiqueta) => etiqueta === catId) &&
              product.active === "1"
          )
          .map((product, id) => (
            <div
              key={id}
              className="productBar rounded-xl sm:rounded-[30px] bg-white overflow-hidden"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.imageURL[0]} alt="Imagen principal" />

              <p className="px-6 pt-4 text-xl text-[#51534A]">{product.name}</p>
              <p className="px-6 pt-4 text-xl text-black">${product.price}</p>
              <div className="buttonAdd cursor-pointer flex justify-center rounded-[30px] text-white text-xl px-6 py-2 m-6 mt-2 bg-[#4E454C]">
                Ver más
                {/* <img className="w-6" src={cart} alt="Cart icon" /> */}
              </div>
            </div>
          ))}
      </div>

      {popupVisible && selectedProduct && (
        <div
          className="backgroundPopup z-10 overflow-scroll bg-black/50 fixed w-screen h-screen top-0 left-0"
          onClick={handleClosePopup}
        >
          <div
            className="popupProduct w-[90vw] sm:w-[80vw] h-fit sm:h-[60vh] bg-[#FEFCF9]/80 top-[5vh] sm:top-[20vh] absolute left-[5vw] sm:left-[10vw] rounded-xl backdrop-blur-md z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 sm:top-4 right-10 sm:right-4 text-gray-600 z-20"
              onClick={handleClosePopup}
            >
              Cerrar
            </button>
            <div className="flex flex-col sm:flex-row justify-center items-center h-full relative">
              <div className="w-full sm:w-1/2 h-3/4 mt-10 sm:mt-0 flex flex-col justify-between">
                <Swiper
                  navigation={true}
                  pagination={true}
                  modules={[Navigation, Pagination]}
                  className="ProductosSlide relative w-[80%] aspect-auto ml-[10%] rounded-lg"
                >
                  {selectedProduct.imageURL.map((url, index) => (
                    <SwiperSlide key={index}>
                      <img src={url} alt={`Product ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-[83%] sm:w-[45%] mr-10% sm:mr-[5%] h-full mt-6 sm:mt-0 flex flex-col justify-center items-start">
                <p className="text-3xl mb-4 text-[#4E454C] font-bold">
                  {selectedProduct.name}
                </p>
                <p className="text-xl font-semibold text-[#4E454C] mb-2">
                  Incluye:
                </p>
                <p className="text-md sm:text-lg text-[#51534A] mb-4">
                  {selectedProduct.description}
                </p>
                <button
                  className="buttonAdd w-full sm:w-auto cursor-pointer flex justify-center rounded-[30px] text-white text-lg px-10 items-center py-2 m-6 mt-6 ml-0 bg-[#4E454C]"
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  <img className="w-4 mr-4" src={cart} alt="" />
                  Agregar por ${selectedProduct.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductosSlider;
