import React, { useEffect, useState } from "react";
import LandingPage from "../src/Pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavedArticles from "./Pages/SavedArticls/SavedNewsPage";
import { getFromLocalStorage } from "./utils/ThirdPartyApi"; 

function App() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const storedArticles = getFromLocalStorage('newsData');
    if (storedArticles) {
      setSavedArticles(storedArticles); 
    }
  }, []);

  return (
    <div className="App">
      <Router>
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
