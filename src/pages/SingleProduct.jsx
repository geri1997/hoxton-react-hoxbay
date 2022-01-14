import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = ({products}) => {
const params = useParams()
let singleProduct = products.find(product=>product.id===Number(params.id))
document.title=singleProduct.title + ' - Hoxbay'

  return (
    <section className="product-detail main-wrapper">
      <img
        src={singleProduct.image}
        alt={singleProduct.title}
      />
      <div className="product-detail__side" style={{borderColor: "var(--yellow)"}}>
        <h3></h3>
        <h2>{singleProduct.title}</h2>
        <p>
        {singleProduct.description}
        </p>
        <p>£{singleProduct.price}</p>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <Link to='/basket'><button>Add to basket</button></Link>
      </div>
    </section>
  );
};

export default SingleProduct;
