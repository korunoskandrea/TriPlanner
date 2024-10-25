import React from 'react';

export default function TripTypeSelectorComponent({tripType, groupSize, onTripTypeChange, onGroupSizeChange}) {
    return (
        <div>
            <label>
                Travelling alone or in a group?
                <select value={tripType} onChange={onTripTypeChange}>
                    <option value="alone">Alone</option>
                    <option value="group">Group</option>
                </select>
            </label>
            {tripType === 'group' && (
                <input
                    type="number"
                    placeholder={`Number of people travellin gwith you`}
                    value={groupSize}
                    onChange={onGroupSizeChange}
                />
            )}
        </div>
    )
}