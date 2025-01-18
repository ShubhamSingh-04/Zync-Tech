import React from 'react'
import './Features.css'

export default function Features() {

  const featureInfo = {
    featureName: ['Share team inboxes', 'Deliver instant answers', 'Manage your team with reports', 'Connect with customers', 'Connect the tools you already use', 'Our people make the difference'],

    featureDesc: ['Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
      'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
      'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
    ]
  }

  return (
    <div className='features-container'>
      <p className='features-heading'>Features</p>
      <p className='features-tagline'>Analytics that feels like it’s from the future</p>
      <p className="features-sub-tagline">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

      <div className="features-list-container">
          {
            featureInfo.featureName.map((ele, index)=>(
              <div className="feature-container" key={index}>
                <img src={`/icons/feature/feature-${index+1}.png`} alt="" className="feature-icon" />
                <p className="feature-heading">{ele}</p>
                <p className="feature-desc">{featureInfo.featureDesc[index]}</p>
              </div>
            ))
          }
      </div>
    </div>
  )
}
