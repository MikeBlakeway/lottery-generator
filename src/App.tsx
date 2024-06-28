import React from "react";
import { NumberGenerator } from "./features/NumberGenerator";

const App: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Lottery Number Generator</h1>
      <NumberGenerator />
    </div>
  );
};

export default App;
