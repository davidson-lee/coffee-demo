import React from 'react'
import Photos from '../../assets/photos'
import Products from '../../assets/products'
import './styles.css'

const Nespresso = (props) => {
    return (
        <div className='nespresso'>
            <div className='nespresso-img-container'>
                <img className='nespresso-capsules-bg' src={Photos.nespressobg} alt='nespresso-bg' />
                <img src={Products.twoCapsules} alt='nespresso' className='nespresso-capsules' />
            </div>
            <div className='nespresso-info-container'>
                <h1 className='nespresso-subtitle'>vibe coffee</h1>
                <h1 className='nespresso-subtitle'>x nespresso.</h1>
                <p className='nespresso-contents'>
                    We have custom designed and imported
                    technology that recreates the premium
                    quality of the Nespresso Coffee Pods. We are
                    proud to offer Nespresso compatible pods to
                    elevate our superior coffee roasts.
                    <br /><br />
                    
                    <h5 style={{margin: 0, color: 'rgb(31,56,84)', fontSize:'1.1em'}}>This product will be made available in fall 2019.</h5>
                </p>
            </div>
        </div>
    )
}

export default Nespresso