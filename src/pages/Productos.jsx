import React from 'react';
import Filtros from '../components/Filtros';
import { useProducts } from '../api/useProducts';
import { Link } from 'react-router-dom';

const Productos = () => {
  const { products, setSearchTerm, setCategoryFilter } = useProducts();

  return (
    <div className="flex">
      <div className="w-1/5">
        <Filtros setSearchTerm={setSearchTerm} setCategoryFilter={setCategoryFilter} />
      </div>
      <div className="w-4/5 flex flex-wrap">
        {products.map(product => (
          <div key={product.id} className="w-1/3 p-4">
            <Link to={`/productos/${product.id}`}>
              <img src={product.imageURL} alt={product.name} className="w-full mb-2 rounded-xl" />
              <h3 className="font-bold">{product.name}</h3>
              <p>Precio: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
