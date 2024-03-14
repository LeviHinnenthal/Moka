import "./App.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoPage from "./components/NoPage";
import Products from "./pages/Products";
import Login from "./components/Login";
import { auth } from "./firebaseConfig";
import Admin from "./pages/Admin";

const App = () => {
  // Recuperar el estado del usuario del almacenamiento local al cargar la aplicación
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });

    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Guardar el estado del usuario en el almacenamiento local cuando cambie
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="mx-auto bg-white overflow-hidden relative">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/login" />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
