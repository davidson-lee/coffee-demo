import React, {useState, createRef, useEffect} from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { motion } from 'framer-motion'
import './styles.scss'
import Options from './options.js'

const Product = ({coffee, cart, setCart}) => {
    const prodRef = createRef(null)

    const [activeOption, setActiveOption] = useState(coffee.options[0])
    const [quantity, setQuantity] = useState(0)

    const [grind, setGrind] = useState(coffee.options[0].size !== "1 box" ? 0 : null)

    const [variant, setVariant] = useState('hidden')

    useEffect(() => {
        const visible = window.innerHeight > window.innerWidth 
            ?
                window.scrollY > (prodRef.current.offsetTop - prodRef.current.clientHeight * 0.7)
            :   
                window.scrollY > (prodRef.current.offsetTop - prodRef.current.clientHeight * 1.2)
        if (visible) setVariant('visible')
    }, [prodRef])

    useScrollPosition(() => {
        const visible = window.innerHeight > window.innerWidth 
            ?
                window.scrollY > (prodRef.current.offsetTop - prodRef.current.clientHeight * 0.7)
            :   
                window.scrollY > (prodRef.current.offsetTop - prodRef.current.clientHeight * 1.2)
        visible ? setVariant('visible') : setVariant('right')
    })

    const handleChange = (e) => {
        if (!isNaN(e.target.value)) {
            if (parseInt(e.target.value) > 0) {
                setQuantity(parseInt(e.target.value))
            } else if (e.target.value === "") {
                setQuantity(0)
            }
        } 
    }

    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 1
            }
        },
        visible: {
            opacity: 1,
            transition: 0.5
        }
    }

    return (
        <div className='product-container' style={{background: coffee.col}} ref={prodRef}>

            <motion.div initial='hidden' animate={variant} variants={variants} className='product-image-container'>
                <img className='product-image-bg' src={coffee.bg} alt='splash' />
                {
                    coffee.options.map((el, i) => {
                        return (
                            <img key={i} style={el.size === "1 box" ? {width: '33%'} : {}} className={`product-image ${activeOption === el ? 'active-image' : ''} ${el.size === "1 box" ? 'nespresso' : ''}`} src={el.image} alt={el.name} />
                        )
                    })
                }
                
            </motion.div>

            <motion.div initial='hidden' animate={variant} variants={variants} className='product-description-container'> 

                <h3 className='product-name'>
                    {coffee.name}
                </h3>
                <p className='product-price'>${activeOption.price}</p>
                <p className='product-roast'>
                    {coffee.roast}
                </p>
                <p className='product-description'>
                    {coffee.description}
                </p>

                <div className='product-selector-container'>
                    {
                        coffee.options.map((el, i) => {
                            return (
                                <p key={i} onClick={() => setActiveOption(el)} className={`size-selector${activeOption === el ? "-active" : "-inactive"}`}>{el.size}</p>
                            )
                        })
                    }
                    <div className='quant-selector-container'>
                        <p onClick={(e) => { 
                            e.preventDefault()
                            if (quantity > 0) setQuantity(quantity - 1)}
                        } className="quant-selector">-</p>
                        <input className="quant-input" type="text" onChange={handleChange} value={quantity} />
                        <p onClick={(e) => { 
                            e.preventDefault()
                            setQuantity(quantity + 1) 
                        }} className="quant-selector">+</p>
                    </div>
                </div>

                {
                    coffee.options[0].size !== "1 box"
                        ? 
                            <div className='grind-selector-container'>
                                {
                                    Options.map((option, i) => {
                                        return (
                                            i === grind 
                                                ?
                                                    <div key={option.name} className='grind-selector-option active-grind'>
                                                        <p className="grind-selector">
                                                            <img src={option.icon} alt={option.name} className='grind-icon'/>
                                                        </p>
                                                        <p className="grind-selector-name">
                                                            {option.name}
                                                        </p>
                                                    </div>
                                                :
                                                    <div key={option.name} className='grind-selector-option' onClick={() => { setGrind(i) }}>
                                                        <p className="grind-selector">
                                                            <img src={option.icon} alt={option.name} className='grind-icon'/>
                                                        </p>
                                                        <p className="grind-selector-inactive-name">
                                                            {option.name}
                                                        </p>
                                                    </div>
                                        )
                                    })
                                }         
                            </div>
                        :
                                null
                }
                

                <p onClick={(e) => { 
                    e.preventDefault()
                    if (quantity > 0)
                    setCart([...cart, {
                        name: coffee.name,
                        quantity: quantity,
                        grind: grind ? Options[grind].name : grind,
                        unitPrice: activeOption.price,
                        totalPrice: activeOption.price * quantity
                    }]) 
                }} className="cart-add">ADD TO CART</p>
            </motion.div>
        </div>
    )
}

export default Product