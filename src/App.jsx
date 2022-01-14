import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((resp) => resp.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/categories/")
      .then((resp) => resp.json())
      .then((cat) => {
        setCategories((previousCat) => (previousCat = cat));
      });
  }, []);
  return (
    <>
      <Header />

      <main>
        {
          <Routes>
            {" "}
            <Route path="/" element={<Home products={products} title={'Home'}/>} />
            <Route path="/products" element={<Home products={products} title={'Products'}/>} />
            <Route path="/products/:id" element={<SingleProduct products={products}/>} />
            <Route
              path="/categories"
              element={<Categories categories={categories} />}
            />
            <Route
              path="/categories/:id"
              element={<Category categories={categories} products={products} />}
            />
            {/* <Route path="/" element={<Basket />}/> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        }
        {/* <h2>test</h2>
        {<Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/categories" element={<Categories />} />
            {/* <Route path="/basket" element={<Basket />}/> }
            <Route path="*" element={<NotFound />} />
          </Routes>*/}
      </main>
    </>
  );
}

export default App;
