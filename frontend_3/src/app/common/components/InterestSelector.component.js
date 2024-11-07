import React from 'react';

const INTERESTS = ['Museums', 'Cooking', 'Shopping', 'Night Life', 'Spa & Wellness', 'Hiking', 'Swimming'];

export default function InsertSelector({ interests, onInterestChange }) {
    return (
        <fieldset className="interests-fieldset">
            <legend>What are you interested in?</legend>
            <div className="interests-container">
                {INTERESTS.map((interest) => (
                    <label key={interest} className="interest-item">
                        <input
                            type="checkbox"
                            value={interest}
                            onChange={onInterestChange}
                            checked={interests.includes(interest)}
                            id={`interest-${interest}`}
                        />
                        <span>{interest}</span>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}
