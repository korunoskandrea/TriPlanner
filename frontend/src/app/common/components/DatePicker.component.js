import React from 'react';

export default function DatePicker({ startDate, endDate, onStartDateChange, onEndDateChange }) {
    return (
        <div>
            <div className="form-group">
                <legend>Start Date</legend>
                <input
                    type="date"
                    value={startDate}
                    onChange={onStartDateChange}
                    className="form-control"
                />
            </div>
            <div className="form-group ">
                <legend>End Date</legend>
                <input
                    type="date"
                    value={endDate}
                    onChange={onEndDateChange}
                    style={ {boxShadow: "none", outline: "none" }}
                    className="form-control"
                />
            </div>
        </div>
    );
}