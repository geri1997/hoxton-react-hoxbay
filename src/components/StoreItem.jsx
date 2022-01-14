import React from "react";
import { Link } from "react-router-dom";

const StoreItem = ({product}) => {
  return (
    <>
      <li>
        <Link to={"/products/" + product.id}>
          <article className="product-item">
            <img src={product.image} alt={product.description} />
            <h3>{product.title}</h3>
          </article>
        </Link>
      </li>
    </>
  );
};

export default StoreItem;
