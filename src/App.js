import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assests/css/style.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";



function App() {
  return (
    <Router>
            <Navbar /> {/* Navbar will be visible on every page */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/review" element={<Review />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
  );
}

export default App;
