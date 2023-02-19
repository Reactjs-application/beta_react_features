import React, { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function TravelSnack() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleInputItem(id, e) {
    const updateItems = items.map((val) => {
      if (val.id === id) {
        return { ...val, title: e.target.value };
      } else {
        return val;
      }
    });

    setItems(updateItems);
  }

  return (
    <div>
      <h3>What's your travel snack?</h3>
      <InputItems
        Items={items}
        handlerInput={handleInputItem}
        handleSelect={setSelectedItem}
      />
      <br />
      <p>You picked {selectedItem.title}</p>
    </div>
  );
}

function InputItems({ Items, handlerInput, handleSelect }) {
  return (
    <ul>
      {Items.map((item) => {
        return (
          <li>
            <input
              type="text"
              value={item.title}
              onChange={(e) => handlerInput(item.id, e)}
            />
            <button onClick={() => handleSelect(item)}>choose</button>
          </li>
        );
      })}
    </ul>
  );
}
