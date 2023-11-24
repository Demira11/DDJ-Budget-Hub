import "../ChartPage.css";
import Nav from "../components/Nav.jsx";
import { PieChart, Pie, Tooltip } from "recharts";

const ChartPage = ({ budget }) => {
  // const data = [
  //   { name: "Income", value: 5000 },
  //   { name: "Housing", value: 3000 },
  //   { name: "Groceries", value: 600 },
  //   { name: "Utilities", value: 850 },
  //   { name: "Transportation", value: 730 },
  //   { name: "Savings", value: 6000 },
  //   { name: "Banks", value: 890 },
  //   { name: "Entertainment", value: 125 },
  //   { name: "Miscellaneous", value: 678 },
  // ];

  return (
    <div className="chartPage-container">
      <Nav title="chart" />
      <h1 className="chart-title">Overview Chart</h1>

      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={budget.expenses.map((expense) => {
            expense.name = expense.title;
            expense.value = expense.cost;
            return expense;
          })}
          cx="50%"
          cy="50%"
          outerRadius={175}
          fill="#D4AFB5"
          label
        />
        <Tooltip />
      </PieChart>
      {/* <div className="button-container">
        <button className="button delete-button">Delete</button>
        <button className="button edit-button">Edit</button>{" "}
      </div> */}
    </div>
  );
};

export default ChartPage;
