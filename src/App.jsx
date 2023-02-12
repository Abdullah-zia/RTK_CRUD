import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
