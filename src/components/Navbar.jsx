import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
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
              <Link to="/ColossalNotebook/" className="nav__logo">
                <SentimentDissatisfiedIcon />
                Colossal Notebook
              </Link>
              <div className="nav__toggle" id="nav-toggle" ref={burgerRef}>
                <i className="ri-menu-line nav__burger"></i>
                <i className="ri-close-line nav__close"></i>
              </div>
            </div>
            <div className="nav__menu" id="nav-menu" ref={menuRef}>
              <ul className="nav__list">
                <li>
                  <Link
                    to="/ColossalNotebook/"
                    className="nav__link"
                    translate="no"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ColossalNotebook/about"
                    className="nav__link"
                    translate="no"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ColossalNotebook/bulletin"
                    className="nav__link"
                    translate="no"
                  >
                    Bulletin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ColossalNotebook/Notebook"
                    className="nav__link"
                    translate="no"
                  >
                    Notebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ColossalNotebook/Notebook"
                    className="nav__link"
                    translate="no"
                  >
                    Non Aka
                  </Link>
                </li>
                <li className="dropdown__item">
                  <div className="nav__link">
                    Miscellaneous
                    <i className="dropdown__arrow ri-arrow-drop-down-line"></i>
                  </div>
                  <ul className="dropdown__menu">
                    <li>
                      <Link
                        to="https://docs.google.com/document/d/1UR3F3hwjIx_lqDIvbrpLeqV171Ce18N0YnwhKyqjh6g/edit?usp=sharing"
                        className="nav__link--dropdown"
                        target="_blank"
                      >
                        BenHal's book of self improvement
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ColossalNotebook/akacalc"
                        className="nav__link--dropdown"
                        translate="no"
                      >
                        Academics Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ColossalNotebook/bro-imaginebeingdownbad"
                        className="nav__link--dropdown"
                        translate="no"
                      >
                        404 page (ngl it's kinda fire)
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
