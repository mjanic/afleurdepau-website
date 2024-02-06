import "./Cartitem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cartitem ({id, img1, name, parfume, price, removeFromCart}) {

    const mystyle1 = { backgroundImage: `url(../${img1})` };
    
    return(
        <div className='cart-item'>
                    
                    <div className='item-image' style={mystyle1}></div>
                    <div className='item-name'>
                        <h5>{name}</h5>
                        <h6>{parfume}</h6>
                    </div>
                    <div className='price'>{price}</div>
                    <div className='remove-item'>
                    <FontAwesomeIcon className='nav-icon' icon={faTrash} onClick={() => removeFromCart(id)}/>
                    </div>
        </div>
    )
}
export default Cartitem;