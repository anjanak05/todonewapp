import React from 'react'
import styles  from "../component/todoitem.module.css"

const Todoitem = ({value, deletTodo}) => {
  return (
    <div className={styles.listDiv}>
        <li>{value.value}</li>
        <button onClick={()=> deletTodo(value)}>Delete</button>
    </div>
  )
}

export default Todoitem