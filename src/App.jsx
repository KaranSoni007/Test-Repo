import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { useEffect } from "react";
import ECommerceWeb from "./ECommerceWeb.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import Contact from "./Contact";
import Menu from "./Menu";

export const userStr = createContext();

function App() {
  const str = "Hello from";
  useEffect(() => {
    console.log("Hello World")
  }, [])
  return (
    <div>
      <Router>
        <Navbar />
        <userStr.Provider value={str}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </userStr.Provider>
      </Router>

      <ECommerceWeb />

    </div>
  );
}

export default App;
