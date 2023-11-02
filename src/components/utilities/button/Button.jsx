import React from 'react'
import styles from "./Button.module.scss"
function Button({ type, disabled, children, onClick }) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={styles.button}>
        {children}
    </button>
  )
}

export default Button