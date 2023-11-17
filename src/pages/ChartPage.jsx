import React from "react";
import { Doughnut } from "react-chartjs-2";

function ChartPage() {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Poll",
        data: [3, 6],
        backgroundColor: ["green", "red"],
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
    <div className="App">
      <h1>Budget Status</h1>

      <div style={{ width: "50%", height: "50%" }}>
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </div>
  );
}

export default ChartPage;
