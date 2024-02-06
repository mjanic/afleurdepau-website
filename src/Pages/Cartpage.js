import Pinksection from "../Components/Pinksection";
import Cart from "../Components/Cart";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cartpage({removeFromCart, cartArray, setCartArray, handleCartIconClick}) {
        
    return(
        <div>
            <div className="cart-page">
                <div className='x-cart'>
                    <FontAwesomeIcon className='nav-icon' icon={faXmark} onClick={handleCartIconClick}/>
                </div>
                <Pinksection 
                    title="Panier" 
                    
                />
                {cartArray.length === 0 ? 
                <div className="center">
                    <p>Oh non, ton panier est vide.</p>
                    <img className="bunny-img" src="/assets1/bunny33.jpg" alt="bunny" />
                </div> : null}
                <Cart
                    cartArray={cartArray}
                    setCartArray={setCartArray}
                    removeFromCart={removeFromCart}
                />
                
            </div>
            <div className="backdrop" onClick={handleCartIconClick}></div>
        </div>
    )
}
export default Cartpage;