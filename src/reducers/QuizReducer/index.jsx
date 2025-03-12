/* Definition of properties of INITIAL_STATE_QUIZ_REDUCER
timeLeft: timer
questions: an array all the questions along with its options, correct answers fetched from server
userAnswers: an array that contains all the responses submitted by the user in a single session
*/
export const INITIAL_STATE_QUIZ_REDUCER = {
  timeLeft: 30,
  questions: [],
  userAnswers: [],
  currentQuestion: 0,
  totalQuestions: 0,
  score: 0,
  selectedOption: "",
};

export const QuizReducerActionTypes = {
  PLAY_AGAIN: "PLAY_AGAIN",
  RESET_TIMER: "RESET_TIMER",
  DECREMENT_TIMER: "DECREMENT_TIMER",
  SET_QUIZ_CATEGORY: "SET_QUIZ_CATEGORY",
  SET_QUESTIONS: "SET_QUESTIONS",
  SET_CURRENT_QUESTION: "SET_CURRENT_QUESTION",
  MOVE_TO_NEXT_QUESTION: "MOVE_TO_NEXT_QUESTION",
  BACK_TO_PREVIOUS_QUESTION: "BACK_TO_PREVIOUS_QUESTION",
  SET_TOTAL_QUESTIONS: "SET_TOTAL_QUESTIONS",
  SET_SCORE: "SET_SCORE",
  SET_SELECTED_OPTION: "SET_SELECTED_OPTION",
};

export const quizReducer = (state, action) => {
  switch (action?.type) {
    /* this case updates questions and totalQuestions state via values received in payload */
    case QuizReducerActionTypes.SET_QUESTIONS:
      return {
        ...state,
        totalQuestions: action?.payload?.length,
        questions: action?.payload,
      };

    case QuizReducerActionTypes.SET_SELECTED_OPTION:
      /* this case updates selectedOption, score and userAnswers state with payload value */
      return {
        ...state,
        selectedOption: action.payload,
        userAnswers: state.userAnswers
          ? [...state?.userAnswers, action.payload]
          : state,
        score:
          action.payload ===
          state?.questions[state?.currentQuestion]?.correctAnswer
            ? state?.score + 1
            : state?.score + 0,
      };

    case QuizReducerActionTypes.MOVE_TO_NEXT_QUESTION:
      /* this case updates selectedOption, timeLeft and currentQuestion */
      return {
        ...state,
        selectedOption: "",
        timeLeft: 30,
        currentQuestion:
          state?.currentQuestion < state?.totalQuestions - 1 &&
          state.currentQuestion + 1,
      };

    case QuizReducerActionTypes.BACK_TO_PREVIOUS_QUESTION:
      return {
        ...state,
        selectedOption: "",
        timeLeft: 30,
        previousPosition: state?.currentQuestion,
        currentQuestion:
          state?.currentQuestion > 0 && state.currentQuestion - 1,
      };

    case QuizReducerActionTypes.DECREMENT_TIMER:
      return {
        ...state,
        timeLeft: state?.timeLeft !== 0 ? state?.timeLeft - 1 : 30,
      };
    case QuizReducerActionTypes.PLAY_AGAIN:
      return INITIAL_STATE_QUIZ_REDUCER;
  }
};
