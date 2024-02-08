import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const currentPage = useLocation().pathname;
  return (
    <header>
      <div className="container">
        <div className="space-between">
          <img src="logo.svg" alt="" />
          <nav className="header__nav">
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
                  Home
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  className={
                    currentPage === "/destination"
                      ? "header__link current"
                      : "header__link"
                  }
                  to="/destination"
                >
                  Destination
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  className={
                    currentPage === "/crew"
                      ? "header__link current"
                      : "header__link"
                  }
                  to="/crew"
                >
                  Crew
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  className={
                    currentPage === "/technology"
                      ? "header__link current"
                      : "header__link"
                  }
                  to="technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
