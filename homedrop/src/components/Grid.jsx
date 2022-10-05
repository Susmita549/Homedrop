import React, { useEffect, useState } from "react";
import styles from "./grid.module.css";

const Grid = () => {
  const [product, setProduct] = useState([]);
  const fetchDAta = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setProduct(d);
      });
  };

  const handleFilter = (e) => {
    let category = e.target.value
    if (category === "all") {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((d) => {
          console.log(d);
          setProduct(d);
        });
    }
    //console.log(category)
    else {
       fetch(`https://fakestoreapi.com/products/category/${category}`)
         .then((res) => res.json())
         .then((d) => {
           console.log(d);
           setProduct(d);
         });
   }

  }

  const handleChange = (e) => {

    // function handleClick() {
    //   let box = document.getElementById("search");
    //   let array = fetchData.filter((el) => el.language == box.value);
    //   susmita(array);
    // }
    console.log(e.target.value);
    let category = e.target.value;
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setProduct(d);
      });
  }
  useEffect(() => {
    fetchDAta();
  }, []);
  return (
    <>
      <div className={styles.filter}>
        <div>
          <input type="text" placeholder="Search" onChange={handleChange} />
        </div>
        <div>
          <select>
            <option>Type</option>
          </select>
        </div>
        <div>
          <select onChange={handleFilter}>
            <option value="all">category</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>
        <div>
          <select>
            <option>Brand</option>
          </select>
        </div>
        <div>
          <select>
            <option>Stock Types</option>
          </select>
        </div>
        <div>
          <select>
            <option>Supplier</option>
          </select>
        </div>
        <div>
          <select>
            <option>Tags</option>
          </select>
        </div>
        <div>
          <select>
            <option>Availability</option>
          </select>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {product.map((el) => (
          <div className={styles.gridbody} key={el.id}>
            <div className={styles.image}>
              <img src={el.image} alt="" />
            </div>
            <div className={styles.content}>
              <p>{el.title}</p>
              <p>{el.category}</p>
              <p className={styles.sprice}>
                <s>₹{el.sprice}</s>

                <span> ₹{el.price}</span>
              </p>
              <p className={styles.stock}>{el.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
