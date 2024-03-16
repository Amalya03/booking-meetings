
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './global.css'

import Home from "./pages/home";
import RootLayout from "./pages/RootLayout";
import Service from "./pages/service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
      path: `/service/:id`,
      element: <Service/>,
    },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
