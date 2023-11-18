import './Hero.css'
import  Button  from './Button'
import { Link } from 'react-router-dom';

function Hero (){
    return(
        <div className='hero'>
            <div className='hero-text'>
                <h1>L'Art des Bougies</h1>
                <p>Créez une Ambiance Envoûtante <br />avec Nos Bougies Parfumées <br />Faite Main</p>
                <Link to="/shop"><Button /></Link>
            </div>
        </div>
    )
}
export default Hero;