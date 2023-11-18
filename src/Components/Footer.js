import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <div className='f'>
        <div className='footer'>
            <div className='footer-about-us'>
                <p>
                Nous sommes une équipe de passionnés dont le but est d'améliorer 
                la vie de chacun grâce à des produits disruptifs. Nous fabriquons 
                d'excellents produits pour résoudre vos problèmes commerciaux. Nos 
                produits sont conçus pour les petites et moyennes entreprises désireuses 
                d'optimiser leurs performances. 
                </p>
                <h3>Apprenez plus <FontAwesomeIcon className='footer-icon' icon={faArrowRight}/></h3>           
            </div>
            <div className='footer-links'>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li className='aboutus-link'>About us</li>
                    <li>FAQ</li>
                    <li>Mentions legales</li>
                </ul>
            </div>
            <div className='footer-contact'>
                <ul>
                    <li>Rue Richard Lenoir 24</li>
                    <li>14000, Caen</li>
                    <li>
                        <FontAwesomeIcon className='footer-icon' icon={faEnvelope} />
                        afleurdepau.perso@gmail.com
                    </li>
                    <li>
                        <FontAwesomeIcon className='footer-icon' icon={faPhone}/>
                        069262672
                    </li>
                    <li className='social-icons'>
                        <FontAwesomeIcon className='footer-icon' icon={faInstagram} size='xl'/>
                        <FontAwesomeIcon className='footer-icon' icon={faFacebook} size='xl'/>
                        <FontAwesomeIcon className='footer-icon' icon={faTiktok} size='xl'/>
                    </li>
                </ul>
            </div>
            </div>
            <p className='final-text'>All rights reserved A fleur de Pau 2023</p>
        </div>
    )
}
export default Footer;