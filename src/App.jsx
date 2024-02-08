import "./style.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Tech from "./pages/Tech";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Destination from "./pages/Destination";

import data from "./data.json";

const destinations = data.destinations;
const crew = data.crew;
const tech = data.technology;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={<Destination destinations={destinations} />}
          path="/destination"
        />
        <Route element={<Crew crew={crew} />} path="/crew" />
        <Route element={<Tech tech={tech} />} path="/technology" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
