// src/features/NumberGenerator/NumberGenerator.tsx

import React from "react";
import { Button } from "../../components/Button";
import { CurrentNumbers, HistoricNumbers } from "./components";
import { useNumberGenerator } from "./hooks/useNumberGenerator";

/**
 * NumberGenerator component.
 * Uses the custom hook `useNumberGenerator` to manage state and logic for generating numbers.
 * Renders the current numbers, a button to generate new numbers, and historical numbers if available.
 */
export const NumberGenerator: React.FC = () => {
  const { numbers, history, generateNumbers, error } = useNumberGenerator();

  // Display error message if there was an issue generating numbers
  if (error) {
    return <div className="flex items-center justify-center">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <Button onClick={generateNumbers} content="Generate Numbers" />
      <CurrentNumbers numbers={numbers} />
      <HistoricNumbers history={history} />
    </div>
  );
};
