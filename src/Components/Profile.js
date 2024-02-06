import './Profile.css';
import Pinksection from './Pinksection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile ({handleProfileIconClick, handleLogIn, updateUser}) {

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleNotRegisteredClick = () => {
        setShowLoginForm(false);
    };

    const handleForgotPasswordClick = () => {
        setShowLoginForm(false);
        setShowForgotPassword(true);
    };

    const handleBackToLoginClick = () => {
        setShowLoginForm(true);
        setShowForgotPassword(false);
    };

    const [logInEmail, setLogInEmail] = useState('');
    const [logInPass, setLogInPass] = useState('');
    const [regPass, setRegPass] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regName, setRegName] = useState('');
    const [forgotEmail, setForgotEmail] = useState('');


    const handleEmailChange = (event) => {
        setLogInEmail(event.target.value);
    };
    const handlePassChange = (event) => {
        setLogInPass(event.target.value);
    };
    const handleRegEmailChange = (event) => {
        setRegEmail(event.target.value);
    };
    const handleRegNameChange = (event) => {
        setRegName(event.target.value);
    };
    const handleRegPassChange = (event) => {
        setRegPass(event.target.value);
    };
    const handleForgotEmailChange = (event) => {
        setForgotEmail(event.target.value);
    };

    const resetInput = () => {
        setLogInEmail('');
        setLogInPass('');
        setRegEmail('');
        setRegPass('');
        setRegName('');
    }

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    const changePassword = (event) => {

        event.preventDefault();

        fetch('http://localhost:3001/reset-password-request', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: forgotEmail,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert(data)
            } else {
                alert('Problem with sending password resset email.');
            }
        })
        .catch(error => {
            console.error('Error during sending password reset email:', error);
            alert('An error occurred during sending password reset email. Please try again later.');
        });   

    } 

    const onSubmitSignIn = (event) => {

        event.preventDefault();

        fetch('http://localhost:3001/signin', {
            method: 'post',
            credentials: 'include',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: logInEmail,
                password: logInPass
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.name) {
                handleLogIn();
                resetInput();
                updateUser(data);
            } else {
                alert('Email and password do not match. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        });        
    }

    const onSubmitRegister = (event) => {

        event.preventDefault();

        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: regName,
                email: regEmail,
                password: regPass
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'unable to register') {
                alert('Unable to register.');
            } else {
                alert('Succsesfully registered, please check your email to confirm your address.');               
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
            alert('An error occurred during registration.');
        });
        resetInput();
        goHome();      
    }

    return (
        <div>
            <div className="profile-page">
                <div className="login-form">
                    <div className='x-cart'>
                        <FontAwesomeIcon className='nav-icon' icon={faXmark} onClick={handleProfileIconClick}/>
                    </div>
                    <Pinksection
                        title={showLoginForm ? "Login" : showForgotPassword ? "Forgot Password" : "Registration"}
                    />
                    {showLoginForm ? (
                        <form id="loginForm">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" onChange={handleEmailChange} required/>

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" onChange={handlePassChange} required/>

                            <button onClick={onSubmitSignIn}>Login</button>
                            <p onClick={handleForgotPasswordClick}>Forgot Password?</p>
                            <p onClick={handleNotRegisteredClick}>Not registered yet?</p>
                        </form>
                    ) : showForgotPassword ? (
                        <form id="forgotPasswordForm">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" onChange={handleForgotEmailChange}  required/>
                            You will recive the link to reset your password
                            <button onClick={changePassword}>Reset Password</button>
                            <p onClick={handleBackToLoginClick}>Back to login</p>
                        </form>
                    ) : (
                        <form id="registrationForm">
                            <label htmlFor="name">Name:</label>
                            <input 
                            type="name" id="name" name="name" 
                            onChange={handleRegNameChange} 
                            value={regName}
                            required/>

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" 
                            onChange={handleRegEmailChange} 
                            value={regEmail}
                            required/>

                            <label htmlFor="password">Choose Password:</label>
                            <input type="password" id="password" name="password" 
                            onChange={handleRegPassChange} 
                            value={regPass}
                            required/>

                            You will recive an email to confirm your email address 
                            <button onClick={onSubmitRegister}>Register</button>
                            <p onClick={handleBackToLoginClick}>Back to login</p>
                        </form>
                    )}

                </div>
            </div>
            <div className="backdrop" onClick={handleProfileIconClick}></div>
        </div>
    )
}
export default Profile;