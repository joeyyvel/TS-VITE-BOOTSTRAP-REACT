import "./App.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Service from "./routes/Service";
import SignUp from "./routes/SignUp";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <About />
      <Service />
      <SignUp />
    </>
  );
}

export default App;
