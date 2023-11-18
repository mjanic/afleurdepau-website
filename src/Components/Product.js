import './Product.css';
import {Link} from 'react-router-dom';

function Product({id, name, img1, price, parfume, addToCart}) {
    const mystyle = {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
    }
    const handleAddToCart = () => {
        addToCart({id, img1, name, price, parfume, quantity:1});
    };
    return(        
        <div className='product'>
            <div className='product-img' style={mystyle}>   
                <button className='button' onClick={handleAddToCart}>AJOUTER AU PANIER</button>
                <Link key={id} to={`/products/${id}`} >
                    <div className='picture-to-click'></div>
                </Link>
            </div>
            <Link key={id} to={`/products/${id}`} >
                <div className='product-info'>
                    <h1>{name}</h1>
                    <p>{parfume}</p>
                    <h2>{price}</h2>
                </div>
            </Link>
        </div>
    )
}
export default Product;