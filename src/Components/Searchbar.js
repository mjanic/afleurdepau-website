import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';




function Searchbar({toggleSearch, searchInput, handleSearchInput}) {
    
    const navigate = useNavigate();
    function searchUpdate() {
        navigate('/shop');
        setTimeout(() => {
            const productGrid = document.querySelector('.product-grid');
            if (productGrid) {
              productGrid.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        

    }
    function handleChange(event) {       
        handleSearchInput(event);
        searchUpdate();
    }
    
    const searchInputRef = useRef(null);

    useEffect(() => {
        // Focus on the input element when the component mounts
        searchInputRef.current.focus();
    }, []);

    return(
        <div className='search-bar'>
            <input 
                ref={searchInputRef}
                className="search-input" 
                type="text" 
                placeholder="search products..."
                value={searchInput}
                onChange={handleChange}
            />
            <div className='exit'>
                <FontAwesomeIcon className='nav-icon' icon={faCircleXmark} onClick={toggleSearch} />
            </div>
        </div>
    )
}
export default Searchbar;