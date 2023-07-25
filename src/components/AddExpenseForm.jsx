// react imports
import {useRef} from 'react'

// rrd imports
import { useFetcher } from 'react-router-dom'


function AddExpenseForm({budgets}) {
  const fetcher = useFetcher()

  const formRef = useRef()

  return (
    <div className="form-wrapper">
      <h2 className="h3">Add New{" "}
        <span className="accent">{budgets.length === 1 && `${budgets.map((budg) => budg.name)}:`}
        </span>
        {" "}Expense
      </h2>
      <fetcher.Form
      method="post"
      className="grid-sm"
      ref={formRef}
      >
      <div className='expense-inputs'></div>
      </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm