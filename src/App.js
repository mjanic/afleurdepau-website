import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Shoppage from './Pages/Shoppage';
import Productpage from './Pages/Productpage';
import Cartpage from './Pages/Cartpage';
import { useState, useEffect } from 'react';
import products from './Components/products.json';
import { ClerkProvider } from "@clerk/clerk-react";
import {neobrutalism} from "@clerk/themes";
import { frFR } from '@clerk/localizations';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
    const [searchInput, setSearchInput] = useState('');
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const [cartArray, setCartArray] = useState([]);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };
    const handleParfumeClick = (name) => {
        setSearchInput(name); // Set the searchInput to the name of the clicked Parfume
      };
    
    const clearSearchInput = () => {
        setSearchInput('');
    };

    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
        clearSearchInput();
    };

    useEffect(() => {
        const searchWords = searchInput.toLowerCase().split(' ').filter(word => word.trim() !== '');
        const filtered = products.filter((product) =>
            searchWords.every(word =>
                product.name.toLowerCase().includes(word) ||
                product.parfume.toLowerCase().includes(word)
        )
    );
            setFilteredProducts(filtered);
            console.log(searchInput)
    }, [searchInput]);
    
    const addToCart = (product) => {
        const existingProduct = cartArray.find(item => item.id === product.id);
    
        if (existingProduct) {
          setCartArray(prevCart => (
            prevCart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          ));
        } else {
          setCartArray(prevCart => [...prevCart, { ...product, quantity: 1 }]);
        }
    };
    
    const removeFromCart = (productId) => {
        setCartArray((prevCart) =>
          prevCart.filter((item) => item.id !== productId)
        );
    };


    return(
        <ClerkProvider 
            publishableKey={clerkPubKey}
            appearance={{
                baseTheme: neobrutalism
            }} 
            localization={frFR}
        >
        <Router>
            <Routes>
                <Route path="/" element={
                    <Homepage
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        handleParfumeClick={handleParfumeClick}
                        clearSearchInput={clearSearchInput}
                        cartArray={cartArray}
                    />} 
                />
                <Route path="/shop" element={
                    <Shoppage
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        clearSearchInput={clearSearchInput}
                        filteredProducts={filteredProducts}
                        addToCart={addToCart}
                        cartArray={cartArray}
                        clerkPubKey={clerkPubKey}
                    />} 
                />
                <Route path="/products/:productId" element={
                    <Productpage
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        handleParfumeClick={handleParfumeClick}
                        clearSearchInput={clearSearchInput}
                        addToCart={addToCart}
                        cartArray={cartArray}
                    />} />
                <Route path="/cart" element={
                    <Cartpage
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        handleParfumeClick={handleParfumeClick}
                        clearSearchInput={clearSearchInput}
                        cartArray={cartArray}
                        setCartArray={setCartArray}
                        removeFromCart={removeFromCart}
                    />} />
            </Routes>
        </Router>
        </ClerkProvider>
    );
}
export default App;