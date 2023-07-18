import React, { useState } from "react";
import "./App.css";

function getFaviconEl() {
  return document.getElementById("favicon");
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
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '300%',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '-15%',
    }}>
    <div style={{
        fontSize: '220%',
        position: 'relative',
        top: '10vh',
    }}>
    {counter2}{counter}
    </div>
    <div className="buttons">
        <button style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginRight: '5px',
        borderRadius: '8%',
        backgroundColor:'green',
        padding: '15px 32px',
        color: 'white',
        }}
        onClick={handleClick2}>-</button>
        <button style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginLeft: '5px',
        backgroundColor: 'gray',
        borderRadius: '8%',
        color: 'white',
        }}
        onClick={handleClick3}>Reset</button>
        <button style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginLeft: '5px',
        borderRadius: '8%',
        padding: '15px 32px',
        backgroundColor:'red',
        color: 'white',
        }}
        onClick={handleClick1}>+</button>
    </div>
    </div>
)
}

export default App


