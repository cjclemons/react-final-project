import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Search from "./pages/Search";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/s/:keyword" Component={Search} />
          <Route path="/i:id" Component={MovieInfo} />
        

        </Routes>
      </Router>
    </>
  );
}

export default App;
