import React from 'react';

const InputType = ({
  value,
  onChange
}) => {

  return (
    <div>        
      <select value={value} onChange={onChange} className="form-select type-of-desc float-end" aria-label="input type">
        <option value="plus">+</option>
        <option value="minus">-</option>
      </select>
    </div>
  )
}

export default InputType