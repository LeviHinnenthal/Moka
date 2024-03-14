// ViewProducts.jsx

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useProducts } from '../api/useProducts'; // Importa la función que maneja la lógica de los productos
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ViewProducts = () => {
  const { products, loading, setSearchTerm, setCategoryFilter, fetchData } = useProducts(); // Utiliza la función useProducts para obtener los productos y otras funciones relacionadas
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: "",
  });

  useEffect(() => {
    // Aquí se puede realizar cualquier lógica que necesite ejecutarse cuando cambie la lista de productos
  }, [products]); // Renderizar de nuevo cuando cambie la lista de productos

  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setEditedProduct({
      name: product.name,
      description: product.description,
      price: product.price,
      imageURL: product.imageURL,
    });
  };

  const handleSave = async (id, updatedProduct) => {
    // Implementa lógica para guardar el producto editado
    console.log('Save product:', id, updatedProduct);
    // Actualizar producto en Firebase
    try {
      const productRef = doc(db, 'products', id);
      await updateDoc(productRef, updatedProduct);
      console.log('Producto actualizado en Firebase');
      // Refetching para actualizar los datos
      fetchData();
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
    setEditingProductId(null);
  };

  const handleDelete = async (id) => {
    // Implementa lógica para eliminar el producto
    console.log('Delete product:', id);
    // Eliminar producto de Firebase
    try {
      await deleteDoc(doc(db, 'products', id));
      console.log('Producto eliminado de Firebase');
      // Refetching para actualizar los datos
      fetchData();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="grid grid-cols-4 gap-4 w-fit">
      {loading ? (
        <div>Cargando productos...</div>
      ) : (
        products.map(product => (
          <div key={product.id} className="border p-4 rounded-xl">
            <img src={product.imageURL} alt={product.name} className="rounded-lg  mb-4" />
            {editingProductId === product.id ? (
              <>
                <input type="text" name="name" value={editedProduct.name} onChange={handleChange} className="border-2 rounded-md p-2 w-full mb-4" />
                <textarea name="description" value={editedProduct.description} onChange={handleChange} className="border-2 rounded-md p-2 w-full mb-4" />
                <input type="number" name="price" value={editedProduct.price} onChange={handleChange} className="border-2 rounded-md p-2 w-full mb-4" />
              </>
            ) : (
              <>
                <div className="font-bold mb-2">{product.name}</div>
                <div className="text-gray-700 mb-2">{product.description}</div>
                <div className="font-bold mb-2">${product.price}</div>
              </>
            )}
            <div className="flex justify-between">
              {editingProductId === product.id ? (
                <button onClick={() => handleSave(product.id, editedProduct)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  <FontAwesomeIcon icon={faSave} /> Guardar
                </button>
              ) : (
                <>
                  <button onClick={() => handleEdit(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faEdit} /> Editar
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faTrash} /> Eliminar
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewProducts;
