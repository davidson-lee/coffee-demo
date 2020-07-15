import React from 'react'
import Photos from '../../assets/photos'
import Icons from '../../assets/icons'
import './styles.css'

const Contact = () => {
    return (
        <div className='contact-popout'>
            <div className='contact-container'>
                <div className='contact-description'>
                    <h3 className='contact-title'>
                        in a nutshell,
                    </h3>
                    <div className='contact-description-contents'>
                        <div className='contact-description-what'>
                            <h5 className='contact-subtitle'>
                                WHAT WE OFFER:
                            </h5>
                            <div className='contact-description-list'>
                                <ul>
                                    <li>
                                        Premium Roasted Beans
                                        <ul style={{paddingLeft: '2em'}}>
                                            <li>2lb Bags</li>
                                            <li>14oz Bags</li>
                                        </ul>
                                    </li>
                                    <li>Espresso Vacuum Packed Bags</li>
                                    <li>Nespresso Compatible Capsules</li>
                                    <li>Coffee Frac Packs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='contact-description-what'>
                            <h5 className='contact-subtitle'>
                                WHO WE OFFER IT TO:
                            </h5>
                            <div className='contact-description-list'>
                                <ul >
                                    <li>Residential & Offices</li>
                                    <li>Cafes, Restaurants, 
                                        <p style={{margin: 0, paddingLeft: '1em'}}>& food service establishments</p>     
                                    </li>
                                    <li>Grocery Stores</li>
                                    <li>Retail</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-getintouch'>
                    <img className='contact-bg' alt='contact splash' src={Photos.contactbg} />
                    <h3 className='contact-title-get'>
                        get in touch.
                    </h3>
                    <div className='contact-information-list'>
                        <h5 className='contact-subtitle' style={{marginTop: 0}}>
                            VIBE COFFEE LTD.
                        </h5>
                        <p className='contact-information-list-items'>
                            info@vibecoffee.com
                            <br />416.457.7069
                            <br />Barrie, ON
                            <br /><br />Proudly roasted in Canada
                            <img src={Icons.canada} style={{height: '30px', width: '30px', filter: 'invert(100%)'}} alt='canada' />
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact