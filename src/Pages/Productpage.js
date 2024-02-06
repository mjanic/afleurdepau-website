import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Productmain from "../Components/Productmain";
import Pinksection from "../Components/Pinksection";
import Threeproducts from "../Components/Threeproducts";
import products from '../Components/products.json';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Productpage({ searchInput, isSearchOpen, toggleSearch, addToCart, cartArray, 
     handleSearchInput, handleParfumeClick, clearSearchInput, removeFromCart, setCartArray,
    user, updateUser, isLogedIn, handleLogIn, logOutUser}) {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {productId} = useParams();
    const selectedProduct = products[productId - 1];
    const productKey = selectedProduct ? selectedProduct.id : null;

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
            <Productmain 
                key={productKey}
                name={selectedProduct.name}
                parfume={selectedProduct.parfume}
                price={selectedProduct.price}
                img1={selectedProduct.img1}
                img2={selectedProduct.img2}
                img3={selectedProduct.img3}
                description={selectedProduct.description}
                howtouse={selectedProduct.howtouse}
                dimensions={selectedProduct.dimensions}
                addToCart={addToCart}
            />
            <Pinksection 
                title="Voiyez plus comme ca" 
                paragraph="Peut etre vous allez ca trouver interesant"
            />
            <Threeproducts 
            startIndex={parseInt(productId, 10)} 
            products={products} 
            addToCart={addToCart}
            user={user}
            updateUser={updateUser}
            />
            <Footer/>
        </div>
    )
}
export default Productpage;