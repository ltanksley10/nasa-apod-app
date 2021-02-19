import React from 'react';

const DateInput = props => (
    <form onSubmit={props.changeDate}>
        <label>Enter a date (YYYY-MM-DD):</label>
        <input className="dateInput" />
        <input className="searchButton" type="submit" />
    </form>
);

export default DateInput;