import { Routes, Route, useLocation } from "react-router-dom";

import Admin from "./Pages/Admin/Admin";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Post from "./Pages/Post/Post";
import Advertisement from "./Pages/Advertisement/Advertisement";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import "./App.scss";

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== "/login" &&
      location.pathname !== "/forgot" &&
      !location.pathname.includes("/admin") &&
      location.pathname !== "/register" ? (
        <Header />
      ) : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:conferenceId" element={<Post />} />
        <Route path="/advertisement" element={<Advertisement />} />

        <Route path="/admin/*" element={<Admin />} />

        <Route
          path="/*"
          element={
            <main>
              <p>yoq bunday narsa</p>
            </main>
          }
        />
      </Routes>

      {location.pathname !== "/login" &&
      location.pathname !== "/forgot" &&
      !location.pathname.includes("/admin") &&
      location.pathname !== "/register" ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default App;
