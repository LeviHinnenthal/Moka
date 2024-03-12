import "./App.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Products from "./pages/Products";

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  return (
    <div className="mx-auto bg-neutral-500 overflow-hidden relative">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
