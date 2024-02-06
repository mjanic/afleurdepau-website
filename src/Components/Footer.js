import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {

    const alertTikTok = () => {
        alert("Tik Tok under construction");
    } 

    const goTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        
    }

    return(
        <div className='f'>
        <div className='footer'>   
            <div className='flex'><Link to="/" onClick={goTop}><img src='../assets1/image-logo1.jpg' width={140} alt="logo" /></Link> </div>       
            <div className='footer-links flex'>
                <ul>
                    <li><Link to="/" onClick={goTop}>Home</Link></li>
                    <li><Link to="/shop" onClick={goTop}>Shop</Link></li>
                    <li><Link to="/aboutus" onClick={goTop}>About us</Link></li>
                    <li><Link to="/faq" onClick={goTop}>FAQ</Link></li>
                    <li>Mentions legales</li>
                </ul>
            </div>
            <div className='footer-contact flex'>
                <ul>
                    <li>{process.env.REACT_APP_ADRESS_1}</li>
                    <li>{process.env.REACT_APP_ADRESS_2}</li>
                    <li>
                        <FontAwesomeIcon className='footer-icon' icon={faEnvelope} />
                        {process.env.REACT_APP_EMAIL}
                    </li>
                    <li>
                        <FontAwesomeIcon className='footer-icon' icon={faPhone}/>
                        {process.env.REACT_APP_TELEPHONE}
                    </li>
                    <li className='social-icons'>
                        <FontAwesomeIcon className='footer-icon' icon={faInstagram} size='xl'/>
                        <FontAwesomeIcon className='footer-icon' icon={faFacebook} size='xl'/>
                        <FontAwesomeIcon onClick={alertTikTok} className='footer-icon' icon={faTiktok} size='xl'/>
                    </li>
                </ul>
            </div>
            </div>
            <p className='final-text'>All rights reserved A fleur de Pau 2023</p>
        </div>
    )
}
export default Footer;