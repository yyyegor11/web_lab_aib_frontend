import './App.css';
import React, { useState } from 'react';


function App() {
  

  const [count, setCount] = useState(0);

  const handlPlusClick = () => {
    setCount(count + 1);
 }

 const handlMinusClick = () => {
  setCount(count - 1);
}

  return (
 <div>
 <p>{count} </p> 
 <button onClick={handlPlusClick}>+1</button>
 <button onClick={handlMinusClick}>-1</button>
 </div>
 );
}

export default App;
