import './Features.css'
import Pinksection from './Pinksection';

function Features (){
    return(
        <div>
        <Pinksection
                title= 'Features'
                paragraph= 'Chaque notre bougie souivre le reglement stricte et passe le testing. Alors parce que cest fait main chaque bougie est unique. '
        />
        <div className='features'>
            <div className='feature'>               
                <img src="../assets1/soya-wax232.jpg" alt="hand candle" /> 
                <h1>100% Soya Wax</h1>              
            </div>          
            <div className='feature'>                
                <img src="../assets1/handmade232.jpg" alt="pitcher" />    
                <h1>Fait Main </h1>           
            </div>
            <div className='feature'>               
                <img src="../assets1/parfumes-image232.jpg" alt="parfume" />  
                <h1>Parfumes natureles</h1>             
            </div>
        </div>
        </div>
    )
}
export default Features;