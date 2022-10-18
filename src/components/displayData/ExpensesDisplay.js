import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

const ExpensesDisplay = () => {
  const {expenseTransactions} = useContext(GlobalContext);

  return (

    <div className="col-lg-5 offset-lg-1 mt-5">
      <h2 className='text-danger'>Expenses</h2>
      <ul className="list-group list-group-flush">
      {expenseTransactions.map((expenseTransaction, id) => {
        return(
          <li className="list-group-item" key={id}>{expenseTransaction.expenseText}
            <div className='exp'>
              <span className='expenses-value text-danger'>- {expenseTransaction.expenseAmount}.00</span>
              <span className='expenses-percentage'>20%</span>
              <button className='delete-btn text-danger'><i className="bi bi-x-circle-fill"></i></button> 
            </div>
          </li>
        )
        })}
      </ul>
    </div>
  )
}

export default ExpensesDisplay