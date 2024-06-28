// src/features/NumberGenerator/hooks/useNumberGenerator.ts

import { useState } from "react";
import { LotteryNumber } from "../types/LotteryNumber";
import { generateNumbers } from "../utils/generateNumbers";

interface UseNumberGeneratorReturn {
  numbers: LotteryNumber[];
  history: LotteryNumber[][];
  error: string | null;
  generateNumbers: () => void;
}

/**
 * Custom hook `useNumberGenerator`.
 * Manages the state and logic for generating and storing lottery numbers.
 * Returns the current numbers, history of generated numbers, any error, and a function to generate new numbers.
 */
export const useNumberGenerator = (): UseNumberGeneratorReturn => {
  const [numbers, setNumbers] = useState<LotteryNumber[]>([]);
  const [history, setHistory] = useState<LotteryNumber[][]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to generate new numbers and update the state.
  const generateNumbersHandler = () => {
    try {
      // Generate a new set of numbers.
      const newNumbers = generateNumbers();

      // Update the state with the new numbers.
      setHistory((prevHistory) => [...prevHistory, newNumbers]);
      setNumbers(newNumbers);
      setError(null);
    } catch (err) {
      setError("Failed to generate numbers.");
    }
  };

  return {
    numbers,
    history,
    error,
    generateNumbers: generateNumbersHandler,
  };
};
