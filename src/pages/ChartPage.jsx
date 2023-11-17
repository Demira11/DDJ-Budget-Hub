import React from "react";
import { NavLink } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";

function ChartPage() {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Poll",
        data: [3, 6],
        backgroundColor: ["pink", "beige"],
        borderColor: ["white"],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed + " votes";
          },
        },
      },
    },
  };

  return (
    <div className="chartPage-container">
      <nav className="navbar">
        <div className="nav-title">𑁍DDJ Budget Hub</div>
        <NavLink to="/budget" className="nav-item">
          Budget
        </NavLink>
        <NavLink to="/chartPage" className="nav-item">
          Chart
        </NavLink>
        <NavLink to="/logout" className="nav-item">
          Logout
        </NavLink>
      </nav>

      <h1 className="chart-title">Overview Chart</h1>

      <div className="chart-container">
        <Doughnut className="chart" data={data} options={options}></Doughnut>
      </div>

      <div className="button-container">
        <button className="button delete-button">Delete</button>
        <button className="button edit-button">Edit</button>
      </div>
    </div>
  );
}

export default ChartPage;
