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

  // handleAddItems function
  function handleAddItems(item: Item): void {
    setItems((items: Item[]) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

export default App;
