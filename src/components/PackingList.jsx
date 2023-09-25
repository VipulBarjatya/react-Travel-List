import React from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 12, packed: false },
  { id: 2, description: "Bacgpack", quantity: 12, packed: false },
  { id: 2, description: "Camera", quantity: 12, packed: false },
  { id: 2, description: "Cap", quantity: 12, packed: false },
];

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item, index) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
