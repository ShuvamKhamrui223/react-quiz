import { useEffect } from "react";
import { useQuizContext } from "../../contexts/QuizContext";
import { QuizReducerActionTypes } from "../../reducers/QuizReducer";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();
  useEffect(() => {
    let timer = setInterval(() => {
      dispatch({ type: QuizReducerActionTypes.DECREMENT_TIMER });
    }, 1000);

    // if timer is set to zero and user is on the last question then send them onto result page else move onto next question when timer ends
    if (state?.timeLeft === 0)
      state?.currentQuestion === state?.totalQuestions - 1
        ? navigate("/result", { replace: true })
        : dispatch({ type: QuizReducerActionTypes.MOVE_TO_NEXT_QUESTION });

    return () => clearInterval(timer);
  }, [state?.timeLeft]);
  return (
    <p
      className={`bg-gray-700 ${
        state?.timeLeft >= 10 && state?.timeLeft < 20 && "bg-orange-600"
      } ${
        state?.timeLeft < 10 && "bg-red-600"
      } p-2 text-2xl text-center font-bold`}
    >
      {/* formating the timer value to add a trialing zero in the begining when time becomes single digit */}
      time left {state?.timeLeft < 10 ? `0${state?.timeLeft}` : state?.timeLeft}
    </p>
  );
};

export default Timer;
