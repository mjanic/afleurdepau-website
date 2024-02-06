import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Headerimage from "../Components/Headerimage";
import Pinksection from "../Components/Pinksection";
import Productgrid from "../Components/Productgrid";
//import products from '../Components/products.json';
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Shoppage({ searchInput, isSearchOpen, toggleSearch, cartArray, 
    handleSearchInput, filteredProducts, clearSearchInput, addToCart, removeFromCart,
    setCartArray, user, updateUser, isLogedIn, handleLogIn, logOutUser}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    function goParfumes () {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 1050, behavior: 'smooth' });
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
            <Headerimage/>
            <Pinksection 
                title="Explore notre le plus nouvaux creations !" 
                paragraph="We also make soya wax scented sachets, hand decorated with flowers. Ideal for wardrobe or a car to difuse nice smell and refresh. You can hang it anywhere you like, since it is a litle piece of decor. It will fill this little something that misses around."
            />
            <Productgrid 
                products={filteredProducts}
                addToCart={addToCart}
                user={user}
                updateUser={updateUser}
            />
            {filteredProducts.length === 0 ? 
                <div className="no-search">
                    <p>There are no products matching</p>
                    <button onClick={goParfumes}>View parfumes</button>
                </div>
            : null
            }
            <Footer/>
        </div>
    )
}
export default Shoppage;