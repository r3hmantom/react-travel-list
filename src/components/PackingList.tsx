import React, { useState } from "react";

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
  onClearItems: () => void;
}

// ITEM LIST
const PackingList: React.FC<PackingListProps> = ({
  items,
  onRemoveItems,
  onCheck,
  onClearItems,
}): JSX.Element => {
  const [sortBy, setSortBy] = useState<string>("input");

  let sortedItems;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item: Item) => {
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

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearItems()}>Clear List</button>
      </div>
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
