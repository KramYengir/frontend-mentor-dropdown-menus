const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">snap</h1>
        <nav>
          <ul>
            <li>
              <div className="dropdown-btn">
                <button>Features</button>
              </div>
            </li>
            <li>
              <div className="dropdown-btn">
                <button>Company</button>
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
