import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../../../../../contexts/QuizContext";
import { QuizReducerActionTypes } from "../../../../../reducers/QuizReducer";

const QuizWindowFooter = () => {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();

  // function to move one question backward
  const backToPreviousQuestion = () => {
    dispatch({ type: QuizReducerActionTypes.BACK_TO_PREVIOUS_QUESTION });
  };

  // function to move one question forward when the current question is not the last question, else it will send the user onto result page
  const moveToNextQuestion = () => {
    if (state?.currentQuestion == state?.totalQuestions - 1)
      navigate("/result", { replace: true });

    dispatch({ type: QuizReducerActionTypes.MOVE_TO_NEXT_QUESTION });
  };

  return (
    <div
      className={`mt-5 divide-x divide-gray-900 grid ${
        state?.timeLeft < 15 && state?.selectedOption == ""
          ? "grid-cols-2"
          : "grid-cols-1"
      }  `}
    >
      <button
        onClick={moveToNextQuestion}
        className={`${
          state?.timeLeft < 15 && state?.selectedOption == ""
            ? "block"
            : "hidden"
        } capitalize text-sm bg-gray-200 hover:bg-gray-100 text-gray-700 px-2 py-2 disabled:cursor-not-allowed`}
      >
        skip
      </button>
      {/* next button will be set to disabled when user reach last question or haven't selected any option yet for the paricular question */}
      <button
        disabled={
          state?.currentQuestion == state?.totalQuestions ||
          state?.selectedOption === ""
        }
        onClick={moveToNextQuestion}
        className={`capitalize text-sm w-full bg-gray-200 hover:bg-gray-100 text-gray-700 px-2 py-2 disabled:cursor-not-allowed`}
      >
        {state?.currentQuestion === state?.totalQuestions - 1
          ? "finish"
          : "next"}
      </button>
    </div>
  );
};

export default QuizWindowFooter;
