import React, { useState } from "react";

var initialBucket = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function Bucket() {
  const [BucketItems, setBucketItems] = useState(initialBucket);

  function handleToggleItems(id, nextSeen) {
    const findBucket = BucketItems.map((item) => {
      if (item.id === id) {
        return { ...item, seen: nextSeen };
      } else {
        return { ...item, seen: false };
      }
    });
    setBucketItems(findBucket);
  }

  // second method
  //   function handleToggleItems(id, nextSeen) {
  //     setBucketItems((draft) => {
  //       const artwork = draft.find((item) => item.id === id);
  //       artwork.seen = nextSeen;
  //       return draft;
  //     });
  //   }

  return (
    <div className="bucket">
      <h1>Art Bucket List</h1>
      <p>My list of art to see:</p>
      <div className="bucket_list">
        <ItemList artwork={BucketItems} onToggle={handleToggleItems} />
      </div>
    </div>
  );
}

function ItemList({ artwork, onToggle }) {
  return (
    <>
      {artwork?.map((Item) => {
        return (
          <ul key={Item.id}>
            <li>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={Item.seen}
                  onClick={(e) => {
                    onToggle(Item.id, e.target.checked);
                  }}
                />
                {Item.title}
              </label>
            </li>
          </ul>
        );
      })}
    </>
  );
}
