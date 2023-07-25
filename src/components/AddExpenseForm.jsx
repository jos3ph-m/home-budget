import { useFetcher } from 'react-router-dom'

function AddExpenseForm({budgets}) {
  const fetcher = useFetcher()

  return (
    <div className="form-wrapper">
      <h2 className="h3">Add New{" "}
        <span className="accent">{budgets.length === 1 && `${budgets.map((budg) => budg.name)}:`}
        </span>
        {" "}Expense
      </h2>
      <fetcher.Form
      method="post">

      </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm