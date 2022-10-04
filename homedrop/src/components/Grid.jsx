import React from "react";
import styles from "./grid.module.css";
let data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
    stock: "In Stock",
  },
];
const Grid = () => {
  return (
    <>
      <div className={styles.filter}>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <select>
            <option>Type</option>
          </select>
        </div>
        <div>
          <select>
            <option>category</option>
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
        {data.map((el) => (
          <div className={styles.gridbody}>
            <div className={styles.image}>
              <img src={el.image} alt="" />
            </div>
            <div className={styles.content}>
              <p>{el.title}</p>
              <p>{el.name}</p>
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
