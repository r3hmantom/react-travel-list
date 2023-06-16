import React from "react";

interface ItemProps {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
}

// ITEM LIST
const PackingList: React.FC = () => {
  const initialItems: ItemProps["item"][] = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ];

  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} />;
        })}
      </ul>
    </div>
  );
};

// ITEM
const Item: React.FC<ItemProps> = ({ item }) => {
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
