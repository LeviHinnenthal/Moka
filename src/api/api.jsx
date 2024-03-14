import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = async (category = null) => {
  try {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);

    const productsData = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      productsData.push({
        id: doc.id,
        title: data.title,
        img: data.img,
        price: data.price,
        category: data.category,
      });
    });

    // Filtrar por categoría
    const filteredProducts = category
      ? productsData.filter((product) => product.category === category)
      : productsData;

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Puedes manejar el error aquí o dejar que se propague
  }
};
