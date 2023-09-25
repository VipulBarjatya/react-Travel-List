import React, { useState } from "react";

const Item = ({ item, onDeleteItem, onStatusChange }) => {

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          // console.log(item)
          onStatusChange(item.id)
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
