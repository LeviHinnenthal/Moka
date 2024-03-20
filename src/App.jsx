import "./App.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Importar ToastContainer desde react-toastify
import "react-toastify/dist/ReactToastify.css"; // Importar estilos CSS para ToastContainer
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import NoPage from "./components/NoPage";
import Login from "./components/Login";
import { auth } from "./firebaseConfig";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Productos from "./pages/Productos";
import ProductoDetallePage from "./pages/ProductoDetallePage"; // Importa el componente de detalle del producto
import CheckoutForm from "./components/CheckoutForm";


const App = () => {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });

    const unsubscribe = auth.onAuthStateChanged((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="mx-auto overflow-hidden relative bg-[#FEFCF9]">
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/login" />}
          />
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/productos/:slug"
            element={<ProductoDetallePage />}
          />{" "}
          {/* Ruta para el detalle del producto */}
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
