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
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJxuNDa9uBs9UJi3RX9acVd-Z9iCArD26uw&usqp=CAU",
    title: "CADBURY",
    name: "Cadbury Bournvitea",
    price: "100",
    sprice: "150",
  },
];
const Grid = () => {
  return (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
