import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packPercentage = Math.round((numPackedItems / numItems) * 100) ?? 0;

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleItemDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItemStatus(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(updatedItems);
    console.log(id, items, updatedItems);
  }

  function handleClearItemList() {
    if (numItems > 0) {
      const confirmed = window.confirm(
        "Are you Sure you want to remove all items?"
      );

      confirmed && setItems([]);
    } else {
      alert("No items in list!")
    }
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onClearList={handleClearItemList}
        onStatusChange={toggleItemStatus}
        onDeleteItem={handleItemDelete}
        items={items}
      />
      <Stats
        numItems={numItems}
        numPackedItems={numPackedItems}
        packPercentage={packPercentage}
      />
    </div>
  );
}

export default App;
