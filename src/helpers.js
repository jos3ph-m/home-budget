// Local storage
// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    // color:
  };
  const existingBudgets = fetchData('budgets');
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
