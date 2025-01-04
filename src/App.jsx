import './App.css';

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const pageSize = 5;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
 // Ensure case matches your environment variable
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route 
            path="/" 
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} 
          />
          <Route 
            path="/business" 
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="business" />} 
          />
          <Route 
            path="/entertainment" 
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />} 
          />
          <Route 
            path="/health" 
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="health" />} 
          />
          <Route 
            path="/science" 
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="science" />} 
          />
          <Route 
            path="/sports" 
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />} 
          />
          <Route 
            path="/technology" 
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />} 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
