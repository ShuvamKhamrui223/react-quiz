import { Link, useNavigate } from "react-router-dom";
import Container from "../../Container";
import { useQuizContext } from "../../contexts/QuizContext";
import { lazy, Suspense } from "react";
import { QuizReducerActionTypes } from "../../reducers/QuizReducer";
const ResultReview = lazy(() => import("./components/ResultReview"));
const ResultPage = () => {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();
  const resetEverything = () => {
    dispatch({ type: QuizReducerActionTypes.PLAY_AGAIN });
    navigate("/");
  };
  return (
    <Container className={"min-h-screen flex flex-col items-center py-[4%]"}>
      <div className="flex flex-col ">
        <h3 className="text-3xl first-letter:uppercase text-gray-300/90">
          you have scored{" "}
          <span className="font-bold text-white">{state?.score}</span> out of{" "}
          <span className="font-bold text-white">{state?.totalQuestions}</span>
        </h3>
        <Link
          onClick={resetEverything}
          className={`w-fit px-3 py-2 mt-4 bg-purple-600 capitalize`}
        >
          play again
        </Link>
      </div>
      <Suspense fallback="Loading your review">
        <ResultReview state={state} />
      </Suspense>
    </Container>
  );
};

export default ResultPage;
