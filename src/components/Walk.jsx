import React from 'react'

function Walk(props) {
  const { id, date, range, onEdit, onRemove } = props;
  return (
    <li className='walk' id={id}>
      <span className='walk-date'> {date} </span>
      <span className='walk-range'> {range} </span>
      <span>
        <button className='walk-edit' onClick={onEdit}> </button>
        <button className='walk-remove' onClick={onRemove}></button>
      </span>
    </li>
  )
}

export default Walk
