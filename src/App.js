import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todoapp from "../src/component/Todoapp"
import Counter from "../src/component/Counter"


function App() {
const [toggle, settoggle ] = useState(false)


  return (
    < >
   <div>
    <button onClick={()=>settoggle(!toggle)}> 
      toggle
    </button>
    {toggle? <Counter/> :<Todoapp/>}
   </div>

    </>
  );
}


export default App;
