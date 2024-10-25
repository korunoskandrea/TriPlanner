import React from 'react';

const INTERESTS = ['Museums', 'Cooking', 'Shopping', 'Night Life', 'Spa & Wellness', 'Hiking', 'Swimming'];

export default function InsertSelector({interests, onInterestChange}) {
    return (
        <fieldset>
            <legend> What are you interested in?</legend>
            {INTERESTS.map((interest) =>(
                <label key={interest}>
                    <input
                        type="checkbox"
                        value={interest}
                        onChange={onInterestChange}
                        checked={interests.includes(interest)}
                        />
                    {interest}
                </label>
            ))}
        </fieldset>
    )
}