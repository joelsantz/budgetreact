import React from 'react';
import Expense from './Expense';


function List({expenses}) {
    return (
        <div className = "gastos-realizados">
            <h2>List</h2>
            {expenses.map(expense => (
                <Expense 
                    key = {expense.id}
                    expense = {expense}

                />
            ))}
        </div>
    )
}

export default List;