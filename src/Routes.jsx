import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";
import AuthLayout from "./Layouts/AuthLayout";

// initial pages
import Homepage from "./Pages/Homepage";
import Errorpage from "./Pages/Errorpage";
import SectionLoader from "./components/common/PreLoaders/SectionLoader";

const AboutPage = lazy(() => import("./Pages/AboutPage"));
const QuizPage = lazy(() => import("./Pages/QuizPage"));
const ResultPage = lazy(() => import("./Pages/ResultPage"));
const InstructionsWindow = lazy(() =>
  import("./Pages/QuizPage/components/InstructionsWindow")
);
const QuizWindow = lazy(() => import("./Pages/QuizPage/components/QuizWindow"));

// authentication related pages
const Signinpage = lazy(() =>
  import("./Layouts/AuthLayout/components/forms/Signin")
);
const Registerpage = lazy(() =>
  import("./Layouts/AuthLayout/components/forms/Register")
);
const RecipeSiteRoutes = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<SectionLoader />}>
              <Signinpage />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <Registerpage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Errorpage />,

      children: [
        { index: true, element: <Homepage />, errorElement: <Errorpage /> },
        {
          path: "about",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "quiz/c/:category",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <QuizPage />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: <InstructionsWindow />,
            },
            {
              path: "q",
              element: <QuizWindow />,
            },
          ],
        },
        {
          path: "result",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <ResultPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={AppRouter} fallbackElement={<SectionLoader />} />
    </>
  );
};

export default RecipeSiteRoutes;

// <Route path="/"/>
// <Route path="quiz">
//   <Route index element={<InstructionsWindow/>}/>
//   <Route path="/:q" />
// </Route>
