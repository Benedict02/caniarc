import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 20) {
        navRef.current.classList.remove("pulled");
      } else {
        navRef.current.classList.add("pulled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  useEffect(() => {
    const navbar_toogle = document.getElementById("nav-toggle");
    const handleBurger = () => {
      burgerRef.current.classList.toggle("show-icon");
      menuRef.current.classList.toggle("show-menu");
    };
    navbar_toogle.addEventListener("click", handleBurger);
    return () => navbar_toogle.removeEventListener("click", handleBurger);
  }, []);

  return (
    <>
      <div>
        <header ref={navRef} className="header">
          <nav className="nav container">
            <div className="nav__data">
              <Link to="/" className="nav__logo">
                <p>CCNC</p>
              </Link>
              <div className="nav__toggle" id="nav-toggle" ref={burgerRef}>
                <i className="ri-menu-line nav__burger"></i>
                <i className="ri-close-line nav__close"></i>
              </div>
            </div>
            <div className="nav__menu" id="nav-menu" ref={menuRef}>
              <ul className="nav__list">
                <li>
                  <Link to="/" className="nav__link" translate="no">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav__link" translate="no">
                    About
                  </Link>
                </li>
                <li className="dropdown__item">
                  <div className="nav__link">
                    Pricing
                    <i className="dropdown__arrow ri-arrow-drop-down-line"></i>
                  </div>
                  <ul className="dropdown__menu">
                    <li>
                      <Link to="/triangle" className="nav__link--dropdown">
                        Elementary School
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trigonometry"
                        className="nav__link--dropdown"
                        translate="no"
                      >
                        Junior High Scool
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trigonometry"
                        className="nav__link--dropdown"
                        translate="no"
                      >
                        Senior High Scool
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown__item">
                  <div className="nav__link">
                    Blog
                    <i className="dropdown__arrow ri-arrow-drop-down-line"></i>
                  </div>
                  <ul className="dropdown__menu">
                    <li>
                      <Link to="/square" className="nav__link--dropdown">
                        Maths
                      </Link>
                    </li>
                    <li>
                      <Link to="rectangle" className="nav__link--dropdown">
                        Physics
                      </Link>
                    </li>
                    <li>
                      <Link to="/rhombus" className="nav__link--dropdown">
                        Informatics
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
