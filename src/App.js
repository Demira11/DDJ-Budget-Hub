import "./App.css";
import Login from "./pages/Login.jsx";
import Budget from "./pages/Budget.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </div>
  );
}

export default App;
