import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';


function Form(props) { 

    const { setExpense, setCreateExpense } = props;


    // State
    const [ nameExpense, setNameExpense ] = useState('');
    const [ amountExpense, setAmountExpense ] = useState(0);
    const [ error, setError ] = useState(false);


    // Cuando se agrega el gasto
    const addExpense = e => {
        e.preventDefault();

        //Validar gasto
        if( amountExpense < 1 || isNaN( amountExpense ) || nameExpense === '') {
            setError(true);
            return;
        }

        //construir objeto de gasto
        const expense = {
            nameExpense,
            amountExpense,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        setExpense(expense);
        setCreateExpense(true);

        //eliminar alerta
        setError(false)

        //resetear el form
        setNameExpense('');
        setAmountExpense('');
    }

    return (
        <form
            onSubmit = {addExpense}
        >
            <h2>Add your expenses here</h2>

            {error ? <Error message = 'Both fields are necessary or incorrect budget' /> : null }

            <div className = "campo">
                <label>Expense name</label>
                <input 
                type = "text"
                className = "u-full-width"
                placeholder = "Example: food, transport..."
                onChange = { e => setNameExpense (e.target.value) }
                value = {nameExpense}
                />
            </div>

            <div className = "campo">
                <label>Amount</label>
                <input 
                type = "number"
                className = "u-full-width"
                placeholder = "Example: 200"
                onChange = { e => setAmountExpense (parseInt(e.target.value, 10)) }
                value = {amountExpense}
                />
            </div>

            <input type = "submit" className = "button-primary u-full-width" value="Add expense" />
        </form>
    )
}

export default Form;