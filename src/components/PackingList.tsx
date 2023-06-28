import React from "react";

// Item object interface
interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface PackingListProps {
  items: Item[];
  onRemoveItems: (id: number) => void;
  onCheck: (id: number) => void;
}

// ITEM LIST
const PackingList: React.FC<PackingListProps> = ({
  items,
  onRemoveItems,
  onCheck,
}): JSX.Element => {
  return (
    <div className="list">
      <ul>
        {items.map((item: Item) => {
          // passing item object to create individual Item
          return (
            <Item
              item={item}
              key={item.id}
              onCheck={onCheck}
              onRemoveItems={onRemoveItems}
            />
          );
        })}
      </ul>
    </div>
  );
};

// ITEM

interface ItemProps {
  item: Item;
  onRemoveItems: (id: number) => void;
  onCheck: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({
  item,
  onRemoveItems,
  onCheck,
}): JSX.Element => {
  // Remove click handler
  function handleRemoveClick() {
    onRemoveItems(item.id);
  }

  // check handler
  function handleCheck() {
    onCheck(item.id);
  }

  // Completed Item Styling
  const itemStyle = {
    textDecoration: item.packed ? "line-through" : "none",
  };
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handleCheck} />
      <span style={itemStyle}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleRemoveClick}>❌</button>
    </li>
  );
};

export default PackingList;
