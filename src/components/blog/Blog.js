import React from 'react'
import './Blog.css'

export default function Blog() {

    const blogInfo = [
        {
            title: 'UX review presentations',
            category: 'Design',
            desc: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            author: 'Olivia Rhye',
            publishedOn: '20 Jan 2024',
            img:'blog1.png'
        },

        {
            title: 'Migrating to Linear 101',
            category: 'Product',
            desc: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
            author: 'Phoenix Baker',
            publishedOn: '19 Jan 2024',
            img:'blog2.png'
        },

        {
            title: 'Building your API stack',
            category: 'Software Enginnering',
            desc: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            author: 'Lana Steiner',
            publishedOn: '18 Jan 2024',
            img:'blog3.png'
        }
    ]


    return (
        <div className='blog-container'>
            <div className="blog-container-header-section">
                <div className="blog-titles header-containers">
                    <p className="blog-title">Our blog</p>
                    <p className="blog-container-header">
                        Lastest blog posts
                    </p>
                    <p className="blog-container-header-2">
                        Tool and strategies modern teams need to help their companies grow.
                    </p>
                </div>

                <div className="blog-action-button-container header-containers">
                    <a href='/' className="blog-action-button">
                        View all posts
                    </a>
                </div>
            </div>

            <div className="blog-list">
                {
                    blogInfo.map((ele, index) => (
                        <a href='/' className="blog-element" key={index}>
                            <img src={`/images/${ele.img}`} alt="" className="blog-img" />
                            <p className="blog-category">{ele.category}</p>
                            <div className="blog-ele-title-container">
                                <p className="blog-ele-title">
                                    {ele.title}
                                </p>
                                <img src="/icons/top-right-arrow.png" alt="" className="blog-title-arrow" />
                            </div>
                            <p className="blog-ele-desc">{ele.desc}</p>

                            <div className="author-info-container">
                                <img src={`/images/${ele.author}.png`} alt="" className="blog-ele-author-img" />
                                <div className="blog-author-info">
                                    <p className="blog-author-name">
                                        {ele.author}
                                    </p>
                                    <p className="blog-ele-published-on">
                                        {ele.publishedOn}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
