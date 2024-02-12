import { useState } from "react";

export default function Destination({ destinations }) {
  const [currentDestIndex, setCurrentDestIndex] = useState(0);
  return (
    <main className="destination">
      <div className="container">
        <h1>
          <span>01</span> Pick Your Destination
        </h1>
        <div className="two-column">
          <img src={destinations[currentDestIndex].images.webp} alt="" />
          <div className="destination__content">
            <div className="destination__controls">
              <button
                className="current"
                onClick={() => setCurrentDestIndex(0)}
              >
                Moon
              </button>
              <button onClick={() => setCurrentDestIndex(1)}>Mars</button>
              <button onClick={() => setCurrentDestIndex(2)}>Europa</button>
              <button onClick={() => setCurrentDestIndex(3)}>Titan</button>
            </div>
            <div>
              <h2 className="destination__name">
                {destinations[currentDestIndex].name}
              </h2>
              <p className="destination__desc">
                {destinations[currentDestIndex].description}
              </p>
              <hr />
              <div className="two-column">
                <div>
                  <p className="destination__label">Avg. Distance</p>
                  <p className="destination__fact">
                    {destinations[currentDestIndex].distance}
                  </p>
                </div>
                <div>
                  <p className="destination__label">Est. Travel Time</p>
                  <p className="destination__fact">
                    {destinations[currentDestIndex].travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
