import React from "react";

// Item object interface
interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

// ITEM LIST
const PackingList: React.FC<{ items: Item[] }> = ({ items }): JSX.Element => {
  return (
    <div className="list">
      <ul>
        {items.map((item: Item) => {
          // passing item object to create individual Item
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

// ITEM
const Item: React.FC<{ item: any }> = ({ item }): JSX.Element => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default PackingList;
