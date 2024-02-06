import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Pinksection from "../Components/Pinksection";
import { useNavigate } from "react-router-dom";

function Historyachats({ searchInput, isSearchOpen, toggleSearch, cartArray, 
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
                    title="Votre histoire d'achats" 
                    paragraph={user.favorites.length > 0 ? "Voici votre liste d'achats, vous pouvez telecharger toute vos factures ici" : null}
                    //this should be if there is no history of buying
                />
                {user.favorites.length === 0 ? //this should be if there is no history of buying
                <div className="no-search">
                    <p>Vous n'avez pas deja achete rien</p>
                    <button onClick={goShop}>Shop</button>
                </div>
                : null
                }
                <Footer/>
            </div>
    )
}
export default Historyachats;    