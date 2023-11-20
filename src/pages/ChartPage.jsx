import React from "react";
import "../ChartPage.css";
import { PieChart, Pie, Tooltip } from "recharts";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink if you are using it

const ChartPage = () => {
  const data = [
    { name: "Income", value: 5000 },
    { name: "Housing", value: 3000 },
    { name: "Groceries", value: 600 },
    { name: "Utilities", value: 850 },
    { name: "Transportation", value: 730 },
    { name: "Savings", value: 6000 },
    { name: "Banks", value: 890 },
    { name: "Entertainment", value: 125 },
    { name: "Miscellaneous", value: 678 },
  ];

  return (
    <div className="chartPage-container">
      <nav className="navbar">
        <div className="nav-title-chart">𑁍DDJ Budget Hub</div>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/budget" className="nav-item">
          Budget
        </NavLink>
        <NavLink to="/logout" className="nav-item">
          Logout
        </NavLink>
      </nav>
      <h1 className="chart-title">Overview Chart</h1>

      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      <div className="button-container">
        <button className="button delete-button">Delete</button>
        <button className="button edit-button">Edit</button>{" "}
      </div>
    </div>
  );
};

export default ChartPage;
