import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';


function App() {

  // state
  const [ budget, setBudget ] = useState(0);
  const [ rest, setRest ] = useState(0);
  const [ questionBudget, setQuestionBudget ] = useState(true);
  const [ createExpense, setCreateExpense ] = useState(false);
  const [ expense, setExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);

  useEffect (() => {
      if(createExpense) {
          const listExpenses = [...expenses, expense];
          setExpenses(listExpenses);

          // restar el presupueto
          const restBudget = rest - expense.amountExpense;
          setRest(restBudget);

          // una vez que se agrega, lo ponemos como false
          setCreateExpense(false);
      }
  }, [createExpense, expenses, expense, rest]);



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
            setRest = {setRest}
          />
            : (
                  <div className = "row">
                    <div className = "one-half column">
                        <Form
                          setExpense = {setExpense}
                          setCreateExpense = {setCreateExpense}
                        />
                    </div>
                    <div className = "one-half column">
                      <List 
                        expenses =  {expenses}
                      />
                      <ControlBudget
                        budget = {budget}
                        rest = {rest}
                      />
                    </div>
                  </div>

                    
              )
          }
        </div>
      </header>  
    </div>
  );
}

export default App;
