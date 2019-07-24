import React, { useState } from 'react';
import Question from './components/Question';


function App() {

  // state
  const [ budget, setBudget ] = useState(0);
  const [ questionBudget, setQuestionBudget ] = useState(true);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expense</h1>

        <div className = "contenido-principal contenido">
          { (questionBudget)
            ?
            <Question 
            setBudget = {setBudget}
            setQuestionBudget = {setQuestionBudget}
          />
            : (
                  <div className = "row">
                    <div className = "one-half column">
                        <p>Formulario Aqui</p>
                    </div>
                    <div className = "one-half column"></div>
                  </div>

                    
              )
          }
        </div>
      </header>  
    </div>
  );
}

export default App;
