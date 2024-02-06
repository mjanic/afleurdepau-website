import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Shoppage from './Pages/Shoppage';
import Productpage from './Pages/Productpage';
import Favorites from './Pages/Favorites';
import { useState, useEffect } from 'react';
import products from './Components/products.json';
import FAQpage from './Pages/FAQpage';
import Aboutuspage from './Pages/Aboutuspage';
import Historyachats from './Pages/Historyachats';
import Passwordpage from './Pages/Passwordpage';
import Activatedpage from './Pages/Activatedpage';



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
    
    const logOutUser = () => {
        setUser({name: "Guest", favorites: []});
    }

    const [isLogedIn, setLogedIn] = useState(false);
    const handleLogIn = () => {
        setLogedIn(!isLogedIn);
    }

    const[user, setUser] = useState({name: "Guest", favorites: []});
    const updateUser = (newUser) => {
        setUser(newUser);
    };


    useEffect(() => {
        fetch('http://localhost:3001/check-session', {
            method: 'get',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
        user.joined && setLogedIn(true);
    }, [user]);

    return(
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
                        removeFromCart={removeFromCart}
                        setCartArray={setCartArray}
                        user={user}
                        updateUser={updateUser}
                        isLogedIn={isLogedIn}
                        handleLogIn={handleLogIn}
                        logOutUser={logOutUser}
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
                        removeFromCart={removeFromCart}
                        setCartArray={setCartArray}
                        user={user}
                        updateUser={updateUser}
                        isLogedIn={isLogedIn}
                        handleLogIn={handleLogIn}
                        logOutUser={logOutUser}
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
                        removeFromCart={removeFromCart}
                        setCartArray={setCartArray}
                        user={user}
                        updateUser={updateUser}
                        isLogedIn={isLogedIn}
                        handleLogIn={handleLogIn}
                        logOutUser={logOutUser}
                    />} />
                <Route path="/favorites" element={
                    <Favorites
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        handleParfumeClick={handleParfumeClick}
                        clearSearchInput={clearSearchInput}
                        addToCart={addToCart}
                        cartArray={cartArray}
                        removeFromCart={removeFromCart}
                        setCartArray={setCartArray}
                        user={user}
                        updateUser={updateUser}
                        isLogedIn={isLogedIn}
                        handleLogIn={handleLogIn}
                        logOutUser={logOutUser}
                    />} />
                <Route path="/historyachats" element={
                    <Historyachats
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        handleParfumeClick={handleParfumeClick}
                        clearSearchInput={clearSearchInput}
                        addToCart={addToCart}
                        cartArray={cartArray}
                        removeFromCart={removeFromCart}
                        setCartArray={setCartArray}
                        user={user}
                        updateUser={updateUser}
                        isLogedIn={isLogedIn}
                        handleLogIn={handleLogIn}
                        logOutUser={logOutUser}
                    />} />    
                <Route path="/faq" element={
                    <FAQpage
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        handleParfumeClick={handleParfumeClick}
                        clearSearchInput={clearSearchInput}
                        addToCart={addToCart}
                        cartArray={cartArray}
                        removeFromCart={removeFromCart}
                        setCartArray={setCartArray}
                        user={user}
                        updateUser={updateUser}
                        isLogedIn={isLogedIn}
                        handleLogIn={handleLogIn}
                        logOutUser={logOutUser}
                    />} />
                <Route path="/aboutus" element={
                    <Aboutuspage
                        searchInput={searchInput}
                        isSearchOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                        handleSearchInput={handleSearchInput}
                        handleParfumeClick={handleParfumeClick}
                        clearSearchInput={clearSearchInput}
                        addToCart={addToCart}
                        cartArray={cartArray}
                        removeFromCart={removeFromCart}
                        setCartArray={setCartArray}
                        user={user}
                        updateUser={updateUser}
                        isLogedIn={isLogedIn}
                        handleLogIn={handleLogIn}
                        logOutUser={logOutUser}
                    />} /> 
                <Route path="/reset-password/:token" element={
                    <Passwordpage/>
                } />
                <Route path="/activated" element={
                    <Activatedpage/>
                } />                      
            </Routes>
        </Router>
    );
}
export default App;