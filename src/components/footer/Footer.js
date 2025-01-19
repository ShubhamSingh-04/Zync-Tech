import React from 'react'
import './Footer.css'
import ZyskLogo from '../ZyskLogo'

export default function Footer() {
    return (
        <>
            <footer className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 footer-col">
                            <h5 className="footer-title">Product</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="footer-link">Overview</a></li>
                                <li><a href="/" className="footer-link">Features</a></li>
                                <li><a href="/" className="footer-link">Solutions</a> <span className="badge bg-success ml-2">New</span></li>
                                <li><a href="/" className="footer-link">Tutorials</a></li>
                                <li><a href="/" className="footer-link">Pricing</a></li>
                                <li><a href="/" className="footer-link">Releases</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 footer-col">
                            <h5 className="footer-title">Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="footer-link">About us</a></li>
                                <li><a href="/" className="footer-link">Careers</a></li>
                                <li><a href="/" className="footer-link">Press</a></li>
                                <li><a href="/" className="footer-link">News</a></li>
                                <li><a href="/" className="footer-link">Media kit</a></li>
                                <li><a href="/" className="footer-link">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 footer-col">
                            <h5 className="footer-title">Resources</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="footer-link">Blog</a></li>
                                <li><a href="/" className="footer-link">Newsletter</a></li>
                                <li><a href="/" className="footer-link">Events</a></li>
                                <li><a href="/" className="footer-link">Help centre</a></li>
                                <li><a href="/" className="footer-link">Tutorials</a></li>
                                <li><a href="/" className="footer-link">Support</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 footer-col">
                            <h5 className="footer-title">Use Cases</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="footer-link">Startups</a></li>
                                <li><a href="/" className="footer-link">Enterprise</a></li>
                                <li><a href="/" className="footer-link">Government</a></li>
                                <li><a href="/" className="footer-link">SaaS centre</a></li>
                                <li><a href="/" className="footer-link">Marketplaces</a></li>
                                <li><a href="/" className="footer-link">Ecommerce</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 footer-col">
                            <h5 className="footer-title">Social</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="footer-link">Twitter</a></li>
                                <li><a href="/" className="footer-link">LinkedIn</a></li>
                                <li><a href="/" className="footer-link">Facebook</a></li>
                                <li><a href="/" className="footer-link">GitHub</a></li>
                                <li><a href="/" className="footer-link">AngelList</a></li>
                                <li><a href="/" className="footer-link">Dribbble</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 footer-col">
                            <h5 className="footer-title">Legal</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="footer-link">Terms</a></li>
                                <li><a href="/" className="footer-link">Privacy</a></li>
                                <li><a href="/" className="footer-link">Cookies</a></li>
                                <li><a href="/" className="footer-link">Licenses</a></li>
                                <li><a href="/" className="footer-link">Settings</a></li>
                                <li><a href="/" className="footer-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="logo-copyright">
                <ZyskLogo/>

                <p className="copyright">
                &copy; 2077 zysktechnologies. All rights reserved.
                </p>
            </div>
        </>
    )
}
