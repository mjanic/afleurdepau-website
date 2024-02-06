import { useNavigate } from "react-router-dom";

function Activatedpage () {

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    return (
        <div className="flex activatepage">
            <img src='../assets1/image-logo1.jpg' width={180} alt="logo" onClick={goHome}/>
            <h2>Your account is succesfully activated .</h2>
            <button onClick={goHome}>Visit website</button>
        </div>
    )
}
export default Activatedpage;