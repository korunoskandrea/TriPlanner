import React from 'react';

const INTERESTS = ['Museums', 'Cooking', 'Shopping', 'Night Life', 'Spa & Wellness', 'Hiking', 'Swimming'];

export default function InsertSelector({ interests, onInterestChange }) {
    return (
        <fieldset className="interests-fieldset">
            <legend>What are you interested in?</legend>
            <div>
                {INTERESTS.map((interest) => (
                    <div key={interest} className="interest-item">
                        <input
                            type="checkbox"
                            value={interest}
                            onChange={onInterestChange}
                            checked={interests.includes(interest)}
                            id={`interest-${interest}`}
                            className="interest-checkbox"
                        />
                        <label className="interest-label">{interest}</label>
                    </div>
                ))}
            </div>
        </fieldset>
    );
}
