import React from 'react';
import 'antd/dist/antd.css';
import {Card,Button} from 'antd';
import './Card1.style.scss';
import {useStateValue} from '../../StateProvider';

function Card1({data}) {
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

    const { Meta } = Card;
    return (
        <div style={{padding:'2em'}}>
            <Card 
                    
                    style={{ width: 250 }}
                    cover={
                    <img
                        alt="example"
                        src={data.imageUrl}
                        height='250'
                        width='150'
                    />
                    }
                >
                <Button className='Card_btn' onClick={addToCart}>Add to Cart</Button>
                    
                    <Meta
                        title={data.title}
                        description={data.description}
                        
                    />
                </Card>
        </div>
        
    )
}

export default Card1;
