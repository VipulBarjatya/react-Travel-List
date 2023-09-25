import React, { useState } from "react";

const Item = ({ item }) => {
  // const[isPacked,setIsPacked]=useState(false)
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"}:{}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
