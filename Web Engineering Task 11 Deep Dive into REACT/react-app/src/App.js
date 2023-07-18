import './App.css';
import React, { useState } from "react";

function App() {
  const [table, setTable] = useState(0);


  function calculateTable(props) {
    setTable(props)
    var i = 1;
    var ans = "";
    var result = document.getElementById("result");

    for (i = 1; i <= 10; i++) {
      ans += ("<br>" + table + " x " + i + " = " + (table * i));
    }

    ans += "";
    result.innerHTML = ans;

  }

  return (
    <div class="container">
      <br></br>
      <div class="format">
        <div class="card-body">
          <h2 >React Table Calculation Using Hooks</h2>
          <button className='btn' type="button" onClick={() => calculateTable(2)} id="submit">Calculate Table for 2</button>
          <button className='btn' type="button" onClick={() => calculateTable(3)} id="submit">Calculate Table for 3</button>
          <button className='btn' type="button" onClick={() => calculateTable(4)} id="submit">Calculate Table for 4</button>
          <button className='btn' type="button" onClick={() => calculateTable(5)} id="submit">Calculate Table for 5</button>
          <p id="result">
          </p>
        </div>
      </div>
    </div>
  );
}



export default App;
