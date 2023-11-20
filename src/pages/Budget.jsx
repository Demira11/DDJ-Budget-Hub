import { useState, useEffect } from "react";
import {
  getBudget,
  editBudget,
  addInitialExpensesToBudget,
} from "../services/budget";
import Nav from "../components/Nav";

function Budget({ user, budget, setBudget }) {
  const [toggle, setToggle] = useState(false);
  const [budgetForm, setBudgetForm] = useState({
    user: user,
    income: "",
    expenses: [],
  });

  const [expensesForm, setExpensesForm] = useState({
    housing: "",
    utilities: "",
    groceries: "",
    transportation: "",
    savings: "",
    banks: "",
    entertainment: "",
    miscellaneous: "",
  });

  useEffect(() => {
    fetchBudget();
  }, [toggle]);

  async function fetchBudget() {
    const budgetData = await getBudget(user?.budgetId);
    setBudget(budgetData);
    setBudgetForm(budgetData);
  }

  // Budget Form Data
  function handleBudgetChange(e) {
    const { name, value } = e.target;

    setBudgetForm((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  }

  async function handleBudgetSubmit(e) {
    e.preventDefault();

    await editBudget(budget._id, budgetForm);
    setToggle((prev) => !prev);
  }

  // Expenses Form Data
  function handleExpenseChange(e) {
    const { name, value } = e.target;

    setExpensesForm((prevExpenses) => ({
      ...prevExpenses,
      [name]: value,
    }));
  }

  async function handleInitialExpenses(e) {
    e.preventDefault();

    let expensesData = [];

    for (let expense in expensesForm) {
      expensesData.push({
        title: expense,
        cost: parseInt(expensesForm[expense]),
      });
    }

    await addInitialExpensesToBudget(budget._id, expensesData);
    setToggle((prev) => !prev);
  }

  return (
    <div className="budget-container">
      <Nav title="budget" />
      <h2 className="budget-title">
        Budget{" "}
        <span>
          <em>Planner</em>
        </span>
      </h2>

      <form className="budget-form" onSubmit={handleBudgetSubmit}>
        <div className="input-container">
          <label htmlFor="grossIncome">Enter Gross Income</label>
          <input
            type="text"
            id="grossIncome"
            name="income"
            value={budgetForm?.income}
            onChange={handleBudgetChange}
          />
        </div>

        <button type="submit" className="save-button">
          Update Budget
        </button>
      </form>

      {budget?.expenses?.length ? (
        <div>
          {budget.expenses?.map((expense) => (
            <div>
              <h3>{expense.title}</h3>
              <p>{expense.cost}</p>
            </div>
          ))}
        </div>
      ) : (
        <form className="budget-form" onSubmit={handleInitialExpenses}>
          <div className="category-container">
            <div className="left-categories">
              <div className="input-container">
                <label htmlFor="housing">Housing</label>
                <input
                  type="text"
                  id="housing"
                  name="housing"
                  value={expensesForm.housing}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>

            <div className="left-categories">
              <div className="input-container">
                <label htmlFor="utilities">Utilities</label>
                <input
                  type="text"
                  id="utilities"
                  name="utilities"
                  value={expensesForm.utilities}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>

            <div className="left-categories">
              <div className="input-container">
                <label htmlFor="groceries">Groceries</label>
                <input
                  type="text"
                  id="groceries"
                  name="groceries"
                  value={expensesForm.groceries}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>

            <div className="left-categories">
              <div className="input-container">
                <label htmlFor="transportation">Transportation</label>
                <input
                  type="text"
                  id="transportation"
                  name="transportation"
                  value={expensesForm.transportation}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>

            <div className="right-categories">
              <div className="input-container">
                <label htmlFor="savings">Savings</label>
                <input
                  type="text"
                  id="savings"
                  name="savings"
                  value={expensesForm.savings}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>

            <div className="right-categories">
              <div className="input-container">
                <label htmlFor="banks">Banks</label>
                <input
                  type="text"
                  id="banks"
                  name="banks"
                  value={expensesForm.banks}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>

            <div className="right-categories">
              <div className="input-container">
                <label htmlFor="entertainment">Entertainment</label>
                <input
                  type="text"
                  id="entertainment"
                  name="entertainment"
                  value={expensesForm.entertainment}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>

            <div className="right-categories">
              <div className="input-container">
                <label htmlFor="miscellaneous">Miscellaneous</label>
                <input
                  type="text"
                  id="miscellaneous"
                  name="miscellaneous"
                  value={expensesForm.miscellaneous}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default Budget;
