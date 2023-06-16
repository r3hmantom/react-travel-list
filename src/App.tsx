import React from "react";
import { Form, Logo, PackingList, Stats } from "./components";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
