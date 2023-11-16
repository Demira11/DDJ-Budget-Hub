import "./Login.css";
import "./Budget.css";
import "./SignUp.css";
import "./ChartPage.css";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Budget from "./pages/Budget.jsx";
import ChartPage from "./pages/ChartPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/chartPage" element={<ChartPage />} />
      </Routes>
    </div>
  );
}

export default App;
