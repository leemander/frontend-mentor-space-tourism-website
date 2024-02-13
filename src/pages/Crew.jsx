import { useState } from "react";

export default function Crew({ crew }) {
  const [currentCrewIndex, setCurrentCrewIndex] = useState(0);
  return (
    <main className="crew">
      <div className="container">
        <div className="two-column">
          <h1>
            <span>02</span> Meet Your Crew
          </h1>
          <div className="crew__content">
            <div className="crew__role">{crew[currentCrewIndex].role}</div>
            <h2 className="crew__name">{crew[currentCrewIndex].name}</h2>
            <p className="crew__bio">{crew[currentCrewIndex].bio}</p>
            <div className="crew__buttons">
              <button
                aria-label="crew member 1"
                className={
                  currentCrewIndex === 0
                    ? "crew__button current"
                    : "crew__button"
                }
                onClick={() => setCurrentCrewIndex(0)}
              ></button>
              <button
                aria-label="crew member 2"
                className={
                  currentCrewIndex === 1
                    ? "crew__button current"
                    : "crew__button"
                }
                onClick={() => setCurrentCrewIndex(1)}
              ></button>
              <button
                aria-label="crew member 3"
                className={
                  currentCrewIndex === 2
                    ? "crew__button current"
                    : "crew__button"
                }
                onClick={() => setCurrentCrewIndex(2)}
              ></button>
              <button
                aria-label="crew member 4"
                className={
                  currentCrewIndex === 3
                    ? "crew__button current"
                    : "crew__button"
                }
                onClick={() => setCurrentCrewIndex(3)}
              ></button>
            </div>
          </div>
          <img
            className="crew__img"
            src={crew[currentCrewIndex].images.webp}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
