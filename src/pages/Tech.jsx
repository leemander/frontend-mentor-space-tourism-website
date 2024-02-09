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
          <div className="tech__sidebar">
            <div className="tech__controls">
              <button
                aria-label="technology 1"
                className="tech__button current"
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
            <div className="tech__content">
              <p className="tech__eyebrow">The Terminology...</p>
              <h2 className="tech__name">{tech[currentTechIndex].name}</h2>
              <p className="tech__desc">{tech[currentTechIndex].description}</p>
            </div>
          </div>
          <picture className="tech__img">
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
