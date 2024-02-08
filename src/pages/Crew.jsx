import { useState } from "react";

export default function Crew({ crew }) {
  const [currentCrewIndex, setCurrentCrewIndex] = useState(0);
  return (
    <main className="crew">
      <div className="container">
        <div className="two-column">
          <div className="crew__content">
            <h1>
              <span>02</span> Meet Your Crew
            </h1>
            <div className="crew__role">{crew[currentCrewIndex].role}</div>
            <h2>{crew[currentCrewIndex].name}</h2>
            <p>{crew[currentCrewIndex].bio}</p>
            <div className="flex">
              <button
                aria-label="crew member 1"
                className="crew__button"
                onClick={() => setCurrentCrewIndex(0)}
              ></button>
              <button
                aria-label="crew member 2"
                className="crew__button"
                onClick={() => setCurrentCrewIndex(1)}
              ></button>
              <button
                aria-label="crew member 3"
                className="crew__button"
                onClick={() => setCurrentCrewIndex(2)}
              ></button>
              <button
                aria-label="crew member 4"
                className="crew__button"
                onClick={() => setCurrentCrewIndex(3)}
              ></button>
            </div>
          </div>
          <img src={crew[currentCrewIndex].images.webp} alt="" />
        </div>
      </div>
    </main>
  );
}
