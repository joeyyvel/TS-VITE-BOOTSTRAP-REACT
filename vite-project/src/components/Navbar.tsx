import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import travelLogo from "../images/travelLogo.jpg";
const Navbar = () => {
  const [clicked, setCliked] = useState(false);

  const handleClick = () => {
    setCliked(!clicked);
  };

  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <div className={`nav ${show && "NavbarItems"}`}>
        <h1 className="navbar-logo">
          <img
            src={travelLogo}
            alt="nav-logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          />
        </h1>

        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className="{item.icon}"></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
