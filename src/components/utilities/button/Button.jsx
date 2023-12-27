import React from 'react'
import styles from "./Button.module.scss"
function Button({ type, disabled, children, onClick, color }) {
  return (
    <button style={{backgroundColor: color}} type={type} disabled={disabled} onClick={onClick} className={styles.button}>
        {children}
    </button>
  )
}

export default Button