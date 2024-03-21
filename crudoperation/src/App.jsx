import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./component/create";
import Read from "./component/read";
import Notfound from "./component/Notfound";
import Update from "./component/update";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/read" element={<Read />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
