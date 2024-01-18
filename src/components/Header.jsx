import DropdownButton from "./DropdownButton";
import { useState } from "react";
import calendarIcon from "../assets/images/icon-calendar.svg";
import todoIcon from "../assets/images/icon-todo.svg";
import planningIcon from "../assets/images/icon-planning.svg";
import remindersIcon from "../assets/images/icon-reminders.svg";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <header>
      <div className="container">
        <h1 className="logo">snap</h1>
        <nav>
          <ul>
            <li className="dropdown">
              <DropdownButton
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              >
                Features
              </DropdownButton>
              {activeItem == "features" && (
                <div className="dropdown-menu right-aligned">
                  <ul>
                    <li>
                      <img src={todoIcon} alt="" />
                      <a href="">Todo List</a>
                    </li>
                    <li>
                      <img src={calendarIcon} alt="" />
                      <a href="">Calendar</a>
                    </li>
                    <li>
                      <img src={remindersIcon} alt="" />
                      <a href="">Reminders</a>
                    </li>
                    <li>
                      <img src={planningIcon} alt="" />
                      <a href="">Planning</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="dropdown">
              <DropdownButton
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              >
                Company
              </DropdownButton>
              {activeItem == "company" && (
                <div className="dropdown-menu left-aligned">
                  <ul>
                    <li>
                      <a href="">History</a>
                    </li>
                    <li>
                      <a href="">Our Team</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="user-btns">
            <button>Login</button>
            <button className="btn-border">Register</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
