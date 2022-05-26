import React from "react";
import Todoinput from "./Todoinput";
import Todoitem from "./Todoitem";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from 'uuid';

const Todoapp = () => {
  const [newinput, setNewinput] = React.useState([]);

  const addTodo = (word) => {
    setNewinput([
      ...newinput,
      {
        id: uuidv4(),
        value: word,
      },
    ]);
  };
const deletTodo =(value)=>{
  setNewinput(newinput.filter((elem)=> elem!=value))
}

  return (
    <div>
      <Todoinput addTodo={addTodo} />
      <Todolist>
        <ul>
          {newinput.map((elem) => (
            <Todoitem value={elem} deletTodo={deletTodo}></Todoitem>
          ))}
        </ul>
      </Todolist>
    </div>
  );
};

export default Todoapp;

// <div>
//     { newinput.map((elem)=>(
//         <div key={elem.id}>{elem.value}</div>
//     ))}
//     </div>
