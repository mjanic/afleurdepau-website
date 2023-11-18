import "./Cartitem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

function Cartitem ({id, img1, name, parfume, price, quantity, setCartArray, removeFromCart}) {

    const mystyle1 = { backgroundImage: `url(${img1})` };
    let totalPrice = parseInt(price) * quantity;
    
    

    const incrementQuantity = () => {
        setCartArray(preCartArray => preCartArray.map(
            item => item.id === id ? {...item, quantity: item.quantity + 1} : item
        ));
    };
    
    const decrementQuantity = () => {
        setCartArray(preCartArray => preCartArray.map(
            item => item.id === id ? {...item, quantity: Math.max(1, item.quantity - 1)} : item
        ));
    };

    return(
        <div className='cart-item'>
                    <div className='remove-item'>
                    <FontAwesomeIcon className='nav-icon' icon={faTrash} onClick={() => removeFromCart(id)}/>
                    </div>
                    <div className='item-image' style={mystyle1}></div>
                    <div className='item-name'>
                        <h5>{name}</h5>
                        <h6>{parfume}</h6>
                    </div>
                    <div className='price'>{price}</div>
                    <div className='qte'>
                        <FontAwesomeIcon className='nav-icon' icon={faSquareMinus} onClick={decrementQuantity} />
                        <input type="text" className='qte-input' value={quantity}  />
                        <FontAwesomeIcon className='nav-icon' icon={faSquarePlus} onClick={incrementQuantity} />    
                    </div>
                    <div className='total-item'>{totalPrice}.00 $</div>
        </div>
    )
}
export default Cartitem;