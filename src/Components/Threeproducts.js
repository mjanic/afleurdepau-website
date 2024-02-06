import Product from './Product';
import { useEffect } from 'react';

function Threeproducts({startIndex, products, addToCart, user, updateUser}) {

    useEffect(() => {
        window.scrollTo(0,0);
    },[startIndex]);

    let productsToDisplay;
    if (startIndex <= 3) {
        productsToDisplay = products.slice(startIndex, startIndex + 3);
    } else {
        productsToDisplay = products.slice(startIndex - 4, startIndex - 1);
    }
    

    return(
        <div className='product-grid'>
            {productsToDisplay.map((product) => (
                
                    <Product
                        id={product.id}
                        key={product.id} // Provide a unique key
                        name={product.name}
                        parfume={product.parfume}
                        price={product.price}
                        img1= {`../${product.img1}`}
                        addToCart={addToCart}
                        user={user}
                        updateUser={updateUser}
                    />
                
      ))}
        </div>
    )
}
export default Threeproducts;