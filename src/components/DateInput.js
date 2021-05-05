import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
    <div className="datepicker">
    <span className="date-label">
        Select a Date:
    </span>
    <DatePicker
        className="dateInput"
        selected={props.date ? new Date(props.date) : null}
        onChange={props.changeDate}
    />
    </div>
    // <form onSubmit={props.changeDate}>
    //     <label className="date-label">Enter a date:</label>
    //     <input placeholder="(YYYY-MM-DD)" className="dateInput" />
    //     <button className="searchButton" type="submit">Submit</button>
    // </form>
);

export default DateInput;