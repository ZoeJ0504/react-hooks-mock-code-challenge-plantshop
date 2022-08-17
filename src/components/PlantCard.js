import React from "react";

function PlantCard({ name, image, price }) {
  function handleOnCLick(event) {
    return (event.target.textContent === "In Stock" ? event.target.textContent = "Out of Stock" : event.target.textContent = "In Stock")
  }
  const source = { image } === undefined ? "https://via.placeholder.com/400" : image
  return (
    <li className="card">
      <img src={source} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button onClick={handleOnCLick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
