import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieInfo from "./pages/MovieInfo";
import { useState } from "react";

function App() {
  const [keyGlobalParam, setKeyGlobalParam] = useState([]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home setKeyGlobalParam={setKeyGlobalParam} />}
          />
          <Route
            path="/s/:keyword"
            element={
              <Search
                keyGlobalParam={keyGlobalParam}
                setKeyGlobalParam={setKeyGlobalParam}
              />
            }
          />
          <Route
            path="/i/:imdbID"
            element={
              <MovieInfo
                keyGlobalParam={keyGlobalParam}
                setKeyGlobalParam={setKeyGlobalParam}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
