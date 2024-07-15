import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Map from "./components/Map";
import Instruction from "./pages/Insctruction";
import PopupConnexion from "./pages/PopupConnexion";
import Deconnexion from "./pages/Deconnexion";
import PopupInscription from "./pages/PopupInscription";
import User from "./pages/User";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/galery", element: <Galery /> },
      { path: "/map", element: <Map /> },
      { path: "/instruction", element: <Instruction /> },
      { path: "/connexion", element: <PopupConnexion /> },
      { path: "/inscription", element: <PopupInscription /> },
      { path: "/deconnexion", element: <Deconnexion />},
      { path: "/user", element: <User /> },
      {
        path: "/admin",
        element: (
          <PrivateRoute requiredRole={1}>
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
