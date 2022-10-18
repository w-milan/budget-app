import React from 'react';
import IncomeDisplay from './IncomeDisplay';
import ExpensesDisplay from './ExpensesDisplay';

const AllDisplay = () => {
  return (

    <div className="container pb-5">
      <div className="row">
        <IncomeDisplay />
        <ExpensesDisplay />
      </div>
    </div>

  )
}

export default AllDisplay