import './Parfumes.css';
import Parfume from './Parfume';

function Parfumes({parfumes, searchInput, handleParfumeClick}) {
    const parfumeArray = parfumes.map( (parfume, i) => {
        return <Parfume name={parfumes[i].name} url={parfumes[i].url} searchInput={searchInput} onParfumeClick={handleParfumeClick}/>
    })
    return(
        <div className='parfumes'>
            {parfumeArray}
        </div>
    )
}
export default Parfumes;