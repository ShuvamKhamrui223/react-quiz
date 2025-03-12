import { Link } from "react-router-dom";
import Container from "../../Container";

const AboutPage = () => {
  return (
    <Container>
      <h2 className="text-3xl first-letter:uppercase font-bold text-center py-5">
        recipe search app
      </h2>
      <p className="leading-8 first-letter:uppercase first-letter:text-xl tracking-wider">
        recipe search app offers a large collection of recipes combining{" "}
        <Link
          className="underline underline-offset-4"
          to={"https://dummyjson.com/recipes"}
        >
          dummyjson api
        </Link>{" "}
        and{" "}
        <Link
          className="underline underline-offset-4"
          to={"https://dummyjson.com/recipes"}
        >
          mealdb api
        </Link>{" "}
        to provide you the best possible recipe at any time.
      </p>
      <h2 className="text-2xl first-letter:uppercase my-4">key features</h2>
      <ul className="list-inside list-decimal">
        <li className="first-letter:uppercase">search by name</li>
        <li className="first-letter:uppercase">search by category</li>
        <li className="first-letter:uppercase">search by ingridient</li>
        <li className="first-letter:uppercase">authentication</li>
      </ul>
    </Container>
  );
};

export default AboutPage;
