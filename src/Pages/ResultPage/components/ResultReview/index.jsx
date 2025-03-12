const ResultReview = ({ state }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {state?.questions?.map((cq, index) => (
        <div
          className={`bg-gray-900 ${
            cq?.correctAnswer === state?.userAnswers[index]
              ? "bg-green-700 hover:bg-green-700/85"
              : "bg-red-700 hover:opacity-85"
          } py-6 px-4`}
        >
          <h2 className="text-xl font-medium">{cq?.question}</h2>
          <h2 className="first-letter:uppercase">
            correct answer: {cq?.correctAnswer}
          </h2>
          <h2 className="first-letter:uppercase">
            your response: {state?.userAnswers[index]}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ResultReview;
