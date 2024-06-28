import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Map from "./components/Map";
import Instruction from "./pages/Insctruction";
import PopupConnexion from "./pages/PopupConnexion";
import PopupInscription from "./pages/PopupInscription";

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
      {
        path: "/connexion",
        element: <PopupConnexion />,
      },
      {
        path: "/inscription",
        element: <PopupInscription />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
