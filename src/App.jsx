import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(null);
  const [isWrong, setIsWrong] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  //test navigator.clipboard
  navigator.clipboard.writeText("YOU HAVE BEEN HACKED!");
  

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
  

  let productsToDisplay = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <>
      <Header
      searchTerm={searchTerm}
        setUser={setUser}
        user={user}
        setSearchTerm={setSearchTerm}
        setModal={setModal}
      />
      <Modal
        modal={modal}
        setModal={setModal}
        isWrong={isWrong}
        setIsWrong={setIsWrong}
        setUser={setUser}
      />
      <main>
        {
          <Routes>
            {" "}
            <Route path="/" element={<Navigate replace to="/products" />} />
            <Route
              path="/products"
              element={<Home setSearchTerm={setSearchTerm} products={productsToDisplay} title={"Products"} />}
            />
            <Route
              path="/products/:id"
              element={
                <SingleProduct
                setSearchTerm={setSearchTerm}
                  user={user}
                  setModal={setModal}
                  setUser={setUser}
                  products={products}
                />
              }
            />
            <Route
              path="/categories"
              element={<Categories setSearchTerm={setSearchTerm} categories={categories} />}
            />
            <Route
              path="/categories/:id"
              element={<Category categories={categories} products={productsToDisplay} />}
            />
            <Route
              path="/basket"
              element={
                <Basket setModal={setModal} setUser={setUser} user={user} />
              }
            />
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
