import { createContext, useContext, useEffect, useReducer } from "react";
import {
  INITIAL_STATE_QUIZ_REDUCER,
  quizReducer,
  QuizReducerActionTypes,
} from "../reducers/QuizReducer";

const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, INITIAL_STATE_QUIZ_REDUCER);

  const quizContextValues = { state, dispatch };
  return (
    <QuizContext.Provider value={quizContextValues}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  const newContext = useContext(QuizContext);

  if (newContext === undefined) throw new Error("quiz context not found");
  return newContext;
};

export { QuizContextProvider, useQuizContext };
