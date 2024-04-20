import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const useProducts = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const uniqueCategories = [
        ...new Set(productsData.flatMap((product) => product.etiquetas)),
      ];

      setCategories(uniqueCategories);
      setProducts(productsData);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const faqsCollection = collection(db, "faqs");
      const faqsSnapshot = await getDocs(faqsCollection);
      const faqsData = faqsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFaqs(faqsData);
    } catch (error) {
      console.error("Error al obtener FAQs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComentarios = async () => {
    setLoading(true);
    try {
      const comentariosCollection = collection(db, "comentarios");
      const comentariosSnapshot = await getDocs(comentariosCollection);
      const comentariosData = comentariosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setComentarios(comentariosData);
    } catch (error) {
      console.error("Error al obtener comentarios:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchFaqs();
    fetchComentarios(); // Agregamos la llamada para obtener comentarios
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const addFaq = (newFaq) => {
    setFaqs((prevFaqs) => [...prevFaqs, newFaq]);
  };

  const addComentario = async (newComentario) => {
    try {
      await addDoc(collection(db, "comentarios"), newComentario);
      console.log("Comentario agregado exitosamente");
      fetchComentarios(); // Refetch para actualizar los datos
    } catch (error) {
      console.error("Error al agregar el comentario:", error);
    }
  };

  const applyProductFilters = () => {
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
    products: applyProductFilters(),
    faqs,
    comentarios, // Agregamos comentarios al objeto devuelto
    setSearchTerm,
    setCategoryFilter,
    fetchProducts,
    fetchFaqs,
    fetchComentarios,
    addProduct,
    addFaq,
    addComentario, // Agregamos la función para agregar comentarios
    loading,
  };
};
