import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Search from "./pages/Search";
import MovieInfo from "./pages/MovieInfo";
import { useState } from "react";

function App() {
  const [keyGlobalParam, setKeyGlobalParam] = useState([]);
  const [idGlobalParam, setIdGlobalParam] = useState([]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/s/:keyword" element={<Search setKeyGlobalParam={setKeyGlobalParam} />} />
          <Route path="/i/:imdbID" element={<MovieInfo setIdGlobalParam={setIdGlobalParam} />} />
        

        </Routes>
      </Router>
    </>
  );
}

export default App;
