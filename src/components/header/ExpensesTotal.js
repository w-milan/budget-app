import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const ExpensesTotal = ({
  value
}) => {

  return (
  
      <div className="row">
        <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-xxl-2 offset-xxl-5 p-0">
          <div className="d-flex justify-content-between align-items-center expenses-total bg-danger">
            <div className="expenses-title">Expenses</div>
            <div className="expenses-right-part">
              <span className='expenses-value'>- {value}</span>
              <span className='expenses-percentage'>20%</span>
            </div>
          </div>
        </div>
      </div>

  )
}

export default ExpensesTotal