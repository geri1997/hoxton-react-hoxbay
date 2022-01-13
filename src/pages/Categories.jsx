import React, { useEffect, useState } from 'react'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/categories/")
      .then((resp) => resp.json())
      .then((cat) => {
        setCategories(previousCat=>previousCat=cat);
      });
        
        
    }, [])
    return (
        <section className="categories-container main-wrapper">
    <ul className="categories-container__list">
      {
          categories.map(category=>{
            <li>
            {<link to="/categories/1">electronics</link>}
            
          </li>
          })
      

      }
    </ul>
  </section>
    )
}

export default Categories
