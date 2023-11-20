import { useState, useEffect } from "react";
import {
  getBudget,
  editBudget,
  addInitialExpensesToBudget,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../services/budget";
import Nav from "../components/Nav";

function Budget({ user, budget, setBudget }) {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
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

  const [expenseForm, setExpenseForm] = useState({
    title: "",
    cost: "",
  });

  const [editExpense, setEditExpense] = useState({
    title: "",
    cost: "",
  });

  useEffect(() => {
    fetchBudget();
  }, [user, toggle]);

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

  // Expense Form Data (Individual)
  function handleExpense(e) {
    const { name, value } = e.target;

    setExpenseForm((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  }

  async function handleAddExpense(e) {
    e.preventDefault();

    await addExpense(budget._id, expenseForm);
    setExpenseForm({
      title: "",
      cost: "",
    });
    setToggle((prev) => !prev);
  }

  // Edit Expense
  function handleEditExpense(e) {
    const { name, value } = e.target;

    setEditExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  }

  async function modalSubmit(e) {
    e.preventDefault();

    await updateExpense(editExpense._id, editExpense);
    setEditExpense({
      title: "",
      cost: "",
    });
    setToggle((prev) => !prev);
    setModal(false);
  }

  // Delete Expense
  async function handleDelete(expenseId) {
    await deleteExpense(expenseId);
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
        <>
          <form onSubmit={handleAddExpense} className="expense-form-container">
            <label htmlFor="expenseTitle"></label>
            <input
              type="text"
              placeholder="enter expense title"
              id="expenseTitle"
              name="title"
              value={expenseForm.title}
              onChange={handleExpense}
            />
            <label htmlFor="expenseCost"></label>
            <input
              type="text"
              placeholder="enter expense cost"
              id="expenseCost"
              name="cost"
              value={expenseForm.cost}
              onChange={handleExpense}
            />
            <button type="submit">Add Expense</button>
          </form>
          <div className="expenses-container">
            {budget.expenses?.map((expense, i) => (
              <div key={i} className="expense-item">
                <h3>{expense.title}</h3>
                <p>{expense.cost}</p>
                <button
                  onClick={() => {
                    setEditExpense(expense);
                    setModal(true);
                  }}
                >
                  EDIT
                </button>
                <button onClick={() => handleDelete(expense._id)}>
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </>
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
      {modal && (
        <div className="modal-container">
          <div className="modal-content">
            <p onClick={() => setModal(false)}>X</p>
            <div className="modal-form-container">
              <form className="modal-form" onSubmit={modalSubmit}>
                <label htmlFor="expenseTitle"></label>
                <input
                  type="text"
                  placeholder="enter expense title"
                  id="expenseTitle"
                  name="title"
                  value={editExpense.title}
                  onChange={handleEditExpense}
                />
                <label htmlFor="expenseCost"></label>
                <input
                  type="text"
                  placeholder="enter expense cost"
                  id="expenseCost"
                  name="cost"
                  value={editExpense.cost}
                  onChange={handleEditExpense}
                />
                <button type="submit">Edit Expense</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Budget;
