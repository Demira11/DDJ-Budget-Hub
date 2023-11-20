import React from "react";
import Nav from "../components/Nav";

function Budget() {
  return (
    <div className="budget-container">
      <Nav />
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

        <button type="button" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Budget;
