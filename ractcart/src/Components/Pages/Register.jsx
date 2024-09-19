import React from 'react';
import './Register.css';

function Register() {
    return (
        <>
            <div className="registermain">
                <div className="registerbox">
                    <div className="registertittel">
                        <h2>Register</h2>
                    </div>
                    <div className="registerdetails">
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="email" placeholder='Enter Your Email' />
                        <input type="text" placeholder='Enter Your Phone Number' />
                        <input type="text" placeholder='Enter Your Address' />
                        <input type="password" placeholder='Enter Your Password' />
                        <input type="password" placeholder='Conform Password' />
                    </div>
                    <div className="btnregi">
                        <button>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
