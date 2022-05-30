import React from 'react'

import Walk from './Walk'

function WalksList({ walks, onRemove, onEdit }) {
  walks.sort((a, b) => {
    if (a.date > b.date) {
      return 1
    }
    if (a.date < b.date) {
      return -1
    }
  })
  return (
    <div className='walks-list'>
      <div className='walks-list-header'>
        <p className='list-header-block'> Дата (ДД.ММ.ГГ) </p>
        <p className='list-header-block'> Пройдено, км </p>
        <p className='list-header-block'> Действия </p>
      </div>
      <ul className='walks-list-container'>
        {walks.map((el) =>
          <Walk key={el.id}
            id={el.id}
            date={el.date}
            range={el.range}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        )}
      </ul>
    </div>
  )
}

export default WalksList