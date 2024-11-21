import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./components/Landing";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/landing", element: <Landing /> },
]);
