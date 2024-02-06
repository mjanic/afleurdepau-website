import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

function FAQpage({ searchInput, isSearchOpen, toggleSearch, cartArray, 
    handleSearchInput, clearSearchInput, addToCart, removeFromCart,
    setCartArray, user, updateUser, isLogedIn, handleLogIn, logOutUser}) {
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
                <FAQ/>
                <Footer/>
            </div>
    )
}
export default FAQpage;    