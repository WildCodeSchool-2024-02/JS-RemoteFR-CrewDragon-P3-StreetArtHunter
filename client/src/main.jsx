import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Map from "./components/Map";
import Instruction from "./pages/Insctruction";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/galery",
        element: <Galery />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/instruction",
        element: <Instruction />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
