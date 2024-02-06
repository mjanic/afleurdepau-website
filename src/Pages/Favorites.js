import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Pinksection from "../Components/Pinksection";
import { useNavigate } from "react-router-dom";
import Productgridfavorites from "../Components/Productgridfavorites";
import products from "../Components/products.json";


function Favorites({ searchInput, isSearchOpen, toggleSearch, cartArray, 
    handleSearchInput, clearSearchInput, addToCart, removeFromCart,
    setCartArray, user, updateUser, isLogedIn, handleLogIn, logOutUser}) {
    
        const navigate = useNavigate();
        function goShop () {
            navigate('/shop');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
        }    

    return(
        <div>
            <Navbar
                searchInput={searchInput}
                isSearchOpen={isSearchOpen}
                toggleSearch={toggleSearch}
                handleSearchInput={handleSearchInput}
                clearSearchInput={clearSearchInput}
                cartArray={cartArray}
                removeFromCart={removeFromCart}
                setCartArray={setCartArray}
                user={user}
                updateUser={updateUser}
                isLogedIn={isLogedIn}
                handleLogIn={handleLogIn}
                logOutUser={logOutUser}
            />
            <Pinksection 
                title="Votre favorites" 
                paragraph={user.favorites.length > 0 ? "Voici votre favorite produits, vous en povez changer ou acheter" : null}
            />
            <Productgridfavorites 
                products={products}
                addToCart={addToCart}
                userFavorites={user.favorites}
                user={user}
                updateUser={updateUser}
            />
            {user.favorites.length === 0 ? 
                <div className="no-search">
                    <p>Vous n'avez pas choisi votre produits favorites</p>
                    <button onClick={goShop}>Shop</button>
                </div>
            : null
            }
            
            <Footer/>
        </div>
    )
}
export default Favorites;