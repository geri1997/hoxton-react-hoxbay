export function addToBasket(product, setUser) {
    let userToSendToServer={}
  setUser((prevuser) => {
    let newUser = JSON.parse(JSON.stringify(prevuser));
    let productIndex = newUser.basket.findIndex((el) => el.id === product.id);
    if (productIndex !== -1) {
      newUser.basket[productIndex].amount++;
    } else {
      newUser.basket.push({ ...product, amount: 1 });
    }
    userToSendToServer=newUser
    return newUser;
  });
  //update basket on server
  fetch('http://localhost:3000/users/'+ userToSendToServer.id,{
      method:'PUT',
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userToSendToServer),
  })
}

