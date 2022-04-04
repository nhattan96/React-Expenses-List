import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // Multi state

    const [enterTitle, setEnteredTitle] = useState('')
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');

    // Multi state --->  1 state 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

        // ( NOT GOOD PRACTICE )

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // prevState handle by React and it always the latest state snapshot
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        props.onClickNewExpense()
    }

    const onCanncelHandler = () => props.onClickNewExpense()

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={enterAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={enterDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-03-17" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={onCanncelHandler}>Canncel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm