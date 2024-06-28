// src/features/NumberGenerator/components/HistoricNumbers.tsx

import { LotteryNumber } from "../types/LotteryNumber";
import { getColor } from "../utils/getColor";
import { LotteryBall } from "./LotteryBall";

interface HistoricNumbersProps {
  history: LotteryNumber[][];
}

/**
 * HistoricNumbers component.
 * Renders the previous sets of generated lottery numbers, excluding the most recent set.
 */
export const HistoricNumbers: React.FC<HistoricNumbersProps> = ({
  history,
}) => {
  // Function to render the history of generated numbers.
  const renderHistory = () => {
    // We only want to display the history if there is more than one set of numbers in the history array.
    if (history.length <= 1) return null;

    // Map over the history array, excluding the most recent set of numbers, and render each set as a row of LotteryBalls.
    return history.slice(0, -1).map((result, index) => (
      <div key={index} className="flex mb-2">
        {result.map((lotteryNumber) => (
          <LotteryBall
            key={lotteryNumber.id}
            value={lotteryNumber.value}
            color={getColor(lotteryNumber.value)}
            size="S"
          />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h3 className="m-8 font-bold">Previous Results</h3>
      {renderHistory()}
    </div>
  );
};
