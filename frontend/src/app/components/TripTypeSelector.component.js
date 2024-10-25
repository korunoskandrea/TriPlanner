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
                <label>
                    How many people are travelling (including you)?
                    <input
                        type="number"
                        placeholder={`Number of people travelling with you`}
                        value={groupSize}
                        onChange={onGroupSizeChange}
                    />
                </label>

            )}
        </div>
    )
}