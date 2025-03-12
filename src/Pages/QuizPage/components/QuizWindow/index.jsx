import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Timer from "../../../../components/ui/Timer";
import {
  QuizWindowHeader,
  QuizWindowBody,
  QuizWindowFooter,
} from "./components";
import { useQuizContext } from "../../../../contexts/QuizContext";
import { QuizReducerActionTypes } from "../../../../reducers/QuizReducer";
import { useEffect } from "react";
const QuizWindow = () => {
  const { category } = useParams();
  const { dispatch } = useQuizContext();
  const { data, error, isLoading } = useQuery({
    queryKey: ["questions"],
    staleTime: 60 * 3600,
    queryFn: async () => {
      const res = await fetch(`/questions.json`);
      const allquestions = await res.json();
      
      if (allquestions) {
        const questionOfCategory = Object.entries(allquestions).find(
          (d) => d[0] === category
        );
        return questionOfCategory[1];
      }
      return null;
    },
  });
  useEffect(() => {
    data &&
      dispatch({ type: QuizReducerActionTypes.SET_QUESTIONS, payload: data });
  }, [data, dispatch]);
  if (isLoading)
    return (
      <>
        <h1 className="text-2xl uppercase font-mono font-bold animate-ping">
          loading
        </h1>
      </>
    );
  if (error)
    return (
      <>
        <p className="first-letter:uppercase text-center">
          sorry, currently site has ran into some trouble. Retry with some other
          category or visit again after a few time.
        </p>
        <Link
          to={"/"}
          className="p-2 mt-4 capitalize bg-gray-200 text-gray-800"
        >
          back to home
        </Link>
      </>
    );

  return (
    <div className="relative w-full md:w-[50%]  bg-gray-900">
      <Timer />

      {/* quiz container header */}
      <QuizWindowHeader />
      {/* quiz container body */}
      <QuizWindowBody />
      {/* quiz container footer */}
      <QuizWindowFooter />
    </div>
  );
};

export default QuizWindow;
