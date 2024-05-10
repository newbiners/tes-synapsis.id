import { FaArrowLeft, FaArrowRight, FaDumbbell } from "react-icons/fa";
import { useState } from "react";
const Pagination: React.FC<{
    numAct: number;
    dataLength: number
}> = ({numAct, dataLength}) => {
  const styleBtn = (idx: number) => {
    if (numAct == idx) {
      return "bg-violet-700 text-white w-10 h-10";
    } else {
      return "bg-gray-200 text-slate-500 w-7 h-7";
    }
  };
  return (
    <main className="h-10 flex items-center justify-center gap-14">
      <FaArrowLeft />
      <nav className="flex items-center justify-between w-96">
          {Array.from({ length: dataLength }, (_, idx) => {
          if (idx >= numAct - 1 && idx < numAct + 7) {
            return (
              <button
                key={idx}
                className={`mx-1 rounded-full ${styleBtn(idx)}`}
              >
                {idx + 1}
              </button>
            );
          }
          return null;
        })}
      </nav>
      <FaArrowRight />
    </main>
  );
};

export default Pagination;
