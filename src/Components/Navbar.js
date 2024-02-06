import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import Cartpage from '../Pages/Cartpage';
import { useState } from 'react';
import Profile from './Profile';
import Account from './Account';

function Navbar({ searchInput, isSearchOpen, toggleSearch, cartArray, 
    handleSearchInput, filterSearch, clearSearchInput, removeFromCart, setCartArray, 
    user, updateUser, isLogedIn, handleLogIn, logOutUser }) {
    
    const cartItemCount = cartArray.length;

    const [isCartOpen, setCartOpen] = useState(false);
    const handleCartIconClick = () => {
        setCartOpen(!isCartOpen);
        clearSearchInput();
    };

    const [isProfileOpen, setProfileOpen] = useState(false);
    const handleProfileIconClick = () => {
        setProfileOpen(!isProfileOpen);
        clearSearchInput();
    };
    const goTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        clearSearchInput();
    }

    return (
        <div className='navbar'>
            <div className='nav-menu'>
                <ul>
                    <li><NavLink to="/" onClick={goTop}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={goTop}>Shop</NavLink></li>
                    <li><NavLink to="/aboutus" onClick={goTop}>About us</NavLink></li>
                </ul>
            </div>
            <div className='mini-menu'>
                <div className='dropdown'>
                    <FontAwesomeIcon className='nav-icon' icon={faBars} />
                    <div className='dropdown-menu'>
                        <Link to="/" onClick={goTop}>Home</Link>
                        <Link to="/shop" onClick={goTop}>Shop</Link>
                        <Link to="/aboutus" onClick={goTop}>About Us</Link>
                    </div>
                </div>                
                    <FontAwesomeIcon className='nav-icon' icon={faMagnifyingGlass} onClick={toggleSearch}/>
                        <div className={`${isSearchOpen ? 'dropdown-search-open' : 'dropdown-search'}`}>
                            <Searchbar
                                isSearchOpen={isSearchOpen} 
                                searchInput={searchInput}
                                toggleSearch={toggleSearch}
                                handleSearchInput={handleSearchInput}
                                filterSearch={filterSearch}
                            />
                        </div>               
            </div>
            <div className='nav-logo'>               
                <Link to="/" onClick={goTop}><img src={logo} className='logo-img' alt="logo" /></Link>
                <Link to="/" onClick={goTop}><h1>A fleur de Pau</h1></Link>
            </div>
            <div className='nav-searchbar'>
                <div className='nav-search'>
                    <FontAwesomeIcon className='nav-icon' icon={faMagnifyingGlass} onClick={toggleSearch}/>
                        <div className={`${isSearchOpen ? 'dropdown-search-open' : 'dropdown-search'}`}>
                            <Searchbar
                                isSearchOpen={isSearchOpen} 
                                searchInput={searchInput}
                                toggleSearch={toggleSearch}
                                handleSearchInput={handleSearchInput}
                                filterSearch={filterSearch} 
                            />
                        </div>
                </div>
                <div className='nav-icons'>
                    <div className='profile-link'>
                        <FontAwesomeIcon className='nav-icon' icon={faUser} onClick={handleProfileIconClick} />
                        {isProfileOpen && (
                            isLogedIn ? (<Account 
                                            handleProfileIconClick={handleProfileIconClick}
                                            handleLogIn={handleLogIn}
                                            user={user}
                                            logOutUser={logOutUser}
                                            updateUser={updateUser} />) 
                                        : (<Profile 
                                            handleProfileIconClick={handleProfileIconClick}
                                            handleLogIn={handleLogIn}
                                            updateUser={updateUser} />)               
                        )}
                    </div>
                    <div className='cart-link' >
                        <FontAwesomeIcon className='nav-icon' onClick={handleCartIconClick} icon={faCartShopping} />
                        {isCartOpen && (<Cartpage
                            cartArray={cartArray}
                            setCartArray={setCartArray}
                            removeFromCart={removeFromCart}
                            handleCartIconClick={handleCartIconClick}
                        />)}  
                        {cartItemCount > 0 && <span className="cart-count" onClick={handleCartIconClick}>({cartItemCount})</span>}                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;