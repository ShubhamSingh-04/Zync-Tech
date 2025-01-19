import React from 'react'
import './SignUp.css'

export default function SignUp() {

    return (
        <div className='sign-up-container'>
            <a href='/' className="new-feature-container">
                <div className="new-feature">New feature</div>
                Check out the team dashboard &#8594;
            </a>

            <div className="signup-tag-line">
                Beatutiful analytics to grow smarter
            </div>

            <div className="signup-sub-tag-line">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </div>

            <div className="signup-action-btn-container">
                <div className="signup-demo-btn signup-action-btn">
                    <img className='signup-demo-btn-icon' src="/icons/demo-btn.png" alt="" />Demo
                </div>
                <div className="signup-signup-btn signup-action-btn">
                    Sign Up
                </div>
            </div>

            <img src="/images/test-my-skills-img.png" alt="" className="test-my-skills-img" />

            <div className="signup-companies">
                <div className="signup-companies-heading">
                    Join 4,000+ companies already growing
                </div>

                <div className="signup-company-logos">
                    <img className='signup-companies-img' src="/images/company-1.png" alt="" />
                    <img className='signup-companies-img' src="/images/company-2.png" alt="" />
                    <img className='signup-companies-img' src="/images/company-3.png" alt="" />
                    <img className='signup-companies-img' src="/images/company-4.png" alt="" />
                    <img className='signup-companies-img' src="/images/company-5.png" alt="" />
                    <img className='signup-companies-img' src="/images/company-6.png" alt="" />
                </div>
            </div>
        </div>
    )
}
