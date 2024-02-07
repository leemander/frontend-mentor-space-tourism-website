import "./style.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Destination from "./pages/Destination";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Destination />} path="/destination" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
