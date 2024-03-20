// useProducts.js

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const useProducts = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Extraer todas las categorías únicas de los productos
      const uniqueCategories = [
        ...new Set(productsData.flatMap((product) => product.etiquetas)),
      ];

      // Actualizar el estado de categories con las categorías únicas
      setCategories(uniqueCategories);

      setProducts(productsData);
      console.log("Productos actualizados:", productsData);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const applyFilters = () => {
    let filteredProducts = [...products];

    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (categoryFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.etiquetas.some(
          (etiqueta) => etiqueta.toLowerCase() === categoryFilter.toLowerCase()
        )
      );
    }

    return filteredProducts;
  };

  return {
    categories,
    products: applyFilters(),
    setSearchTerm,
    setCategoryFilter,
    fetchData,
    addProduct,
    loading,
  };
};
