import React from "react";
import StoreItem from "../components/StoreItem";

const Home = ({ products,title, setSearchTerm }) => {

  document.title=title + ' - Hoxbay'
  return (
    <>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {products.map((product) => {
            return (
              <StoreItem setSearchTerm={setSearchTerm} key={product.id} product={product}/>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Home;
