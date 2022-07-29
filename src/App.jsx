import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Advertisement from "./Pages/Advertisement/Advertisement";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertisement" element={<Advertisement />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
