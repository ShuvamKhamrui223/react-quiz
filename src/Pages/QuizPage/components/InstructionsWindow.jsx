import { useNavigate, useParams } from "react-router-dom";
import { useQuizContext } from "../../../contexts/QuizContext";

const InstructionsWindow = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const { state } = useQuizContext();

  const instructions = [
    "for each question, you will have 30 seconds to answer",
    "you have to select one option",
    "in between the quiz session you cannot minimize or switch the active window, else you will be disqualified",
  ];

  const handleAgreement = (e) => {
    e.preventDefault();
    navigate("q");
  };
  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900 py-8 px-4">
        <p className="text-xl first-letter:uppercase">
          quiz for{" "}
          <span className="font-semibold underline underline-offset-4">
            {category}
          </span>{" "}
          category
        </p>
        <ul className="space-y-2">
          {instructions.map((instruction) => (
            <li className="first-letter:uppercase">{instruction}</li>
          ))}
        </ul>
        <form className="" onSubmit={handleAgreement}>
          <div className="mb-4">
            {/* change checkbox color when it is selected */}
            <input
              type="checkbox"
              name="agreement"
              required
              id="agreementcheckbox"
              className="checked:caret-red-600"
            />
            <label
              htmlFor="agreementcheckbox"
              className="ml-2 cursor-pointer capitalize"
            >
              i agree
            </label>
          </div>
          <button
            type="submit"
            className="self-end capitalize bg-gray-200 text-gray-800 px-4 py-2 w-fit"
          >
            start
          </button>
        </form>
      </div>
    </>
  );
};

export default InstructionsWindow;
