import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const yearData = [2022, 2021, 2020, 2019]

    const yearSelect = yearData.map((year, key) => (
        <option value={year} key={key}> {year} </option>
    ))

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {yearSelect}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;