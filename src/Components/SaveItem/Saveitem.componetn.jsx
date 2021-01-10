
import React from 'react';


    function Saveitem({data}) {

       
       
    return (
        <div className='cart_item'>
            
            <div className='imgandcounter'>
                <div className='img'>
                    <img alt='img' height='200em' width='140em' src={data.imageUrl}></img>
                </div>
                <div className='counter'>
                   
                     {data.quantity} 
                    
                </div>   
            </div>
            <div className='data_part'>
                <div className='title_part'>
                    {data.title}
                </div>
                <div className='price_part'>
                    ₹{data.price * data.quantity}
                </div>
                <div className='cart_btns'>
                    
                </div>
            </div>
        </div>
           
           
        
    )
}

export default Saveitem;
