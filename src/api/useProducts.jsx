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
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filteredProducts = filteredProducts.filter(
        (product) => product.title.toLowerCase() === categoryFilter.toLowerCase()
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
