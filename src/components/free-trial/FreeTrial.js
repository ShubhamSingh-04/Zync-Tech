import React from 'react';
import './FreeTrial.css';

export default function FreeTrial() {
    return (
        <div className='free-trial-container'>
            <p className="free-trial-heading">
                Start your free trial
            </p>
            <p className="free-trial-sub-heading">
                Join over 4,000+ startups already growing with Untitled.
            </p>

            <div className="free-trial-action-buttons-container">
                <a href="/" className="free-trial-action-buttons learn-more-btn">Learn More</a>
                <a href="/" className="free-trial-action-buttons get-started-btn">Get Started</a>
            </div>
        </div>
    )
}
