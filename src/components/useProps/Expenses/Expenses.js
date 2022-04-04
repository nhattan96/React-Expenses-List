import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState(2020)

    const filterExpensesData = props.items.filter(enpense => new Date(enpense.date).getFullYear() === +(filterYear))

    const onChangeFilterHandler = (filterYear) => {
        setFilterYear(filterYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={onChangeFilterHandler}></ExpensesFilter>
            <ExpensesChart expenses={filterExpensesData}></ExpensesChart>
            <ExpensesList items={filterExpensesData}></ExpensesList>
        </Card>
    )
}

export default Expenses