function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm sticky-top">
      <a className="navbar-brand pt-0 pb-0 ">
        <span>[</span>alexxygg
        <span>]</span>
      </a>
      <button
        className="navbar-toggler btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>☰</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div id="navigation">
          <ul className="nav-links">
            {" "}
            <li className="nav-link">
              <a className="" href="#">
                Back to top
              </a>
            </li>
            <li className="nav-link">
              <a className="" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-link">
              <a className="" href="#about">
                About
              </a>
            </li>
            <li className="nav-link">
              <a className="" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
