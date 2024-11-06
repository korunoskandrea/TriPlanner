import React from 'react';

export default function TripTypeSelectorComponent({tripType, groupSize, onTripTypeChange, onGroupSizeChange}) {
    return (
        <div className="trip-type-container">
            <legend>Travelling alone or in a group?</legend>
            <select value={tripType} onChange={onTripTypeChange} className="trip-select">
                <option value="alone">Alone</option>
                <option value="group">Group</option>
            </select>

            {tripType === 'group' && (
                <div className="group-size-container">
                    <label className="group-size-label">How many people are travelling (including you)?</label>
                    <input
                        type="number"
                        className="group-size-input"
                        placeholder="Number of people"
                        value={groupSize}
                        onChange={onGroupSizeChange}
                    />
                </div>
            )}
        </div>
    );
}
