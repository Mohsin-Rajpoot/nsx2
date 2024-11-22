import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage/LandingPage";
import SavedArticles from "./Pages/SavedArticls/SavedNewsPage";
import { getFromLocalStorage } from "./utils/ThirdPartyApi";

function App() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    try {
      const storedArticles = getFromLocalStorage("newsData");
      if (storedArticles) {
        setSavedArticles(storedArticles);
      }
    } catch (error) {
      console.error("Error reading from local storage:", error);
    }
  }, []);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/saved-articles"
            element={<SavedArticles savedArticles={savedArticles} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
