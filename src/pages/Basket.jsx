import React from "react";
import BasketItem from "../components/BasketItem";

const Basket = ({ user, setUser, setModal }) => {
  document.title='Basket - Hoxbay'
  if (!user)
    return (
      <p style={{textAlign:'center'}}>
        <b style={{ cursor: "pointer" }} onClick={() => setModal("login")}>
          Login
        </b>{" "}
        or{" "}
        <b style={{ cursor: "pointer" }} onClick={() => setModal("sign up")}>
          Sign up
        </b>
      </p>
    );

  if (user)
    return (
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {user.basket.map((item) => (
            <BasketItem user={user} setUser={setUser} key={item.id} item={item} />
          ))}
        </ul>
        <h3>
          Your total: £
          {user.basket
            .reduce((value, item) => {
              return (value += item.price * item.amount);
            }, 0)
            .toFixed(2)}
        </h3>
      </section>
    );
};

export default Basket;
