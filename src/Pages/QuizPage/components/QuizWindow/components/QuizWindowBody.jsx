import { useQuizContext } from "../../../../../contexts/QuizContext";
import { QuizReducerActionTypes } from "../../../../../reducers/QuizReducer";

/*
1. when someone visits previous question then disable all the options
2. mark the selected option with some background color
*/
const QuizWindowBody = () => {
  const { state, dispatch } = useQuizContext();
  return (
    <div className="px-4 py-8">
      <h4 className="text-xl font-medium text-gray-200 mb-6 first-letter:capitalize">
        {state?.questions?.[state?.currentQuestion]?.question}
      </h4>
      <div className="flex flex-col gap-2">
        {state?.questions?.[state?.currentQuestion]?.options?.map(
          (option, index) => (
            <>
              <input
                type="radio"
                key={index}
                name="quizoption"
                className="peer appearance-none"
                id={option}
                hidden
                checked={state?.selectedOption == option}
                value={option}
                disabled={state?.selectedOption !== ""}
                onChange={(e) =>
                  dispatch({
                    type: QuizReducerActionTypes.SET_SELECTED_OPTION,
                    payload: e.currentTarget.nextElementSibling?.innerText,
                  })
                }
              />
              {/* first condition checks whether the user has selected a correct option or not and then notify them through appropriate color. initially it verifies wheather the current option exists in selectedOption and then compares correct answer with selected option and sets green or red depending on correctness */}
              <label
                key={option}
                htmlFor={option}
                className={`w-full p-2 transition-colors duration-200 cursor-pointer peer-disabled:cursor-not-allowed bg-gray-800 ${
                  state?.selectedOption.includes(option)
                    ? state?.selectedOption.trim() ==
                      state?.questions[state?.currentQuestion]?.correctAnswer
                      ? "bg-green-600"
                      : "bg-red-600"
                    : "bg-gray-800"
                }
              // this condition sets green / correct mark upon the correct answer when user selects different one. first condition omits preselection of correct option while rendering, after that if the current option isn't set to selected option however that is the correct option only then it will be marked as green / correct  
              ${
                state?.selectedOption !== "" &&
                !state?.selectedOption.includes(option) &&
                option ===
                  state?.questions[state?.currentQuestion]?.correctAnswer &&
                "bg-green-600"
              }

              ${
                state?.previousPosition > state?.currentQuestion &&
                state?.userAnswers[state?.currentQuestion] === option &&
                "bg-purple-600"
              }
              `}
              >
                {option}
              </label>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default QuizWindowBody;
