import React, { useContext } from 'react';
import IncomeTotal from './IncomeTotal';
import ExpensesTotal from './ExpensesTotal';
import { GlobalContext } from '../../context/GlobalState';
import { income, ex } from './actionValues';

const Header = () => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  const d = new Date();

  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);
  const totalIncome = income(incomeTransactions);
  const totalExpenses = ex(expenseTransactions);

  return (
    <div className="container-fluid bg-dark header-wrapper">
      <div className='text-center pt-4'>
        <h1>Available Budget in {monthNames[d.getMonth()]} {d.getFullYear()}</h1>
        <span className='total'>{totalIncome - totalExpenses}.00</span>
        <div className="py-4">
          <IncomeTotal value={totalIncome}/>
          <ExpensesTotal value={totalExpenses} />
        </div>
      </div>
    </div>
  )
}

export default Header