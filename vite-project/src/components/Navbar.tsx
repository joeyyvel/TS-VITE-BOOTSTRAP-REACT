import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="myNavbar">
        <ul>
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
