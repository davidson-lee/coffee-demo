import React, { useEffect } from 'react'
import './styles.css'

const Cart = ({cart, setCart, cartOpen}) => {

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <div style={{display: cartOpen ? "block" : "none"}}className="cart-container">
            {
                cart.length > 0
                    ? cart.map((el, i) => {
                        return (
                            <p key={i}>
                                name: {el.name}
                                <br />
                                {
                                    el.grind ? `grind: ${el.grind}` : null
                                }
                                {
                                    el.grind ? <br /> : null
                                }
                                quantity: {el.quantity}
                                <br />
                                price: {el.unitPrice}
                                <br />
                                total: {el.totalPrice}
                                <br />
                            </p>
                        )
                    })
                    : null
            }
            {
                cart.length > 0 
                    ?   <p>Total: {cart.map(el => el.totalPrice).reduce((acc, cur) => acc = acc + cur)}</p>
                    : null
            }
        </div>
    )
}

export default Cart