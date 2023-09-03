
import React from 'react'
import styles from './button.module.css'

function Button({text}) {
  return (
    <button className={styles.button}>
    <span className={styles.text} >{text}</span>
    <span className={styles.arrow}> &#8594;</span>
  </button>
  )
}

export default Button