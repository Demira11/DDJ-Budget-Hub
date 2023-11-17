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
        <div class="nav-title">𑁍DDJ Budget Hub</div>
        <NavLink to="/budget" className="nav-item">
          Budget
        </NavLink>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <NavLink to="/chartPage" className="nav-item">
          Chart
        </NavLink>
      </nav>

      <h1 class="chart-title">Overview Chart</h1>

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
