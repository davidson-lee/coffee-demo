import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../assets/icons'
import Cart from '../Cart'
import './styles.css'

const Header = ({cart, setCart, cartOpen, handleCart}) => {

    return (
        <div className='header' >
            <div className='menu-items'>
                <Link to='/about' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <img src={Icons.vibeNav} className='header-logo' alt='vibe coffee'/>
                </Link>

                <Link to='/beans' className='menu-item' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    SHOP
                </Link>
            </div>
            
            <div className='toggle-contact'>
                <div style={{opacity: cartOpen ? '0' : '1' }} className="cartIcon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="cart-item-count">{cart.length}</span>
                </div>
                <div className={`contact${cartOpen ? ' open' : ''}`} onClick={handleCart}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <Cart cartOpen={cartOpen} cart={cart} setCart={setCart} />
            </div>
        </div>
    )
}

export default Header