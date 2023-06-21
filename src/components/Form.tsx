import React, { FormEvent, useState } from "react";

const Form: React.FC = (): JSX.Element => {
  //   description ,quantity state
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [items, setItems] = useState<Array<Object>>([]);

  // handleAddItems function
  function handleAddItems(item: Object): void {
    setItems((items) => [...items, item]);
  }

  //  handleSubmit function
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!description) return;

    // creating new item
    const newItem = {
      description,
      quantity,
      id: Math.random(),
      packed: false,
    };
    handleAddItems(newItem);
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
