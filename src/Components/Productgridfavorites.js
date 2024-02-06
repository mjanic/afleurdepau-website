import Product from './Product';

function Productgridfavorites({ products, addToCart, userFavorites, user, updateUser }) {
    const favoriteProducts = products.filter(product => userFavorites.includes(product.id));

    const productsArray = favoriteProducts.map((product, i) => (
        <Product
            key={i}
            id={product.id}
            name={product.name}
            parfume={product.parfume}
            price={product.price}
            img1={product.img1}
            addToCart={addToCart}
            user={user}
            updateUser={updateUser}
        />
    ));

    return (
        <div className='product-grid'>
            {productsArray}
        </div>
    );
}

export default Productgridfavorites;
