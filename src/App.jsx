import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";

const App = () => {
  //new type


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "about",
          element: <About />,
        },

        {
          path: "movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        // dynamic value #85
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },

        {
          path: "contact",
          element: <Contact />,
          action: contactData,
        },
        // {
        //   path:"*",
        //   element: <ErrorPage />.
        // }
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  //old type

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/moives" element={<Movie />} />
  //     </Route>
  //   )

  // );
  // return <RouterProvider router={router} />
};

export default App;
