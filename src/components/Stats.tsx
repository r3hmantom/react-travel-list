import React from "react";

interface StatsProps {
  totalItems: Number;
  packedItems: Number;
}

const Stats: React.FC<StatsProps> = ({
  totalItems,
  packedItems,
}): JSX.Element => {
  const percentage = Math.round(
    ((packedItems as number) / (totalItems as number)) * 100
  );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
