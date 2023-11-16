import React from "react";

function Budget() {
  return (
    <div className="budget-container">
      <nav className="navbar">
        {/* <h1>𑁍DDJ Budget Hub</h1> */}
        <div className="nav-item">Home</div> &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="nav-item">Overview</div>
      </nav>

      <h2 className="budget-title">Budget Planner</h2>

      <form className="budget-form">
        <div className="input-container">
          <label htmlFor="grossIncome">Gross Income</label>
          <input
            type="text"
            id="grossIncome"
            placeholder="Enter gross income"
          />
        </div>

        <div className="category-container">
          <div className="left-categories">
            <input type="text" placeholder="Housing" />
            <input type="text" placeholder="Utilities" />
            <input type="text" placeholder="Groceries" />
            <input type="text" placeholder="Transportation" />
          </div>

          <div className="right-categories">
            <input type="text" placeholder="Entertainment" />
            <input type="text" placeholder="Banks" />
            <input type="text" placeholder="Misc" />
            <input type="text" placeholder="Savings" />
          </div>
        </div>

        <button type="button" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Budget;
