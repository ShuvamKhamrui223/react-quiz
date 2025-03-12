import { Link, useRouteError } from "react-router-dom";
import Container from "../../Container";

const Errorpage = () => {
  const { status, error } = useRouteError();
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="font-light text-9xl text-gray-300">{status}</h1>
      <p className="text-gray-400">{error?.message ?? "app crashed"}</p>
      <Link className="bg-gray-200 hover:bg-gray-100 py-2 px-4 text-gray-900 text-sm first-letter:uppercase font-medium">
        back to home
      </Link>
    </Container>
  );
};

export default Errorpage;
