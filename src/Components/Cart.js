import './Cart.css';
import './Cartitem';
import Cartitem from './Cartitem';

function Cart({cartArray, setCartArray,  removeFromCart}) {
    let grandTotal = cartArray.map(item => (parseInt(item.price)*item.quantity));
    let grandTotalPrice = grandTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return(
        <div>
            {cartArray.length > 0 ? (
            <div className="cart">
                <div className="cart-items">
                    <div className='cart-itemtext'>
                        <div></div>
                        <div>item</div>
                        <div>price</div>
                        <div>qte</div>
                        <div>total</div>
                    </div>
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
                <div className="cart-total">
                    <div className="total-cashout">
                        <h1>Grand total:</h1>
                        <h2>{grandTotalPrice}.00 $</h2>
                        <button className='button'>Checkout</button>
                    </div>
                </div>
            </div>
            ) : null}
        </div>    
    )
}
export default Cart;