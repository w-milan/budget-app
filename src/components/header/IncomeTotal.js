import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const IncomeTotal = ({
  value
}) => {



  return (

      <div className="row">
        <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-xxl-2 offset-xxl-5 p-0">
          <div className="d-flex justify-content-between align-items-center income-total">
            <div className="income-title">Income</div>
            <div className="income-right-part">
              <span className='income-value'>+ {value}</span>
              <span className='income-percentage'>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>

  )
}

export default IncomeTotal