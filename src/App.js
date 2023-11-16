import "./Login.css";
import "./Budget.css";
import "./SignUp.css";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Budget from "./pages/Budget.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </div>
  );
}

export default App;
