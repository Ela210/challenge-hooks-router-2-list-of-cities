import "./App.css";
import Search from "./Component/Search";
import { Routes, Route, Link } from "react-router-dom";
import Trailer from "./Component/Trailer";
import Error from "./Component/Error";
import Home from "./Component/Home";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>hooks</h1>
      <Link to={"/"}>
        <Button>Home</Button>
      </Link>
      <Link to={"/movies"}>
        <Button>Cities</Button>
      </Link>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/trailer/:id" element={<Trailer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
