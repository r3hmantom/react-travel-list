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
}

// ITEM LIST
const PackingList: React.FC<PackingListProps> = ({
  items,
  onRemoveItems,
}): JSX.Element => {
  return (
    <div className="list">
      <ul>
        {items.map((item: Item) => {
          // passing item object to create individual Item
          return (
            <Item item={item} key={item.id} onRemoveItems={onRemoveItems} />
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
}

const Item: React.FC<ItemProps> = ({ item, onRemoveItems }): JSX.Element => {
  // Remove click handler
  function handleRemoveClick() {
    onRemoveItems(item.id);
  }

  // Removed Item Styling
  const itemStyle = {
    textDecoration: item.packed ? "line-through" : "none",
  };
  return (
    <li>
      <span style={itemStyle}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleRemoveClick}>❌</button>
    </li>
  );
};

export default PackingList;
