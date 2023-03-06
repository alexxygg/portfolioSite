function NavBar() {
  return (
    <div className="navBar">
      <nav class="navbar navbar-expand-lg  fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand pt-0 pb-0 color-change-2x">
            <span>[</span>alexxygg
            <span>]</span>
          </a>
          <button
            class="navbar-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>☰</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mr-auto">
              <a class="nav-link color-change-2x nav-link borderRight" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
              <a
                class="nav-link color-change-2x nav-link borderRight"
                href="#experience"
              >
                Experience
              </a>
              <a
                class="nav-link color-change-2x nav-link borderRight"
                href="#about"
              >
                About
              </a>
              <a
                class="nav-link color-change-2x nav-link borderRight"
                href="#contact"
              >
                Contact
              </a>
            </div>
            <span class="navbar-text greenOne">alexxygg@gmail.com</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
