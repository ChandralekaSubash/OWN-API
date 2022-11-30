import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [data, setData] = useState({})
  const [Advice, setAdvice] = useState('')
  
  const url = `https://localhost:7030/api/quotecontroller/getuser?advicetopic=${Advice}`  

  const searchAdvice = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }
  return (
    
    <div className="app">
      
      <div className="btn">
        <input id="a1" value={Advice}  onChange={event => setAdvice(event.target.value)}
          onKeyPress={searchAdvice}
          placeholder='Enter Advice Category' type="text" />
      </div>
      <div className="container">  
            <p>{data.adviceCatagory}</p>
          <div className="adv">           
            <p>{data.advice}</p>
          </div>                    
        </div>        
      </div>
  );
}
export default App;