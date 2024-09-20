import React, { useState } from "react";
import './SigninPage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SigninPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const Signin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signin", {email,password })
            .then(result => {
                console.log(result)
                alert("Sign In Succsseful")
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <>
        <div className="registermain">
                <div className="signinbox">
                    <div className="registertittel">
                        <h2>Sign In</h2>
                    </div>
                    <div className="registerdetails">
                        <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="btnregi">
                        <button onClick={Signin}>Sign in</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SigninPage