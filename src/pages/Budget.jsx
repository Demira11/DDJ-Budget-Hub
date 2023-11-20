import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import generateChartData from "./seed"; // Import the seed function

function Budget() {
  const navigate = useNavigate();
  const [budgetData, setBudgetData] = useState({
    housing: 0,
    utilities: 0,
    groceries: 0,
    transportation: 0,
    savings: 0,
    banks: 0,
    entertainment: 0,
    miscellaneous: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    navigate("/login");
  };

  const save = async (e) => {
    e.preventDefault();
    console.log("submitted");
    navigate("/chartPage", { state: { data: generateChartData(budgetData) } });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBudgetData((prevData) => ({
      ...prevData,
      [id]: parseFloat(value) || 0, // Convert value to a float or set to 0 if conversion fails
    }));
  };


  return (
    <div className="budget-container">
      <nav className="navbar">
        <div class="nav-title">𑁍DDJ Budget Hub</div>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        {/* <NavLink to="/budget" className="nav-item">
          Budget
        </NavLink> */}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <NavLink to="/chartPage" className="nav-item">
          Chart
        </NavLink>
      </nav>

      <h2 className="budget-title">
        Budget{" "}
        <span>
          <em>Planner</em>
        </span>
      </h2>

      <form className="budget-form">
        <div className="input-container">
          <label htmlFor="grossIncome">Enter Gross Income</label>
          <input type="text" id="grossIncome" />
        </div>

        <div className="category-container">
          <div className="left-categories">
            <div className="input-container">
              <label htmlFor="housing">Housing</label>
              <input type="text" id="housing" placeholder=" " />
            </div>
          </div>

          <div className="left-categories">
            <div className="input-container">
              <label htmlFor="utilities">Utilities</label>
              <input type="text" id="utilities" placeholder=" " />
            </div>
          </div>

          <div className="left-categories">
            <div className="input-container">
              <label htmlFor="groceries">Groceries</label>
              <input type="text" id="groceries" placeholder=" " />
            </div>
          </div>

          <div className="left-categories">
            <div className="input-container">
              <label htmlFor="transportation">Transportation</label>
              <input type="text" id="transportation" placeholder=" " />
            </div>
          </div>

          <div className="right-categories">
            <div className="input-container">
              <label htmlFor="savings">Savings</label>
              <input type="text" id="savings" placeholder=" " />
            </div>
          </div>

          <div className="right-categories">
            <div className="input-container">
              <label htmlFor="banks">Banks</label>
              <input type="text" id="banks" placeholder=" " />
            </div>
          </div>

          <div className="right-categories">
            <div className="input-container">
              <label htmlFor="entertainment">Entertainment</label>
              <input type="text" id="entertainment" placeholder=" " />
            </div>
          </div>

          <div className="right-categories">
            <div className="input-container">
              <label htmlFor="miscellaneous">Miscellaneous</label>
              <input type="text" id="miscellaneous" placeholder=" " />
            </div>
          </div>
        </div>

        <button type="button" className="save-button" onClick={save}>
          Save
        </button>
      </form>
    </div>
  );
}

export default Budget;
