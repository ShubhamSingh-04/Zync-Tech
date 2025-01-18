import React, { useState } from 'react';
import './Faq.css';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null); // Track the currently open item

    const faq = {
        questions: [
            'Is there a free trial available?',
            'Can I change my plan later?',
            'What is your cancellation policy?',
            'Can other info be added to an invoice?',
            'How does billing work?',
            'How do I change my account email?'
        ],
        answers: [
            'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            'Some answer here - 2',
            'Some answer here - 3',
            'Some answer here - 4',
            'Some answer here - 5',
            'Some answer here - 6'
        ]
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div className="faq-container">
            <p className="faq-title">
                Frequently Asked Questions
            </p>

            <p className="faq-sub-title">
                Everything you need to know about the product and billing.
            </p>

            <div className="accordion">
                {faq.questions.map((question, index) => {
                    const isOpen = openIndex === index; // Check if the current item is open

                    return (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {question}
                                    <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                                        {isOpen ? '-' : '+'}
                                    </span>
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                            >
                                <div className="accordion-body">
                                    {faq.answers[index]}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
