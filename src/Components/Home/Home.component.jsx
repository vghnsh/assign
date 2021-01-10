import React,{useEffect,useState} from 'react';
import {product} from '../../product';
import Card1 from '../Product/Card1.component';
import './Home.style.scss';
function Home() {
    const [item,setitem]= useState();
    
    useEffect(()=>{
        setitem(product);
        console.log(product);
    },[]);

    return (
        <div className='home_page'>
            {
                 item?.items?.map((i1)=>(
                     <Card1 key={i1.id} data={i1}></Card1>
                 ))
            }
        </div>
    )
}

export default Home;
