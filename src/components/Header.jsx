import DropdownButton from "./DropdownButton";
import { useState } from "react";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <header>
      <div className="container">
        <h1 className="logo">snap</h1>
        <nav>
          <ul>
            <li>
              <div className="dropdown">
                <DropdownButton
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                >
                  Features
                </DropdownButton>
                {activeItem == "features" && (
                  <div className="dropdown-menu">Hello {activeItem}</div>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown">
                <DropdownButton
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                >
                  Company
                </DropdownButton>
                {activeItem == "company" && (
                  <div className="dropdown-menu">Hello {activeItem}</div>
                )}
              </div>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="user-btns">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
