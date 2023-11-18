import './Productgrid.css';
import Product from './Product';

function Productgrid({products, addToCart}) {
    const productsArray = products.map((product, i) => {
        return(
            
                <Product
                id={products[i].id} 
                name={products[i].name}
                parfume={products[i].parfume} 
                price={products[i].price} 
                img1={products[i].img1}
                addToCart={addToCart}/>
            
        )
    })
    return(
        <div className='product-grid'>
            {productsArray}
        </div>
    )
}
export default Productgrid;