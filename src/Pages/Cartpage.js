import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Pinksection from "../Components/Pinksection";
import Cart from "../Components/Cart";

function Cartpage({ searchInput, isSearchOpen, toggleSearch, removeFromCart, 
    handleSearchInput, clearSearchInput, cartArray, setCartArray}) {
        let paragraph = ''
        if (cartArray.length === 0) { paragraph = 'Votre panier est vide, pour trouver nos produits allez-y au Shop'};
    return(
        <div>
            <Navbar
                searchInput={searchInput}
                isSearchOpen={isSearchOpen}
                toggleSearch={toggleSearch}
                handleSearchInput={handleSearchInput}
                clearSearchInput={clearSearchInput}
                cartArray={cartArray}
            />
            <Pinksection 
                title="Votre panier" 
                paragraph={paragraph}
            />
            <Cart
                cartArray={cartArray}
                setCartArray={setCartArray}
                removeFromCart={removeFromCart}
            />
            <Footer/>
        </div>
    )
}
export default Cartpage;