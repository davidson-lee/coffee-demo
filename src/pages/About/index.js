import React, { createRef, useState, useEffect } from 'react'
import Photos from '../../assets/photos'
import { NavLink } from 'react-router-dom'
import BrandAssets from '../../assets/brand'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { motion } from 'framer-motion'
import './styles.scss'

const About = (props) => {
    const aboutRef = createRef(null)
    const aboutSecondRef = createRef(null)

    const [first, setFirst] = useState('hidden')
    const [second, setSecond] = useState('hidden')

    useEffect(() => {
        const visible = window.scrollY > (aboutRef.current.offsetTop - aboutRef.current.offsetTop * 0.7)
        if (visible) setFirst('visible')
    }, [aboutRef])

    useEffect(() => {
        const visible = window.scrollY > (aboutSecondRef.current.offsetTop - aboutSecondRef.current.clientHeight * 1.2)
        if (visible) setSecond('visible')
    }, [aboutSecondRef])

    useScrollPosition(() => {
        const visible = window.scrollY > (aboutRef.current.offsetTop - aboutRef.current.offsetTop * 0.7)
        visible ? setFirst('visible') : setFirst('hidden')
    })

    useScrollPosition(() => {
        const visible = window.scrollY > (aboutSecondRef.current.offsetTop - aboutSecondRef.current.clientHeight * 1.2)
        visible ? setSecond('visible') : setSecond('hidden')
    })

    const scrollToAbout = (ref) => ref.current && window.scrollTo({
        top: ref.current.offsetTop - 90,
        behavior: 'smooth'
    })

    const title = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        hidden: {
            opacity: 0,

        }
    }

    const image = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5,
            }
        },
        hidden: {
            opacity: 0,
        }
    }

    const info = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 1
            }
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        }
    }

    return (
        <div className='about'>
            <img src={Photos.bg} style={{top: `10%`}} alt='bg' className='about-top-bg'/>
            <div className='about-top'>
                <motion.img initial="hidden" animate="visible" variants={image} style={{filter: `opacity(${props.cartOpen ? 0 : 100}%`}} className='about-photo-top' src={Photos.windowsill} alt='coffee break' />
                <motion.div initial="hidden" animate="visible" variants={title} className='about-top-title-container'>
                    <h2 className='about-title'>damn</h2>
                    <h2 className='about-title'>good</h2>
                    <h2 className='about-title'>coffee.</h2>
                    <div style={{display: 'flex'}}>
                        <div className='about-top-button' onClick={() => scrollToAbout(aboutRef)}>
                            <h3 className='about-top-button-text'>ABOUT VIBE</h3>
                        </div>
                        <NavLink onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='about-top-button roast' activeClassName='is-active' to='/beans'>
                            <h3 className='about-top-button-text'>OUR ROASTS</h3>
                        </NavLink>
                    </div>
                </motion.div>
            </div>
            <div className='about-bottom' ref={aboutRef}>
                <img className='about-photo-bottom' src={Photos.espresso} alt='espresso'/>  
                <motion.div initial="left" animate={first} variants={info} className='about-bottom-container'>
                    <div className='about-text-contents' style={{color: 'white', background: 'rgba(10,8,7,0.85)'}}>
                        <h1 className='about-subtitle'>vibe coffee.</h1>
                        <p className='about-text'>
                            The messaging of this brand is to stay true to the 
                            definition of “<strong>vibe</strong>”: a palpably sensed or experienced 
                            atmosphere.
                            <br /><br />
                            Whether we recognize it or not, we instinctively go through 
                            the “coffee drinking” experience. Feeling the slow 
                            release of heat through the coffee mug, with its elevating 
                            aroma, a subtle rebalancing; connecting you as equally as 
                            much with the coffee as you are with the vibe of the 
                            space. These are all instinctively triggered senses 
                            interacting with the coffee.
                        </p>
                    </div>
                    <div className="about-photo-container">

                    </div>
                </motion.div>
            </div>
            <div className='about-bottom' style={{background: 'white'}} ref={aboutSecondRef}>
                <img className='about-photo-bottom-white' src={Photos.machine} alt='espresso'/>
                <motion.div initial="right" animate={second} variants={info} className='about-bottom-container' style={{textAlign: 'right'}}> 
                    <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                        <div className='about-text-contents' style={{color: 'black', background: 'rgba(248,244,242,0.85)'}}>
                            <h1 className='about-subtitle' style={{textShadow: '0px 0px 0px'}}>it's a vibe.</h1>
                            <p>
                                While using economically efficient strategies, every bit of
                                waste from our roastery is done with environmentally 
                                aware techniques. Vibe Coffee is more than just premium 
                                beans and unique roasting techniques – it’s a lifestyle. 
                                <br /><br />
                                Vibe coffee is quickly becoming the lifestyle go-to,
                                contributing to the emerging coffee culture in the city.
                                The quality of our product, along with the combination of
                                adopted old-world techniques, will undoubtedly leaving you 
                                feeling the <strong>vibe</strong>.
                            </p>
                            <a href={BrandAssets.book} style={{color: 'white'}} download="vibecoffee_2019.pdf">
                                <h3 className='about-prospectus-button'>OUR PROSPECTUS</h3>
                            </a>
                        </div>
                        <div  className="about-photo-container">

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About