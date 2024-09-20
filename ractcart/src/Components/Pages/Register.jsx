import React, { useState } from 'react';
import './Register.css';

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phonenumber, setPhonenummber] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className="registermain">
                <div className="registerbox">
                    <div className="registertittel">
                        <h2>Register</h2>
                    </div>
                    <div className="registerdetails">
                        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="text" placeholder='Enter Your Address' onChange={(e)=>setAddress(e.target.value)}/>
                        <input type="text" placeholder='Enter Your Phone Number' onChange={(e)=>setPhonenummber(e.target.value)}/>
                        <input type="password" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
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
