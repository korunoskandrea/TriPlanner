import React from 'react';

export default function DatePicker({ startDate, endDate, onStartDateChange, onEndDateChange }) {
    return (
        <div>
            <div className="form-group">
                <legend className="form-label">Start Date</legend>
                <input
                    type="date"
                    value={startDate}
                    onChange={onStartDateChange}
                    className="form-control"
                />
            </div>
            <div className="form-group ">
                <legend className="form-label">End Date</legend>
                <input
                    type="date"
                    value={endDate}
                    onChange={onEndDateChange}
                    className="form-control"
                />
            </div>
        </div>
    );
}