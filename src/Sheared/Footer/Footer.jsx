import React from 'react';
import logo from '../../assets/icons/logo-bornonala-final.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-52' src={logo} alt="" />
                    <p>Bornomala Academy<br />Learn Languages </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Courses</Link>
                    <Link to="/" className="link link-hover">Languages</Link>
                    <Link to="/" className="link link-hover">Tutors</Link>
                    <Link to="/" className="link link-hover">Resources</Link>
                    <Link to="/" className="link link-hover">Events</Link>
                    <Link to="/" className="link link-hover">Press Kit</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Partnerships</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;