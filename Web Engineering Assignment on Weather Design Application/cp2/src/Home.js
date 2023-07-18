import React, { useState } from "react";
import "./App.css";

function getFaviconEl() {
  return document.getElementById("favico");
}


const App = () => {
const [counter, setCounter] = useState(0)
const [counter2, setCounter2] = useState(0)
const favicon = getFaviconEl(); 



const handleClick1 = () => {
    
  if(counter > 8)
  {
    favicon.href = "red.ico";
  }
  else{
  setCounter(counter + 1)
  favicon.href = "gr.ico";
  }
}



const handleClick2 = () => {
  if(counter < 1)
  {
    favicon.href = "red.ico";
  }
  else
  {
    setCounter(counter - 1)
    favicon.href = "gr.ico";
  }
}

const handleClick3 = () => {
    setCounter(0);
    favicon.href = "favicon.ico";

  }

return (
    <div >
    Counter FavIcon Changer
    <div>
    {counter2}{counter}
    </div>
    <div className="buttons">
        <button
        onClick={handleClick1}>Increment</button>
        <button 
        onClick={handleClick3}>Reset</button>
        <button 
        onClick={handleClick2}>Decrement</button>
    </div>
    </div>
)
}

export default App