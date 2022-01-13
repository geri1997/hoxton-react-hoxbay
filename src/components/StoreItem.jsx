import React from "react";

const StoreItem = ({product}) => {
  return (
    <>
      <li>
        <a href="/products/1">
          <article className="product-item">
            <img src={product.image} alt={product.description} />
            <h3>{product.title}</h3>
          </article>
        </a>
      </li>
    </>
  );
};

export default StoreItem;
