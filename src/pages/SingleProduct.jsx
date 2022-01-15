import React from "react";
import { Link, useParams } from "react-router-dom";
import { addToBasket } from "../helpers";

const SingleProduct = ({ products, setUser, user, setModal }) => {
  const params = useParams();

  //find the product that matches the url param
  if(products.length!==0){let singleProduct = products.find(
    (product) => product.id === Number(params.id)
  );

  //Change page title
  //Ask Nico
  document.title = singleProduct.title + " - Hoxbay"

  //if users basket contains the product, increase the amount, else, add the product to basket
  

  return (
    <section className="product-detail main-wrapper">
      <img src={singleProduct.image} alt={singleProduct.title} />
      <div
        className="product-detail__side"
        style={{ borderColor: "var(--yellow)" }}
      >
        <h3></h3>
        <h2>{singleProduct.title}</h2>
        <p>{singleProduct.description}</p>
        <p>£{singleProduct.price}</p>

        
          <button onClick={() => user?addToBasket(singleProduct,setUser):setModal('login')}>
          {user?<Link to="/basket"> Add to basket</Link>:'Add to basket'}
          </button>
        
      </div>
    </section>
  )}

  return <h2 style={{textAlign:'center'}}>Loading</h2>
};

export default SingleProduct;
