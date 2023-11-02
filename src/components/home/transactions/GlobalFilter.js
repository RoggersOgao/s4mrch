import React from 'react'
import styles from "./GlobolFilters.module.scss"


function GlobalFilter({filter, setFilter}) {
 
  return (
    <div className={styles.container}>
    <span>
        <input value={filter || ''} onChange={(e)=> setFilter(e.target.value)} placeholder='Search'/>
    </span>
    </div>
  )
}

export default GlobalFilter