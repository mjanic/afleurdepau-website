import './Video.css';
import Button from './Button';
import { Link } from 'react-router-dom';

function Video() {
    return(
        <div className="video-section">
            <div className="text-content">
                <h2>Moments Captivants Dévoilés</h2>
                <p>Découvrez l'art de la création de bougies parfumées à la main avec dévouement et passion. Chaque bougie raconte une histoire, évoque un souvenir et illumine vos sens. Explorez notre collection dès aujourd'hui.</p>
                <Link to="/shop"><Button /></Link>
            </div>
            <div className="video-frame">
                <video src="candlevideo.mp4" autoPlay muted loop></video>
            </div>
        </div>
    )
}
export default Video;