import api from "./apiConfig.js";

export const getBudget = async (id) => {
  try {
    const response = await api.get(`/budget/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting budget: ", error);
  }
};

export const createBudget = async (budgetData) => {
  try {
    const response = await api.post("/budget", budgetData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editBudget = async (id, budgetData) => {
  try {
    const response = await api.put(`/budget/${id}`, budgetData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteBudget = async (id) => {
  try {
    const response = await api.delete(`/budget/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addInitialExpensesToBudget = async (budgetId, expensesData) => {
  try {
    const response = await api.put(
      `/expense/budget/${budgetId}/expenses`,
      expensesData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteExpense = async (expenseId) => {
  try {
    const response = await api.delete(`/expense/${expenseId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addExpense = async (budgetId, bugetData) => {
  try {
    const response = await api.put(`/expense/budget/${budgetId}`, bugetData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateExpense = async (expenseId, expenseData) => {
  try {
    const response = await api.put(`/expense/${expenseId}`, expenseData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
