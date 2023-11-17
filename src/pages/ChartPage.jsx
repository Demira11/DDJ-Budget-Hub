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

// import React, { useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { useNavigate } from "react-router-dom";

// function ChartPage({ budgetStatus }) {
//   const navigate = useNavigate();
//   const [key, setKey] = useState(0); // State to force remount

//   function handleBudgetClick(e) {
//     e.preventDefault();
//     console.log("submitted");
//     navigate("/budget");
//   }

//   const backgroundColor = budgetStatus === "inRange" ? "#4CAF50" : "#FF0000";

//   const data = {
//     labels: ["In Range", "Over Budget"],
//     datasets: [
//       {
//         data: [
//           budgetStatus === "inRange" ? 1 : 0,
//           budgetStatus === "overBudget" ? 1 : 0,
//         ],
//         backgroundColor: [backgroundColor, "#E0E0E0"],
//         hoverBackgroundColor: [backgroundColor, "#E0E0E0"],
//       },
//     ],
//   };

//   const destroyChart = () => {
//     setKey((prevKey) => prevKey + 1); // Update key to force remount
//   };

//   const chartOptions = {
//     maintainAspectRatio: false, // Set to false to ensure a perfect circle
//   };

//   return (
//     <div>
//       <nav className="navbar-3">
//         <div className="nav-title">𑁍 DDJ Budget Hub</div>
//         <div className="nav-item" onClick={handleBudgetClick}>
//           Budget
//         </div>{" "}
//         &nbsp; &nbsp; &nbsp; &nbsp;
//         <div className="nav-item">Log Out</div>
//       </nav>
//       <h2>Budget Status</h2>
//       <Doughnut
//         key={key} // Key to force remount
//         data={data}
//         options={chartOptions} // Chart.js options
//         onAnimationComplete={destroyChart} // Destroy chart after animation
//       />
//     </div>
//   );
// }

// export default ChartPage;
