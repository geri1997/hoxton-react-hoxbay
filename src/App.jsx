import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((resp) => resp.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, []);
  return (
    <>
      <Header />

      <main>
        {
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            {/* <Route path="/categories" element={<Categories />}/> */}
            {/* <Route path="/basket" element={<Basket />}/> */}
            {/* <Route path="/" element={<Home />}/> */}
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
