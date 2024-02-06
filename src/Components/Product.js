import './Product.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';


function Product({id, name, img1, price, parfume, addToCart, user, updateUser}) {
    const mystyle = {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
    }
    const handleAddToCart = () => {
        addToCart({id, img1, name, price, parfume, quantity:1});
    };

    const [isFavorite, setFavorite] = useState(false);
    
    useEffect(() => {
        const checkIfFavorite = (id) => {
            user.favorites.includes(id) ? setFavorite(true) : setFavorite(false)
        }
        checkIfFavorite(id);
    }, [user.favorites, id]);


    const updateDbFavorites = () => {
        fetch('http://localhost:3001/updatefavorites', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: user.name,
                id: id 
            })
        })
        .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(updatedUser => {

            // Update the user
            updateUser(updatedUser);
      
            
          })
        .catch(error => {
            console.error('Error updating favorites:', error);
        });
    } 

    return(  
          
        <div className='product'>
            <div className='product-img' style={mystyle}> 
                <span className='heart-icon'>
                    {isFavorite ? <FontAwesomeIcon  onClick={updateDbFavorites} title='Remove from favorites' className='favorites-icon' icon={faHeart} />
                    : <FontAwesomeIcon  onClick={updateDbFavorites} title='Add to favorites' className='favorites-icon' icon={faHeartRegular} />}
                </span>
                <button className='button' onClick={handleAddToCart}>Ajouter au panier</button>               
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