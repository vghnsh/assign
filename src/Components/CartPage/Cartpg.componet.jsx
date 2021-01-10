import React from 'react';
import {useStateValue} from '../../StateProvider';
import Cartitem from '../CartItem/Cartitem.component';
import Saveitem from '../SaveItem/Saveitem.componetn';
import {getTotal} from '../../Reducer';
import './Cartpg.style.scss';
function Cartpg() {
    const [{cart,save}]= useStateValue();
    console.log(cart.length);
    console.log(cart);
    console.log(save);
    return (
        <div className='Main_cart'>
            {
                cart?.length   > 0 ? 
                <div className='Main_cart'> 
                    
                    <div className='cart_items'>
                        <b><i>CART</i></b>
                    {
                        cart?.map((c1)=>(
                            <Cartitem key={c1.id} data={c1}/>
                        ))
                    }
                    </div>
                
                    <div className='cart_price'>
                        Total : ₹{getTotal(cart)}
                    </div>
                <div>
                {
                    save?.length > 0 ?
                    
                        <div>
                            <b><i>SAVED</i></b>
                        {
                            save?.map((c1)=>(
                                <Saveitem key={c1.id} data={c1}/>
                            ))
                        }
                        
                        </div>
                        
                    :
                    ''
                }
            
        
            </div>
                </div> 
                  
            :
            <b><i>Cart is Empty</i></b>
            }
            
        </div>
    )
}

export default Cartpg;
