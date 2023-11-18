import Product from './Product';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Threeproducts({startIndex, products}) {

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
                <Link key={product.id} to={`/products/${product.id}`}>
                    <Product
                        key={product.id} // Provide a unique key
                        name={product.name}
                        parfume={product.parfume}
                        price={product.price}
                        img1= {`../${product.img1}`}
                    />
                </Link>
      ))}
        </div>
    )
}
export default Threeproducts;