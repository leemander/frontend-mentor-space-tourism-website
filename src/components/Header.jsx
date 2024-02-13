import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const currentPage = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }
  return (
    <header>
      <div className="container">
        <div className="space-between">
          <img src="logo.svg" alt="" />
          <button
            aria-label="toggle navigation menu"
            className="header__hamburger"
            onClick={toggleMenu}
          ></button>
          <nav className={menuOpen ? "header__nav open" : "header__nav"}>
            <ul>
              <li>
                <Link
                  className={
                    currentPage === "/"
                      ? "header__link current"
                      : "header__link"
                  }
                  to="/"
                >
                  <span>00</span> Home
                </Link>
              </li>

              <li>
                <Link
                  className={
                    currentPage === "/destination"
                      ? "header__link current"
                      : "header__link"
                  }
                  to="/destination"
                >
                  <span>01</span> Destination
                </Link>
              </li>

              <li>
                <Link
                  className={
                    currentPage === "/crew"
                      ? "header__link current"
                      : "header__link"
                  }
                  to="/crew"
                >
                  <span>02</span> Crew
                </Link>
              </li>
              <li>
                <Link
                  className={
                    currentPage === "/technology"
                      ? "header__link current"
                      : "header__link"
                  }
                  to="technology"
                >
                  <span>03</span> Technology
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
