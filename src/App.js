import React, { useState } from 'react';
import Question from './components/Question';


function App() {

  // state
  const [ budget, setBudget ] = useState(0);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expense</h1>

        <div className = "contenido-principal contenido">
          <Question 
            setBudget = {setBudget}
          />
        </div>
      </header>  
    </div>
  );
}

export default App;
