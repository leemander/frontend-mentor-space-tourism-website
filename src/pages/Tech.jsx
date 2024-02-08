import { useState } from "react";

export default function Tech({ tech }) {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  return (
    <main className="tech">
      <div className="container">
        <h1>
          <span>03</span> Space Launch 101
        </h1>
        <div className="two-column">
          <div className="tech__content">
            <div className="tech__controls">
              <button
                aria-label="technology 1"
                className="tech__button"
                onClick={() => setCurrentTechIndex(0)}
              >
                1
              </button>
              <button
                aria-label="technology 2"
                className="tech__button"
                onClick={() => setCurrentTechIndex(1)}
              >
                2
              </button>
              <button
                aria-label="technology 3"
                className="tech__button"
                onClick={() => setCurrentTechIndex(2)}
              >
                3
              </button>
            </div>
            <p className="tech__eyebrow">The Terminology</p>
            <h2>{tech[currentTechIndex].name}</h2>
            <p>{tech[currentTechIndex].description}</p>
          </div>
          <picture>
            <source
              media="(min-width: 30em)"
              srcSet={tech[currentTechIndex].images.portrait}
            />
            <img src={tech[currentTechIndex].images.landscape} alt="" />
          </picture>
        </div>
      </div>
    </main>
  );
}
