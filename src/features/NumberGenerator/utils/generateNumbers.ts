// src/features/NumberGenerator/utils/generateNumbers.ts

import { v4 as uuidv4 } from "uuid";
import { LotteryNumber } from "../types/LotteryNumber";

/**
 * Generates an array of unique lottery numbers.
 * @param length The number of unique lottery numbers to generate.
 * @returns An array of unique lottery numbers.
 */
export const generateNumbers = (length = 6): LotteryNumber[] => {
  // Create a Set to store unique numbers
  const nums = new Set<number>();

  // Generate unique numbers until the Set reaches the desired length
  while (nums.size < length) {
    nums.add(Math.floor(Math.random() * 49) + 1);
  }

  // Sort the numbers in ascending order and map to an array of LotteryNumber objects
  return Array.from(nums)
    .sort((a, b) => a - b)
    .map((value) => ({ id: uuidv4(), value }));
};
