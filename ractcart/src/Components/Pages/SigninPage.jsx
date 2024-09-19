import React from "react";
import './SigninPage.css';

function SigninPage(){
    return(
        <>
        <div className="registermain">
                <div className="registerbox">
                    <div className="registertittel">
                        <h2>Sign In</h2>
                    </div>
                    <div className="registerdetails">
                        <input type="email" placeholder='Enter Your Email' />
                        <input type="password" placeholder='Enter Your Password' />
                    </div>
                    <div className="btnregi">
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SigninPage