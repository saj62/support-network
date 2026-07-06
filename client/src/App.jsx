import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import SeniorActivities from "./assets/pages/SeniorActivities";
import SeniorActivityPostPage from "./assets/pages/SeniorActivityPostPage";
import Articles from "./assets/pages/Articles";
import ArticlesPostPage from "./assets/pages/ArticlesPostPage";
import ExpertSeries from "./assets/pages/ExpertSeries";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E6] overflow-x-hidden">
      <Helmet>
        <title>Geriatrics Support Network</title>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/senior-activities" element={<SeniorActivities />} />
          <Route
            path="/senior-activities/:id"
            element={<SeniorActivityPostPage />}
          />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticlesPostPage />} />
          <Route path="/expert-series" element={<ExpertSeries />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
