import React from "react";

const BasketItem = ({ item, setUser, user }) => {
  return (
    <li>
      <article className="basket-container__item">
        <img src={item.image} alt={item.title} width="90" />
        <p>{item.title}</p>
        <p>
          Qty:
          <select
            onChange={(e) => {
              let itemIndex = user.basket.findIndex((el) => el.id === item.id);
              let newUser = { ...user };
              if (Number(e.target.value) !== 0) {
                newUser.basket[itemIndex].amount = Number(e.target.value);
              } else {
                  newUser.basket.splice(itemIndex,1)
              }

              //change product amount in user basket when changing select value
              setUser(newUser);
              fetch("http://localhost:3000/users/" + user.id, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
              });
            }}
            value={item.amount}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </p>

        <p>Item total: £{(item.price * item.amount).toFixed(2)}</p>
      </article>
    </li>
  );
};

export default BasketItem;
