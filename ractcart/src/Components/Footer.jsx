import React from 'react';
import './Footer.css';
import visacard from '../assets/Images/visacard.jpg';
import mastercard from '../assets/Images/mastercard.png';
import paypal from '../assets/Images/paypal.png';

function Footer() {
  return (
    <>
      <footer>
        <div className="footermain">

            <div className="footerleft">
                <div className="aboutleft">
                    <p className='p'>About Us</p>
                    <ul className='textul'>
                        <li>Our Mission</li>
                        <li>Press</li>
                        <li>Careers</li>
                        <li>Our Story</li>
                    </ul>
                </div>
            </div>

            <div className="footercenter">
                <div className="contact">
                    <p className='help'>Help</p>
                    <ul className='contactul'>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
            </div>

            <div className="footerright">
                <div className="paywith">
                    <img src={visacard} alt="visa"  className='imagepay'/>
                    <img src={mastercard} alt="master"  className='imagepay'/>
                    <img src={paypal} alt="paypal"  className='imagepay'/>
                </div>
            </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
