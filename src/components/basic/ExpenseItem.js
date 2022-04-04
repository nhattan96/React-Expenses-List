import './ExpenseItem.css'

const ExpenseItemBasic = () => {
    const expenseDate = new Date(2022, 5, 25)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = '250.5'

    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItemBasic