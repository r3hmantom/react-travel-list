import React, { useState } from "react";
import { Form, Logo, PackingList, Stats } from "./components";

// Item object interface
interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const App: React.FC = (): JSX.Element => {
  // Item[] = array of item objects
  const [items, setItems] = useState<Item[]>([]);

  // Stats
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed == true).length;

  // handleAddItems function
  function handleAddItems(item: Item): void {
    setItems((items: Item[]) => [...items, item]);
  }
  // handleRemoveItems function
  function handleRemoveItems(id: number): void {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // handleCheck function
  function handleCheck(id: number): void {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );

    // original item array
    // filter which one is clicked based on id
    // if id true change packed to !packed
    // else
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onCheck={handleCheck}
        onRemoveItems={handleRemoveItems}
      />
      <Stats totalItems={totalItems} packedItems={packedItems} />
    </div>
  );
};

export default App;
