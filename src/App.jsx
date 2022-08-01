import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import Admin from "./Pages/Admin/Admin";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Advertisement from "./Pages/Advertisement/Advertisement";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import "./App.scss";

const App = () => {
  const location = useLocation();

  if (window.location.host.split(".")[0] === "admin") {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="app">
        {location.pathname !== "/login" && location.pathname !== "/register" ? <Header /> : null}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route
            path="/*"
            element={
              <main>
                <p>yoq bunday narsa</p>
              </main>
            }
          />
        </Routes>

        {location.pathname !== "/login" && location.pathname !== "/register" ? <Footer /> : null}
      </div>
    );
  }
};

export default App;
