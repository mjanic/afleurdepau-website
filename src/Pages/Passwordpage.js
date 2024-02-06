import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Passwordpage () {

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    const [passwordToChange, setPasswordToChange] = useState('');
    const handlePasswordToChange = (event) => {
        setPasswordToChange(event.target.value);
    };
    const [passwordToChange1, setPasswordToChange1] = useState('');
    const handlePasswordToChange1 = (event) => {
        setPasswordToChange1(event.target.value);
    };

    const { token } = useParams();

    const onSubmitNewPassword = (event) => {

        event.preventDefault();


        if (passwordToChange === passwordToChange1) {
            fetch(`http://localhost:3001/reset-password/${token}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  newPassword: passwordToChange,
                }),
            })
            .then((response) => {
                if (!response.ok) {
                  throw new Error('Password reset failed');
                  
                }
                return response.json();
              })
              .then((data) => {
                alert(data); // Password reset successful
                goHome();
              })
              .catch((error) => {
                console.error(error);
                alert('Password reset failed.');
              });
        } else {
            return alert("Passwords don't match")
        }
    }

    return (
        <div className="flex passwordpage">
            <img src='../assets1/image-logo1.jpg' width={180} alt="logo" onClick={goHome}/>
            <form id="RessetPassword">
                <p>Enter and confirm your new password and then click submit.</p>
                <label htmlFor="password">Nouvelle password:</label><br/>
                <input type="password" id="password" name="password" onChange={handlePasswordToChange} required/><br/>
                <label htmlFor="password">Confirm password:</label><br/>
                <input type="password" id="password" name="password" onChange={handlePasswordToChange1} required/><br/>
                <button onClick={onSubmitNewPassword}>Submit</button>
            </form>
        </div>
    )
}
export default Passwordpage;