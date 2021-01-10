import React from 'react';
import './Header.style.scss';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../StateProvider'; 

import {Button} from 'antd';
import {getQuant} from '../../Reducer';

function Header() {
const [{cart}]=useStateValue();



console.log(cart);
    return (
        <div className='header'>
            <div className='logo'>
                <img style={{height:'4em',width:'10em'}} alt='img' src={logo}></img>
            </div>
            <div className="Search-Field">
                <input></input>
            </div>
            <div> 
            <Link to='/cart'> <Button> CART {getQuant(cart)} </Button>
            </Link>      
            </div>
        </div>
    )
}
export default Header;
