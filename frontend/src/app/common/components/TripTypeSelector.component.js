import React from 'react';

export default function TripTypeSelectorComponent({tripType, groupSize, onTripTypeChange, onGroupSizeChange}) {
    return (
        <div className="mb-3">
            <label className="form-label">
                Travelling alone or in a group?
            </label>
            <select className="form-select" value={tripType} onChange={onTripTypeChange}>
                <option value="alone">Alone</option>
                <option value="group">Group</option>
            </select>

            {tripType === 'group' && (
                <div className="mt-3">
                    <label className="form-label">
                        How many people are travelling (including you)?
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Number of people travelling with you"
                        value={groupSize}
                        onChange={onGroupSizeChange}
                    />
                </div>
            )}
        </div>
    );
}