import React from "react";
import { useParams } from "react-router-dom";
import StoreItem from "../components/StoreItem";

const Category = ({ products,categories }) => {
  const params = useParams();
  
 
  
  let productsToDisplay = products.filter((product) => {
   return  product.categoryId === Number(params.id);
  });

  document.title = categories.find(cat=>cat.id===Number(params.id)).name + ' - Hoxbay'

  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {productsToDisplay.map((product) => (
          <StoreItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Category;
