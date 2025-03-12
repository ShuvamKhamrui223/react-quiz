import { useQuizContext } from "../../../../../contexts/QuizContext";

const QuizWindowHeader = () => {
  const { state } = useQuizContext();
  return (
    <div className="grid grid-cols-2 place-items-center">
      {/* badge to display current question out of total questions */}
      <p className="p-2 w-full text-center">{`${
        state?.currentQuestion + 1
      } of ${state?.totalQuestions}`}</p>
      {/* bedge for score */}
      <p className="p-2 w-full text-center bg-fuchsia-900">{`score ${state?.score}`}</p>
    </div>
  );
};

export default QuizWindowHeader;
