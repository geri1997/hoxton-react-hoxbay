import React, { useState } from "react";

const Home = ({ products }) => {
  return (
    <>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {products.map((product) => {
            return (
              <li key={product.id}>
                <a href="/products/1">
                  <article className="product-item">
                    <img
                      src={product.image}
                      alt={product.description}
                    />
                    <h3>{product.title}</h3>
                  </article>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Home;
