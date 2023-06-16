import React from "react";

const Stats: React.FC = (): JSX.Element => {
  return (
    <footer className="stats">
      <em>🎒 You have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
};

export default Stats;
