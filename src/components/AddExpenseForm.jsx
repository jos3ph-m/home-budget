function AddExpenseForm({budgets}) {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Add a New <span className="accent">{budgets.length === 1 && `${budgets.map((budg) => budg.name)}:`}</span></h2>
    </div>
  )
}

export default AddExpenseForm