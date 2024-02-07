export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="space-between">
          <img src="logo.svg" alt="" />
          <nav className="header__nav">
            <ul>
              <li>
                <a className="header__link" href="#">
                  Home
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="header__link" href="#">
                  Destination
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="header__link" href="#">
                  Crew
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="header__link" href="#">
                  Technology
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
