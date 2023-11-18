import { useNavigate } from 'react-router-dom';
import './Parfume.css';


function Parfume(props) {
    const {name, url, onParfumeClick} = props
    const navigate = useNavigate();
    function searchUpdate() {
        navigate('/shop');
        setTimeout(() => {
            const productGrid = document.querySelector('.product-grid');
            if (productGrid) {
              productGrid.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        onParfumeClick(name);
    }
    
    return (
        <div className='parfume'>
                <img src={`assets1/parfumes/${url}`} alt=""  onClick={searchUpdate}/>
                <h2>{name}</h2>
        </div>
    )
}
export default Parfume;