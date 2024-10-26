import React from 'react';

export default function DatePicker({ startDate, endDate, onStartDateChange, onEndDateChange }) {
    return (
        <div>
            <label>
                Start Date
                <input
                    type="date"
                    value={startDate}
                    onChange={onStartDateChange}
                />
            </label>
            <label>
                End Date
                <input
                    type="date"
                    value={endDate}
                    onChange={onEndDateChange}
                />
            </label>
        </div>
    );
}
