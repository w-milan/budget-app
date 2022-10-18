import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

const IncomeDisplay = () => {
  const {incomeTransactions} = useContext(GlobalContext);

  return (

    <div className="col-lg-5 offset-lg-1 mt-5">
    <h2 className='text-primary'>Income</h2>
      <ul className="list-group list-group-flush">
      {incomeTransactions.map((incomeTransaction , id)=> {
        return(
          <li className="list-group-item" key={id}>{incomeTransaction.incomeText}
            <div className='inc'>
              <span className='inc-value text-primary'>+ {incomeTransaction.incomeAmount}.00</span>
              <button className='delete-btn text-danger'><i className="bi bi-x-circle-fill"></i></button> 
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IncomeDisplay