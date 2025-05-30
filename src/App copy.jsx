import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container-2xl mx-auto">
      <Router>
        <nav>
          <NavBar />
        </nav>
        <main>
          <Routes>
            <Route path="/hello" element={<Home />} />
            <Route path="/hello/projects" element={<Projects />} />
            <Route path="/hello/resume" element={<Resume />} />
            <Route path="/hello/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}
