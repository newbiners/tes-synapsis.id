import { FaArrowLeft, FaArrowRight, FaDumbbell } from "react-icons/fa";
const Pagination: React.FC<{
  numAct: number;
  dataLength: number;
  nextHendler: () => void;
  returnHendler: () => void;
  clickHendler: (idx: number) => void;
}> = ({ numAct, dataLength, nextHendler, returnHendler, clickHendler }) => {
  const styleBtn = (idx: number) => {
    if (numAct == idx) {
      return "bg-violet-700 text-white w-7 h-7 sm:w-10 sm:h-10";
    } else {
      return "bg-gray-200 text-slate-500 w-5 h-5 sm:w-7 sm:h-7";
    }
  };
  return (
    <main className="h-10 flex items-center justify-center gap-14">
      <FaArrowLeft onClick={returnHendler} />
      <nav className="flex items-center justify-between w-96">
        {Array.from({ length: dataLength }, (_, idx) => {
          return (
            <button
              key={idx}
              className={`mx-1 rounded-full text-xs sm:text-sm ${styleBtn(idx)}`}
              onClick={() => clickHendler(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </nav>
      <FaArrowRight onClick={nextHendler} />
    </main>
  );
};

export default Pagination;
