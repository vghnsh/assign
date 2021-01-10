import Button from 'antd/lib/button/button';
import React from 'react';
import './Cartitem.style.scss';
import {useStateValue} from '../../StateProvider';


    function Cartitem({data}) {

        const [,dispatch] = useStateValue();
        const addToCart=()=>{
            dispatch({
                type:'ADD_TO_CART',
                item:
                    {
                    id:data.id,
                    name:data.title,
                    imageUrl:data.imageUrl,
                    price:data.price,
                    quantity:1,
                }
            })
        }
        const removeFromCart=()=>{
            dispatch({
                type:'REMOVE_FROM_CART',
                item:
                    {
                    id:data.id,
                    name:data.title,
                    imageUrl:data.imageUrl,
                    price:data.price,
                    quantity:1,
                }
            })
        }
        const clear=()=>{
            dispatch({
                type:'CLEAR_FROM_CART',
                id:data.id
            })
        }
        const save=()=>{
            dispatch({
                type:'ADD_TO_SAVE',
                item:
                    {
                    id:data.id,
                    name:data.title,
                    imageUrl:data.imageUrl,
                    price:data.price,
                    quantity:1,
                    }
            })
            dispatch({
                type:'CLEAR_FROM_CART',
                id:data.id
            })
        }
    return (
        <div className='cart_item'>
            
            <div className='imgandcounter'>
                <div className='img'>
                    <img alt='img' height='200em' width='140em' src={data.imageUrl}></img>
                </div>
                <div className='counter'>
                    <Button onClick={removeFromCart}>-</Button>
                     {data.quantity} 
                    <Button onClick={addToCart}>+</Button>
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
                    <Button onClick={save} >Save for later</Button>
                    <Button onClick={clear}>Remove</Button>
                </div>
            </div>
        </div>
           
           
        
    )
}

export default Cartitem;
