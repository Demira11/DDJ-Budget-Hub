import "./Login.css";
import "./Budget.css";
import "./SignUp.css";
import "./ChartPage.css";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Budget from "./pages/Budget.jsx";
import ChartPage from "./pages/ChartPage.jsx";
import { Routes, Route } from "react-router-dom";
import "chart.js/auto";
import { useState, useEffect } from "react";
import { verifyUser } from "./services/users.js";
import Signout from "./pages/Signout.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [budget, setBudget] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/budget"
          element={<Budget user={user} budget={budget} setBudget={setBudget} />}
        />
        <Route path="/chartPage" element={<ChartPage budget={budget} />} />
        <Route path="/sign-out" element={<Signout setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default App;
