import React, { useContext, useState } from 'react';
import InputType from './InputType';
import InputDescription from './InputDescription';
import InputValue from './InputValue';
import { GlobalContext } from '../../context/GlobalState';

const INITIAL_STATE = {
select: "plus", 
description: "", 
value: ""
};

const InputForm = () => {

  const [formValues, setFormValues] = useState(INITIAL_STATE);
  const {incomeTransactions, expenseTransactions, setTransactions} = useContext(GlobalContext);

  const classIcon = () => {
    if(formValues.select === "plus")
      return "bi bi-check-circle-fill text-primary";
    else 
      return "bi bi-check-circle-fill text-danger";
  }

  const addingTransaction = (e) => {
    e.preventDefault();
    var inc = [...incomeTransactions];
    var exp = [...expenseTransactions];
    if(formValues.select === "plus")
      inc.push({ incomeText: formValues.description, incomeAmount: formValues.value });
    else 
      exp.push({ expenseText: formValues.description, expenseAmount: formValues.value });
    setTransactions({ 
      incomeTransactions: inc, 
      expenseTransactions: exp 
    });
    
    setFormValues(INITIAL_STATE);
  }

  return (

    <form onSubmit={addingTransaction} id="input-form">
      <div className="container-fluid">
        <div className="row bg-primary bg-opacity-10 py-3">
          <div className="col-sm-1 offset-sm-1 offset-lg-2 offset-xl-3 py-2 type-setter">
            <InputType value={formValues.select} onChange={(e) => setFormValues({ ...formValues, select: e.target.value }) }/>
          </div>
          <div className="col-sm-5 col-lg-4 col-xl-3 py-2">
            <InputDescription value={formValues.description} onChange={(e) => setFormValues({ ...formValues, description: e.target.value })} />
          </div>
          <div className="col-sm-3 col-lg-2 col-xl-1 py-2">
            <InputValue value={formValues.value} onChange={(e) => setFormValues({ ...formValues, value: e.target.value })}/>
          </div>
          <div className="col-sm py-2 add-btn-setter">
            <button type="submit" value="submit" className='add-btn'><i className={classIcon()}></i></button>  
          </div>
        </div>
      </div>
    </form>
    
  )
}

export default InputForm