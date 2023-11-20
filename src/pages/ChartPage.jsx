import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";

function ChartPage() {
  const location = useLocation();
  const chartData = location.state?.data || {}; // Access the chart data from the location state

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed.toString;
          },
        },
      },
    },
  };

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

      <div className="chart-container">
        <Doughnut className="chart" data={chartData} options={options}></Doughnut>
      </div>

      <div className="button-container">
        <button className="button delete-button">Delete</button>
        <button className="button edit-button">Edit</button>
      </div>
    </div>
  );
}

export default ChartPage;
