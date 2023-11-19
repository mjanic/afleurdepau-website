import './Productmain.css';
import { useState } from 'react';

function Productmain({key, name, parfume, price, img1, img2, img3, description, howtouse,
    dimensions, addToCart}) {

    const initialStyles = [
        { backgroundImage: `url(/../${img1})`, backgroundSize: 'cover' },
        { backgroundImage: `url(/../${img2})`, backgroundSize: 'cover' },
        { backgroundImage: `url(/../${img3})`, backgroundSize: 'cover' },
      ];

    const [styles, setStyles] = useState(initialStyles);

    const handleImg2Click = () => {
        const newStyles = [...styles];
        [newStyles[0], newStyles[1]] = [newStyles[1], newStyles[0]]; // Swap styles between img2 and main-img
        setStyles(newStyles);
    };
    const handleImg3Click = () => {
        const newStyles = [...styles];
        [newStyles[0], newStyles[2]] = [newStyles[2], newStyles[0]]; // Swap styles between img3 and main-img
        setStyles(newStyles);
    };

    const handleAddToCart = () => {
        addToCart({img1, name, price, parfume, quantity: 1});
    };

    return(
        <div className='product-main'>
            <div className='product-main-images'>
                <div className='side-images'>
                    <div className='img2' style={styles[1]} onClick={handleImg2Click}></div>
                    <div className='img3' style={styles[2]} onClick={handleImg3Click}></div>
                </div>
                <div className='main-img' style={styles[0]}></div>
            </div>
            <div className='info'>
                <div className='product-text'>
                    <h1>{name}</h1>
                    <p className='parfume-text'>{parfume}</p>
                    <h2>{price}</h2>
                    <p>
                        {description}
                    </p>
                    <p className='expandable'>
                        <b>Dimensions</b>: {dimensions}
                    </p>
                    <p className='expandable'>
                        <b>How to use</b>: {howtouse}
                    </p>
                </div>
                <div className='product-buttons'>
                    <button className='button strong-button' onClick={handleAddToCart}>Ajouter au panier</button>
                </div>
            </div>
        </div>
    )
}
export default Productmain;