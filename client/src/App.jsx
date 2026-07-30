import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";
import PageMeta from "./assets/components/PageMeta";

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import SeniorActivities from "./assets/pages/SeniorActivities";
import SeniorActivityPostPage from "./assets/pages/SeniorActivityPostPage";
import Articles from "./assets/pages/Articles";
import ArticlesPostPage from "./assets/pages/ArticlesPostPage";
import ExpertSeries from "./assets/pages/ExpertSeries";
import ShieldsAgainstScams from "./assets/pages/ShieldsAgainstScams";
import ShieldsAgainstScamsTopicPage from "./assets/pages/ShieldsAgainstScamsTopicPage";

function DefaultPageMeta() {
  return <PageMeta title="Geriatrics Support Network" />;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E6] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <>
                <DefaultPageMeta />
                <About />
              </>
            }
          />
          <Route
            path="/senior-activities"
            element={
              <>
                <DefaultPageMeta />
                <SeniorActivities />
              </>
            }
          />
          <Route
            path="/senior-activities/:id"
            element={
              <>
                <DefaultPageMeta />
                <SeniorActivityPostPage />
              </>
            }
          />
          <Route
            path="/articles"
            element={
              <>
                <DefaultPageMeta />
                <Articles />
              </>
            }
          />
          <Route
            path="/articles/:id"
            element={
              <>
                <DefaultPageMeta />
                <ArticlesPostPage />
              </>
            }
          />
          <Route path="/expert-series" element={<ExpertSeries />} />
          <Route
            path="/shields-against-scams"
            element={<ShieldsAgainstScams />}
          />
          <Route
            path="/shields-against-scams/:slug"
            element={<ShieldsAgainstScamsTopicPage />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
