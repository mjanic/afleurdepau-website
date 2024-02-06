import './Reviews.css'
import Pinksection from './Pinksection';

function Reviews (){
    return(
        <div>
        <Pinksection
                title= 'See what others are saying...'
                paragraph= 'The reviews from ones of our loyal customers'
        />
        <div className='features reviews'>
            <div className='feature review'>                
                <h1>Geraldine</h1>
                <h3>☆☆☆☆☆</h3>
                <p>I am buyig candles every month and i am very happy, they smell amazing and they look beautifull.</p>              
            </div>          
            <div className='feature review'>                
                <h1>Anais</h1>
                <h3>☆☆☆☆☆</h3>
                <p>My colegue told me about how her daughter is making candles and broth them to us to see, i was amased and now when i dont have idea for a gift i know where to look.</p>              
            </div>  
            <div className='feature review'>                
                <h1>Nadia</h1>
                <h3>☆☆☆☆☆</h3>
                <p>I am hair sallon owner and i made a deal with Pauline to offer her candles to my clients, we sold out a lot so i give green light all shop owners to make busines with A fleur de Pau.</p>              
            </div> 
        </div>
        </div>
    )
}
export default Reviews;