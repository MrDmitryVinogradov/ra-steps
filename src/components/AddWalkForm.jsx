import React from 'react'

function AddWalkForm({ handleSubmit, handleDate, handleRange, form }) {

  return (
    <form onSubmit={(evt) => {
      evt.preventDefault();
    }
    }>
      <div className='block-wrapper'>
        <label htmlFor='date' className='add-walk'>  ДД.ММ.ГГ </label>
        <input type='date' id='date' onChange={handleDate} value={form.date}></input>
      </div>
      <div className='block-wrapper'>
        <label htmlFor='range' className='add-walk'> Пройдено км </label>
        <input type='text' id='range' onChange={handleRange} value={form.range}>
        </input>
      </div>
      <button className='steps-btn' type='button' onClick={handleSubmit} >OK </button>
    </form >
  )
}

export default AddWalkForm
