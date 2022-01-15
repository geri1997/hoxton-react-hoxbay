export function addToBasket(product, setUser, user) {
    let newUser = JSON.parse(JSON.stringify(user));
    let productIndex = newUser.basket.findIndex((el) => el.id === product.id);
    if (productIndex !== -1 ) {
        newUser.basket[productIndex].amount++;
      } else {
        newUser.basket.push({ ...product, amount: 1 });
      }

  setUser(newUser);
  //update basket on server
  fetch('http://localhost:3000/users/'+ user.id,{
      method:'PUT',
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
  })
}

