import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <LoadingBar color="#f11946" progress={progress} />
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="gen"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="entertainment"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="sports"
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="science"
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="business"
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="health"
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress(progress)}
                key="technology"
                pageSize={pageSize}
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
