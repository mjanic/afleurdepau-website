import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Footerimage from "../Components/Footerimage";
import Parfumes from "../Components/Parfumes";
import Video from "../Components/Video";
import { parfumes } from '../Components/Parfumelist';
import Pinksection from '../Components/Pinksection';
import { useEffect } from "react";
import Reviews from "../Components/Reviews";

function Homepage({ searchInput, isSearchOpen, toggleSearch, cartArray ,
    handleSearchInput, handleParfumeClick, clearSearchInput, removeFromCart, setCartArray,
    user, updateUser, isLogedIn, handleLogIn, logOutUser}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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
            <Hero/>
            <Features/>
            <Video/>
            <Pinksection 
                title="Découvrez nos parfums" 
                paragraph="For our mixture we use only parfumes made in France and guarantied without CMR. Down below you can select one of the parfumes and see all products with that smell available."
            />
            <Parfumes parfumes={parfumes} searchInput={searchInput} handleParfumeClick={handleParfumeClick}/>
            <Reviews/>
            <Footerimage/>
            <Footer/>
        </div>
    )
}
export default Homepage;