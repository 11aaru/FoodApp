import React, { useState } from 'react';
import './loginpopup.css';
import { assets } from '../../assets/assets';

const LoginPop = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState('Login');

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-pop-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type='text' placeholder='Your name' required />}

                    <input type='email' placeholder='Your email' required />
                    <input type='password' placeholder='password' required />

                </div>
                <button>{currState === 'Sign Up' ? "create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>Lorem ipsum dolor cidunt iustecati rem accusamus consectetur!</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account?<span onClick={() => setCurrState("Sign Up")}>click here</span></p> :
                    <p>Alreay have an account?<span onClick={() => setCurrState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPop;
