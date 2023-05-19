import React from 'react'
import styles from './NotFound.module.scss'

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено </h1>

      <p>
        К сожалению данная страница отсуствует в нашем интернет магазине 
      </p>
    </div>
  )
}

export default NotFoundBlock
