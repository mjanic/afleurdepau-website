import Pinksection from './Pinksection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faLock, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import './Account.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Account ({handleProfileIconClick, handleLogIn, user, logOutUser, updateUser}) {

    const navigate = useNavigate();
    function goFavorites () {
        navigate('/favorites');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        }    
    
    const goFaq = () => {
        navigate('/faq');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    const goHistoryAchats = () => {
        navigate('/historyachats');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    const logOut = () => {

        fetch('http://localhost:3001/logout', {
            method: 'post',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));

        handleLogIn();
        logOutUser();
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    const [showChangeName, setShowChangeName] = useState(false);
    const handleChangeName = () => {
        setShowChangeName(!showChangeName);
    }
    const [showChangePass, setShowChangePass] = useState(false);
    const handleChangePass = () => {
        setShowChangePass(!showChangePass);
    }
    const [showChangeSupp, setShowChangeSupp] = useState(false);
    const handleChangeSupp = () => {
        setShowChangeSupp(!showChangeSupp);
    }

    const [nameToChange, setNameToChange] = useState('');
    const handleNameToChange = (event) => {
        setNameToChange(event.target.value);
    };

    const [deleteAccountPassword, setDeleteAccountPassword] = useState('');
    const handleDeleteAccountPassword = (event) => {
        setDeleteAccountPassword(event.target.value);
    };

    const changePassword = (event) => {

        event.preventDefault();

        fetch('http://localhost:3001/reset-password-request', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: user.email,
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

    const deleteAccount = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/delete-account', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: user.email,
                password: deleteAccountPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert(data);
                data === 'Your account was succesfully deleted' && logOut();
            } else {
                alert('Problem with deleting account.');
            }
        })
        .catch(error => {
            console.error('Error during deleting account:', error);
            alert('An error occurred during deleting account. Please try again later.');
        });   
        
    }
    const onNameChange = (event) => {

        event.preventDefault();

        fetch('http://localhost:3001/changename', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: user.name,
                newName: nameToChange
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.name) {
                updateUser(data);
                handleChangeName();
            } else {
                alert('Name already taken.');
            }
        })
        .catch(error => {
            console.error('Error during changing name:', error);
            alert('An error occurred during changing name. Please try again later.');
        });        
    }

    return(
        <div>
            <div className="profile-page">
                <div className="login-form">
                    <div className='x-cart'>
                        <FontAwesomeIcon className='nav-icon' icon={faXmark} onClick={handleProfileIconClick}/>
                    </div>
                    { showChangeSupp ? (
                        <div>    
                            <div className='pointer' onClick={handleChangeSupp}>
                                <Pinksection
                                title={<><FontAwesomeIcon icon={faCircleArrowLeft} /> Account</>}
                                />
                            </div> 
                            <form id="EditProfileForm">
                                    <p>To delete account enter your password and than click on the 
                                        button. 
                                    </p>
                                    
                                    <input type="password" id="password-delete" name="password-delete" onChange={handleDeleteAccountPassword} required/>

                                    <button onClick={deleteAccount}>Supprimer mon compte</button>
                            </form>
                        </div>    
                    ) : null }     
                    { showChangeName ? (
                        <div>    
                            <div className='pointer' onClick={handleChangeName}>
                                <Pinksection
                                title={<><FontAwesomeIcon icon={faCircleArrowLeft} /> Account</>}
                                />
                            </div> 
                            <form id="EditProfileForm">
                                    <p>To change name enter new name and press change name</p>
                                    <label htmlFor="name">Nouveu nom:</label>
                                    <input type="name" id="name" name="name" onChange={handleNameToChange} required/>

                                    <button onClick={onNameChange}>Change nom</button>
                            </form>
                        </div>    
                    ) : null }    
                    { showChangePass ? (
                        <div>
                            <div className='pointer' onClick={handleChangePass}>
                                <Pinksection
                                title={<><FontAwesomeIcon icon={faCircleArrowLeft} /> Account</>}
                                />
                            </div>  
                            <form id="EditProfileForm">
                                    <p>To change password you will recive a link on your e-mail to change it</p>
                
                                    <button onClick={changePassword}>Send me a link</button>
                            </form>
                        </div>
                    ) : null }
                    { (!showChangePass && !showChangeName && !showChangeSupp) ? (  
                        <div>
                            <Pinksection
                            title={`Welcome ${user.name}`}
                            />  
                            <div className='acc-links'>           
                                <p onClick={goFavorites}><FontAwesomeIcon icon={faHeart} /> Favorites</p><hr/>
                                <p onClick={goHistoryAchats}><FontAwesomeIcon  icon={faBook} /> History d'achats</p><hr/>              
                                <p onClick={goFaq}><FontAwesomeIcon  icon={faQuestionCircle} /> Aide & FAQ</p><hr/>
                                <p onClick={handleChangeName}><FontAwesomeIcon  icon={faPen} /> Change le nom</p><hr/>
                                <p onClick={handleChangePass}><FontAwesomeIcon  icon={faLock} /> Change le password</p><hr/>
                                <p onClick={handleChangeSupp}><FontAwesomeIcon  icon={faXmarkCircle} /> Supprimer mon compte</p>
                            </div>
                        </div>
                    ) : null }
                </div>
                { (!showChangePass && !showChangeName && !showChangeSupp) ? (
                    <div className='flex'>
                    <button onClick={logOut}>Log out</button>
                    </div>
                ) : null }
            </div>
            <div className="backdrop" onClick={handleProfileIconClick}></div>
        </div>
    )
}
export default Account;