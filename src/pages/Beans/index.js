import React from 'react'
import beans from './beans.js'
import nespresso from './nespresso.js'
import Product from '../../components/Product'
import './styles.scss'

const Beans = (props) => {
    return (
        <div className='beans'>
            <h2 className='beans-header'>our roasts.</h2>
            <h3 className='beans-subheader'>BEANS</h3>
            {
                beans.map((el, i) => {
                    return <Product coffee={el} key={el.name} cart={props.cart} setCart={props.setCart}/>
                })
            }

            <h3 className='beans-subheader'>NESPRESSO</h3>
            {
                nespresso.map((el, i) => {
                    return <Product coffee={el} key={el.name} cart={props.cart} setCart={props.setCart}/>
                })
            }
        </div>
    )
}

export default Beans