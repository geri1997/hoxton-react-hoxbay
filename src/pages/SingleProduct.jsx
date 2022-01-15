import React from "react";
import { Link, useParams } from "react-router-dom";
import { addToBasket } from "../helpers";

const SingleProduct = ({
  products,
  setUser,
  user,
  setModal,
  setSearchTerm,
}) => {
  const params = useParams();

  let buttonDisabled=false
  if(user&&user.basket.find(
    (prod) =>
      prod.id ===
      products.find((product) => product.id === Number(params.id)).id
  )&&user.basket.find(
    (prod) =>
      prod.id ===
      products.find((product) => product.id === Number(params.id)).id
  ).amount>7){
    buttonDisabled=true
  }else{
    buttonDisabled=false
  }
  //find the product that matches the url param
  if (products.length !== 0) {
    let singleProduct = products.find(
      (product) => product.id === Number(params.id)
    );
    console.log(
      
    );

    //Change page title
    //Ask Nico
    if (singleProduct) document.title = singleProduct.title + " - Hoxbay";

    if (!singleProduct) {
      document.title = "Product not Found - Hoxbay";
      return <h2 style={{ textAlign: "center" }}>Product not Found</h2>;
    }

    return (
      <section className="product-detail main-wrapper">
        <img src={singleProduct.image} alt={singleProduct.title} />
        <div
          className="product-detail__side"
          style={{ borderColor: "var(--yellow)" }}
        >
          <h3 hidden>test</h3>
          <h2>{singleProduct.title}</h2>
          <p>{singleProduct.description}</p>
          <p>£{singleProduct.price}</p>

          {user ? (
            <Link onClick={(e) => setSearchTerm("")} to="/basket">
              <button
                disabled={buttonDisabled}
                className="add-to-cart"
                onClick={(e) => addToBasket(singleProduct, setUser, user)}
              >
                {!buttonDisabled?'Add to basket':'Out of stock'}
              </button>
            </Link>
          ) : (
            <button onClick={(e) => setModal("login")}>Add to basket</button>
          )}
        </div>
      </section>
    );
  }

  return <h2 style={{ textAlign: "center" }}>Loading</h2>;
};

export default SingleProduct;
