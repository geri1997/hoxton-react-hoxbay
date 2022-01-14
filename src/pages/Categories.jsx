import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { randColour } from "../components/Header";

const Categories = ({categories}) => {

    document.title='Categories - Hoxbay'
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/categories/")
//       .then((resp) => resp.json())
//       .then((cat) => {
//         setCategories((previousCat) => (previousCat = cat));
//       });
//   }, []);
  return (
    <section className="categories-container main-wrapper">
      <ul className="categories-container__list">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link
                style={{ backgroundColor: randColour() }}
                to={"/categories/" + category.id}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
