import React, { useState } from 'react'
import styles  from "../component/todoinput.module.css"

const Todoinput = ({addTodo}) => {
    const [word, setWord] = useState("")
    
  return (
    <div className={styles.inputDiv}>
   <input  placeholder='Add Here' value={word}  type="text" onChange={(e)=>{
       setWord(e.target.value)
   }}/>
   <button disabled={!word}
   onClick={()=>{
     
       addTodo(word)
       setWord("")
   }}>Add</button>
    
    </div>
  )
}

export default Todoinput