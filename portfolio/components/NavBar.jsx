function NavBar() {
  return (
    <div classNameName="navBar">
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand pt-0 pb-0 color-change-2x ">
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
            <div className="navbar-nav mr-auto">
              <a
                className="nav-link color-change-2x nav-link borderRight"
                href="#"
              >
                Top
              </a>
              <a
                className="nav-link color-change-2x nav-link borderRight"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="nav-link color-change-2x nav-link borderRight"
                href="#about"
              >
                About
              </a>
              <a
                className="nav-link color-change-2x nav-link borderRight"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
