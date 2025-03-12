import { Outlet } from "react-router-dom";
import Container from "../../Container";

const QuizPage = () => {
  return (
    <Container
      className={
        "min-h-screen relative flex flex-col items-center justify-center"
      }
    >
      <Outlet />
    </Container>
  );
};

export default QuizPage;
