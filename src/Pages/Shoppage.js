import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Headerimage from "../Components/Headerimage";
import Pinksection from "../Components/Pinksection";
import Productgrid from "../Components/Productgrid";
//import products from '../Components/products.json';
import { useEffect} from "react";

function Shoppage({ searchInput, isSearchOpen, toggleSearch, cartArray, 
    handleSearchInput, filteredProducts, clearSearchInput, addToCart }) {

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
            />
            <Headerimage/>
            <Pinksection 
                title="Explore notre le plus nouvaux creations !" 
                paragraph="We also make soya wax scented sachets, hand decorated with flowers. Ideal for wardrobe or a car to difuse nice smell and refresh. You can hang it anywhere you like, since it is a litle piece of decor. It will fill this little something that misses around."
            />
            <Productgrid 
                products={filteredProducts}
                addToCart={addToCart}
            />
            <Footer/>
        </div>
    )
}
export default Shoppage;