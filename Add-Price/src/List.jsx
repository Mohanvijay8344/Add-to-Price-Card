import * as React from "react";
import { useState } from "react";

export function List({ arr, item }) {
  const [stock, setStock] = useState(arr.availableStock);

  const availableStock = () => {
    // Decrease the available stock
    setStock(stock - 1);
  };

  return (
      <div className="container">
      <img className="img" src={arr.pic} alt={arr.name} />
      <div className="container2">
        <p className="name">{arr.name}</p>
        <p className="rating">{arr.rating}</p>
        <p className="price">{arr.price}</p>
        <p>Stock Available: {stock}</p>
        {stock > 0 ? (
        <button onClick={() => availableStock()}>Add to Cart</button>
      ) : (
        <p>Out of stock</p>
      )}
      </div>
    </div>
  )
}


