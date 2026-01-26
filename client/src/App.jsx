import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Gallery from "./assets/pages/Gallery";
import ExpertSeries from "./assets/pages/ExpertSeries";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E6]">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/expert-series" element={<ExpertSeries />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
