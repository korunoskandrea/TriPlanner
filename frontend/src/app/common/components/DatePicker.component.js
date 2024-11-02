import React from 'react';

export default function DatePicker({ startDate, endDate, onStartDateChange, onEndDateChange }) {
    return (
        <div className="mb-3">
            <div className="form-group">
                <label className="form-label">Start Date</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={onStartDateChange}
                    className="form-control"
                />
            </div>
            <div className="form-group mt-3">
                <label className="form-label">End Date</label>
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