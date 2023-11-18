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

function Navbar({ searchInput, isSearchOpen, toggleSearch, cartArray, 
    handleSearchInput, filterSearch, clearSearchInput }) {
    
    const cartItemCount = cartArray.length;

    return (
        <div className='navbar'>
            <div className='nav-menu'>
                <ul>
                    <li><NavLink to="/" onClick={clearSearchInput}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={clearSearchInput}>Shop</NavLink></li>
                    <li>About us</li>
                </ul>
            </div>
            <div className='mini-menu'>
                <div className='dropdown'>
                    <FontAwesomeIcon className='nav-icon' icon={faBars} />
                    <div className='dropdown-menu'>
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About Us</Link>
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
                <Link to="/"><img src={logo} className='logo-img' alt="logo" /></Link>
                <Link to="/"><h1>A fleur de Pau</h1></Link>
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
                    <FontAwesomeIcon className='nav-icon' icon={faUser} />
                    <NavLink to="/cart" onClick={clearSearchInput}>
                        <FontAwesomeIcon className='nav-icon' icon={faCartShopping} />
                        {cartItemCount > 0 && <span className="cart-count">({cartItemCount})</span>}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;