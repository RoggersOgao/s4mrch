import React from 'react'
import styles from "./NewOrder.module.scss"

function NewOrder() {
  return (
    <div className={styles.container}>
        <div className={styles.containerDesc}>
            <p>New order list</p>
        </div>
        <div className={styles.newOrderCont}>
            <div className={styles.newOrderContLeft}>
    left
            </div>
            <div className={styles.newOrderContRight}>
right
            </div>
        </div>
    </div>
  )
}

export default NewOrder