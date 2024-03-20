import React from "react";
import { useProducts } from "../api/useProducts";

const Filtros = ({ setSearchTerm, setCategoryFilter }) => {
  const { categories } = useProducts();
  console.log(categories);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar producto..."
        onChange={handleSearch}
        className="border p-2 mb-4"
      />
      <h2 className="font-bold mb-2">Categorías</h2>
      <ul>
        {categories.map((category, i) => (
          <li
            onClick={() => handleCategoryFilter(`${category}`)}
            className="cursor-pointer"
          >
            {category}
          </li>
        ))}
        {/* Agrega más categorías según tu necesidad */}
      </ul>
      {/* Agrega los filtros de precio y orden aquí */}
    </div>
  );
};

export default Filtros;
