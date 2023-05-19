import React from 'react'

function Categories({onClickCAt, activeCat}) {
  const items = [
    'Все',
    'Мясные',
    ' Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]


  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => {
          return (
            <li
              onClick={() => onClickCAt(index)}
              className={activeCat === index ? 'active' : ''}
              key={index}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
