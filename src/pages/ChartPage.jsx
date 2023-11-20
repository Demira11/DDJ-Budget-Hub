import React from "react";
import "./ChartPage.css";
import { PieChart, Pie, Tooltip } from "recharts";

const ChartPage = () => {
  const data = [
    { name: "Income", value: 3000000000 },
    { name: "Housing", value: 100000000 },
    { name: "Groceries", value: 100000000 },
    { name: "Utilities", value: 100000000 },
    { name: "Transportation", value: 100000000 },
    { name: "Savings", value: 100000000 },
    { name: "Banks", value: 100000000 },
    { name: "Entertainment", value: 100000000 },
    { name: "Miscellaneous", value: 100000000 },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />

      <Tooltip />
    </PieChart>
  );
};

export default ChartPage;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Doughnut } from "react-chartjs-2";

// function ChartPage() {
//   const data = {
//     labels: ["Yes", "No"],
//     datasets: [
//       {
//         label: "Poll",
//         data: [3, 6],
//         backgroundColor: ["pink", "beige"],
//         borderColor: ["white"],
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return context.parsed + " votes";
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="chartPage-container">
//       <nav className="navbar">
//         <div className="nav-title-chart">𑁍DDJ Budget Hub</div>
//         <NavLink to="/" className="nav-item">
//           Home
//         </NavLink>
//         <NavLink to="/budget" className="nav-item">
//           Budget
//         </NavLink>

//         <NavLink to="/logout" className="nav-item">
//           Logout
//         </NavLink>
//       </nav>

//       <h1 className="chart-title">Overview Chart</h1>

//       <div className="chart-container">
//         <Doughnut className="chart" data={data} options={options}></Doughnut>
//       </div>

//       <div className="button-container">
//         <button className="button delete-button">Delete</button>
//         <button className="button edit-button">Edit</button>
//       </div>
//     </div>
//   );
// }

// export default ChartPage;
