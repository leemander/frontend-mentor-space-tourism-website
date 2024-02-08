import "./style.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Destination from "./pages/Destination";

import data from "./data.json";
import { useState } from "react";

const destinations = data.destinations;
const crew = data.crew;
const technology = data.technology;

function App() {
  // const [currentPage, setCurrentPage] = useState("home");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={<Destination destinations={destinations} />}
          path="/destination"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
