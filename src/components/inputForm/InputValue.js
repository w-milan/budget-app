import React from 'react';

const InputValue = ({
  value,
  onChange
}) => {

  return (
    <div className='input-value'>
      <input value={value} onChange={onChange} type="number" min="1" step='1'  className="form-control" id="inputValue" aria-describedby="inputValue" placeholder="Value"></input>
    </div>
  )
}

export default InputValue