import React, { useState, useContext } from 'react'
import Menu from './svg/bars.svg'
import Cart from './svg/shopping-cart.svg'
import Close from './svg/cross.svg'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import './css/Header.css'

function Header() {

  const [ toggle, setToggle ] = useState(false);
  const { cart } = useContext(ProductContext)

  const changeState = () => {
      setToggle(!toggle);
  }

  const closeToggle = () => {
      setToggle(!toggle);
  }
    return (
        <header>
            
            <div className='menu' onClick={changeState}>
                <img src={Menu} alt='menu' width='20' />
            </div>

            <div className='logo'>
                <h1> <Link to='/'> Nike </Link> </h1>
            </div>

            <nav>
                <ul className={ toggle ? 'toggle' : '' }>
                    <li> <Link to='/home'> Home </Link> </li>
                    <li> <Link to='/product'> Product </Link> </li>
                    <li> <Link to='/contact'> Contact </Link> </li>
                    <li> <Link to='/about'> About </Link> </li>
                    <li> <Link to='/login'> Login / Register </Link> </li>
                    <li className='close' onClick={closeToggle}>
                        <img src={Close} alt='close' width='20'/>       
                   </li>                    
                </ul>

                <div className='nav-cart'>
                    <span> {cart.length} </span>

                    <Link to='/cart'>
                    <img src={Cart} alt='cart' width='20' />
                    </Link>

                </div>
            </nav>

        </header>
        
           
    );
}

export default Header
