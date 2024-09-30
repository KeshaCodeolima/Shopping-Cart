import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footermain">

            <div className="footerleft">
                <div className="aboutleft">
                    <p className='textp'>About Us</p>
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

            <div className="footerright"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
