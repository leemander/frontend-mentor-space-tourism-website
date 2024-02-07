export default function Destination() {
  const currentDest = {
    name: "Moon",
    img: "./images/destination/image-moon.webp",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  };
  return (
    <main>
      <div className="container">
        <h1>
          <span>01</span> Pick Your Destination
        </h1>
        <div className="two-column">
          <img src={currentDest.img} alt={""} />
          <div className="destination__content">
            <div className="destination__controls">
              <button>Moon</button>
              <button>Mars</button>
              <button>Europa</button>
              <button>Titan</button>
            </div>
            <div>
              <h2>{currentDest.name}</h2>
              <p>{currentDest.desc}</p>
              <hr />
              <div className="two-column">
                <div>
                  <p className="destination__label">Avg. Distance</p>
                  <p className="destination__fact">{currentDest.description}</p>
                </div>
                <div>
                  <p className="destination__label">Est. Travel Time</p>
                  <p className="destination__fact">{currentDest.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
