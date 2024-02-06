import './Cart.css';
import Cartitem from './Cartitem';

function Cart({cartArray, setCartArray, removeFromCart}) {
    let livraison = 4.9;
    let articlesPrice = cartArray.map(item => parseInt(item.price));
    let totalPrice = articlesPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let cachOut = livraison + totalPrice;
    return(
        <div>
            {cartArray.length > 0 ? (
            <div className="cart">
                <div className="cart-items">                 
                    {cartArray.map(item => (
                        <Cartitem
                            key={item.id}
                            id={item.id}
                            img1={item.img1}
                            name={item.name}
                            parfume={item.parfume}
                            price={item.price}
                            quantity={item.quantity}
                            removeFromCart={removeFromCart}
                            setCartArray={setCartArray}
                        />
                    ))}
                </div>
                <div className="total-cashout">
                    <span className='space-between'><h2>Articles:</h2> <h2>{totalPrice.toFixed(2)} €</h2></span>
                    <span className='space-between'><h2>Livraison:</h2> <h2>{livraison.toFixed(2)} €</h2></span>
                    <span className='space-between'><h2>Total:</h2> <h2>{cachOut.toFixed(2)} €</h2></span>
                    
                </div>
                <button className='button btn-cart'>Checkout</button>
            </div>
            ) : null}
        </div>    
    )
}
export default Cart;