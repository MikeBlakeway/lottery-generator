// src/features/NumberGenerator/utils/getColor.ts

export type ColorMap = {
  [key: string]: string;
};

// Define a mapping object that links number ranges to gradient background classes.
const colorMap: ColorMap = {
  "1-9": "bg-gradient-grey",
  "10-19": "bg-gradient-blue",
  "20-29": "bg-gradient-pink",
  "30-39": "bg-gradient-green",
  "40-49": "bg-gradient-yellow",
};

/**
 * Determines the background gradient color based on the lottery number value.
 * @param number - The lottery number value.
 * @returns A string representing the TailwindCSS class for the gradient color.
 */
export const getColor = (number: number): string => {
  // Iterate over each range in the colorMap object.
  for (const range in colorMap) {
    // Split the range string into minimum and maximum values and convert them to numbers.
    const [min, max] = range.split("-").map(Number);

    // Check if the number falls within the current range.
    if (number >= min && number <= max) {
      // Return the corresponding gradient class if the number is within the range.
      return colorMap[range];
    }
  }

  // Return a default gradient class if the number does not fall within any defined range.
  return "bg-gradient-grey";
};
