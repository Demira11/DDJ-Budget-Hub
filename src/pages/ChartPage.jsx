import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Link, useNavigate } from "react-router-dom";

function ChartPage({ budgetStatus }) {
  let navigate = useNavigate();

  function handleBudgetClick() {
    navigate("/budget");
  }

  const backgroundColor = budgetStatus === "inRange" ? "#4CAF50" : "#FF0000";

  const data = {
    labels: ["In Range", "Over Budget"],
    datasets: [
      {
        data: [
          budgetStatus === "inRange" ? 1 : 0,
          budgetStatus === "overBudget" ? 1 : 0,
        ],
        backgroundColor: [backgroundColor, "#E0E0E0"],
        hoverBackgroundColor: [backgroundColor, "#E0E0E0"],
      },
    ],
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-title">𑁍DDJ Budget Hub</div>
        <div className="nav-item" onClick={handleBudgetClick}>
          Budget
        </div>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="nav-item">Log Out</div>
      </nav>

      <h2>Budget Status</h2>
      <Doughnut data={data} />
    </div>
  );
}

export default ChartPage;
