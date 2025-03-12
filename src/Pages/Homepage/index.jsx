import { Form, useNavigate } from "react-router-dom";
import Container from "../../Container";

const Homepage = () => {
  const navigate = useNavigate();
  const categories = [
    "random",
    "entertainment",
    "history",
    "geography",
    "science and nature",
    "literature",
    "general knowledge",
  ];

  const handleForm = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const category = formdata.get("category");

    navigate(`/quiz/c/${category}/`);
  };
  return (
    <>
      <Container
        className={
          " min-h-screen flex gap-4 flex-col items-center justify-center "
        }
      >
        <h1 className="text-6xl max-w-[15ch] text-center text-gray-300 capitalize font-bold">
          test your trivia{" "}
          <span className="text-transparent bg-gradient-to-b from-purple-600 to-slate-700 bg-clip-text">
            knowledge
          </span>
        </h1>
        <p className="text-center max-w-[50ch] first-letter:capitalize text-gray-400">
          choose your favourite genre and begin the journey of exploring unknown
          facts today
        </p>

        <Form
          method="get"
          className="flex items-center gap-3"
          onSubmit={handleForm}
        >
          <select
            name="category"
            required
            className="p-3 bg-gray-900 capitalize hover:ring-1 ring-purple-800"
            id=""
          >
            <option value={""} hidden>
              select a category
            </option>
            {categories?.map((category) => (
              <option value={category} className="">
                {category}
              </option>
            ))}
          </select>
          <button className="text-gray-200 text-xl capitalize bg-purple-900 px-4 py-2 cursor-pointer">
            start quiz
          </button>
        </Form>
      </Container>
    </>
  );
};

export default Homepage;
