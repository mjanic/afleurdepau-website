import './Pinksection.css';

function Pinksection(props) {
    return (
        <div className='pink-section'>
            <div className='pink-title'>
                <h1>{props.title}</h1>
            </div>
            <div className='pink-p'>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}
export default Pinksection;