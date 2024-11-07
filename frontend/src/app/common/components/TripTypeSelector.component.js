import React from 'react';

export default function TripTypeSelectorComponent({tripType, groupSize, onTripTypeChange, onGroupSizeChange}) {
    return (
        <div>
            <legend>
                Travelling alone or in a group?
            </legend>
            <select className="select-input" value={tripType} onChange={onTripTypeChange}>
                <option value="alone">Alone</option>
                <option value="group">Group</option>
            </select>

            {tripType === 'group' && (
                <div>
                    <label>
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