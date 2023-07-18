import React, { useState } from "react";
import "./App.css";

function getFavicon() {
  return document.getElementById("favicon");
}


const App = () => {
const [count, setcount] = useState(0)
const [count2, setcount2] = useState(0)
const favicon = getFavicon(); 



const Increment = () => {
    
  if(count > 8)
  {
    favicon.href = "red.ico";
  }
  else{
  setcount(count + 1)
  favicon.href = "gr.ico";
  }
}



const Decrement = () => {
  if(count < 1)
  {
    favicon.href = "red.ico";
  }
  else
  {
    setcount(count - 1)
    favicon.href = "gr.ico";
  }
}

const Reset = () => {
    setcount(0);
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
    Count Changer For FavIcon
    <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
    }}>
    {count2}{count}
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
        onClick={Decrement}>-</button>
        <button style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginLeft: '5px',
        backgroundColor: 'gray',
        borderRadius: '8%',
        color: 'white',
        }}
        onClick={Reset}>Reset</button>
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
        onClick={Increment}>+</button>
    </div>
    </div>
)
}

export default App


