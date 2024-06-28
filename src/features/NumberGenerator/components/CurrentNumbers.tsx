// src/features/NumberGenerator/components/CurrentNumbers.tsx

import { LotteryNumber } from "../types/LotteryNumber";
import { getColor } from "../utils/getColor";
import { LotteryBall } from "./LotteryBall";

interface CurrentNumbersProps {
  numbers: LotteryNumber[];
}

/**
 * CurrentNumbers component.
 * Renders the current set of generated lottery numbers.
 */
export const CurrentNumbers: React.FC<CurrentNumbersProps> = ({ numbers }) => {
  return (
    <div className="flex m-8">
      {numbers.map((number) => (
        <LotteryBall
          key={number.id}
          value={number.value}
          color={getColor(number.value)}
          size="L"
        />
      ))}
    </div>
  );
};
