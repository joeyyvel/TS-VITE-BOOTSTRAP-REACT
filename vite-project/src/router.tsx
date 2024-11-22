import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Service /> },
  { path: "/contact", element: <Contact /> },
  { path: "/signUp", element: <SignUp /> },
]);
