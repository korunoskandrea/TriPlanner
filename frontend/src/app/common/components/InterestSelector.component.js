import React from 'react';

const INTERESTS = ['Museums', 'Cooking', 'Shopping', 'Night Life', 'Spa & Wellness', 'Hiking', 'Swimming'];

export default function InsertSelector({interests, onInterestChange}) {
    return (
        <fieldset className="mb-3">
            <legend className="h5 mb-3">What are you interested in?</legend>
            <div className="row">
                {INTERESTS.map((interest) => (
                    <div key={interest} className="col-6">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                value={interest}
                                onChange={onInterestChange}
                                checked={interests.includes(interest)}
                                className="form-check-input"
                                id={`interest-${interest}`}
                            />
                            <label className="form-check-label" htmlFor={`interest-${interest}`}>
                                {interest}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </fieldset>
    );
}