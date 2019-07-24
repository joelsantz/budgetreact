import React, { Fragment, useState } from 'react';

function Question(props) {
    
    const { setBudget, setQuestionBudget } = props;

    // Definir el state
    const [ amount, setAmount] =  useState(0);
    const [ error, setError ] = useState(false);

    // Validar presupuesto
    const addBudget = e => {
        e.preventDefault();

        

        // Validar
        if( amount < 1 || isNaN( amount ) ) {
            setError(true);
            return;
        }

        //  Si se pasa la validacion
        setError(false);
        setBudget( amount );
        setQuestionBudget(false);
    }


    return (
        <Fragment>
            <h2>Put your Budget</h2>

            {error ? <p className = "alert alert-danger error">Budget is Incorrect</p> : null}
            <form
                onSubmit = {addBudget}
            >
                <input type= "number" 
                className = "u-full-width" 
                placeholder = "add your budget"
                onChange = {e => setAmount(parseInt(e.target.value, 10) ) }
                />
                <input type = "submit" 
                className = "button-primary u-full-width"
                value = "Define Budget"
                />

            </form>

        </Fragment>
    );

}

export default Question;