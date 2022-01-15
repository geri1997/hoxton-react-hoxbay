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
  if(singleProduct) document.title = singleProduct.title + " - Hoxbay"

  if(!singleProduct){
    document.title = "Product not Found - Hoxbay"
    return <h2 style={{textAlign:'center'}}>Product not Found</h2>
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

        
          <button onClick={() => user?addToBasket(singleProduct,setUser,user):setModal('login')}>
          {user?<Link to="/basket"> Add to basket</Link>:'Add to basket'}
          </button>
        
      </div>
    </section>
  )}

  return <h2 style={{textAlign:'center'}}>Loading</h2>
};

export default SingleProduct;
