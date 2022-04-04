import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isAddExpense, setIsAddExpense] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    const onClickNewExpenseHandler = () => setIsAddExpense((prevValue) => !prevValue)

    return (
        <div className='new-expense'>
            {
                isAddExpense ?
                    <ExpenseForm onClickNewExpense={onClickNewExpenseHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
                    : <div className="expense__actions__add">
                        <button onClick={onClickNewExpenseHandler}>Add New Expense</button>
                    </div>
            }
        </div>
    )
}

export default NewExpense