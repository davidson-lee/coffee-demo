import React from 'react'
import Icons from '../../assets/icons'
import './styles.css'

const Footer = (props) => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-slogan'>
                    VIBE COFFEE LTD.
                    <br />
                    <br />
                    PROUDLY ROASTED 
                    <br />IN CANADA
                </div>
                <img src={Icons.vibeNav} alt='vibe coffee' style={{position: 'absolute', margin: 'auto', top: 0, left: 0, bottom: 0, right: 0, height: '55%'}} />
                {/* <img src={Icons.vibeNav} alt='vibe coffee' style={{height: '60%'}} /> */}
                <div className='footer-slogan'>
                    info@vibecoffee.com
                    <br />416.457.7069
                    <br />
                    <br />Barrie, ON
                </div>
            </div>
        </div>
    )
}

export default Footer