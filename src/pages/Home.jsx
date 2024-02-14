import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <div className="container">
        <div className="two-column">
          <div className="home__content">
            <p className="home__eyebrow">So, you want to travel to</p>
            <h1>Space</h1>
            <p className="home__intro">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <Link className="home__button" to="/destination">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
