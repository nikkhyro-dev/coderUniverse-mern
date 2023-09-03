
import React from 'react'
import styles from './card.module.css'

function Card({heading,logo,children}) {
  return (
  <div className={styles.center}>
    <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <span style={{ fontSize: "2rem" }}>{logo}</span>
          <h1 className={styles.heading}>{heading}</h1>
        </div>
        {children}

    </div>
    </div>
  )
}

export default Card