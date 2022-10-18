import React from 'react';

const InputDescription = ({
  value,
  onChange
}) => {

  return (
    <div className='input-description'>
      <input maxLength={50}  value={value} onChange={onChange} type="text" className="form-control" id="description" placeholder="Add description"></input>
    </div>
  )
}

export default InputDescription