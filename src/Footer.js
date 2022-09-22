import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer'>

            <div className='footer__join'>
                <Link to='/join'>
                    <h2 className="collections__icon">JOIn</h2>            
                </Link>
            </div>

            <div className='footer__aboutUs'>
                <Link to='/aboutus'>
                    <h2 className="collections__icon">ABoUt Us</h2>            
                </Link>
            </div>

            <div className='footer__contact'>
                <Link to='/contact'>
                    <h2 className="collections__icon">COntaCt</h2>            
                </Link>
            </div>
            
        </div>
    )
}

export default Footer
