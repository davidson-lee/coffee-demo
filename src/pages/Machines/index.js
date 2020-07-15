import React from 'react'
import Photos from '../../assets/photos'
import './styles.css'

const Machines = (props) => {
    return (
        <div className='machines'>
            <div className='machines-top'>
                <div className='machine-top-image-container'>
                    <img className='machine-image-bg' src={Photos.machinebg} alt='machinebg' />
                    <div className='machine-image-container'>
                        <img src={Photos.machine} alt='espresso machine' className='machine-image' />
                    </div>
                </div>
                <div className='machines-top-info-container'>
                    <h1 className='nespresso-subtitle'>vibe coffee</h1>
                    <h1 className='nespresso-subtitle'>machines.</h1>
                    <p className='machines-contents'>
                        Whether it's for the kitchen counter or a cafe
                        bar in the city, we offer world-class traditional
                        and bean-to-cup  espresso machines that are sure to 
                        bring the most out of our premium roasts.
                        <br /><br />
                        For more information, feel free to get
                        in touch with us:
                        <br /><br />
                        <h5 style={{margin: 0, color: 'rgb(31,56,84)', fontSize:'1.1em'}}>416.457.7069</h5>
                        <h5 style={{margin: 0, color: 'rgb(31,56,84)', fontSize:'1.1em'}}>info@vibecoffee.com</h5>
                    </p>
                </div>
            </div>
            {/* <div className='machines-bottom'>
                <div className='machines-top-info-container' style={{marginLeft: '10%', marginTop: '10%'}}>
                    <h1 className='nespresso-subtitle' style={{width: '3.3em'}}>how it</h1>
                    <h1 className='nespresso-subtitle' style={{marginTop: '0.2em', width: '3.3em'}}>works.</h1>
                    <p className='nespresso-contents'>
                        For more information, or just some
                        <br />inspiring coffee talk, feel free to get
                        <br />in touch with us.
                    </p>
                </div>
                <img style={{top: '-25%', right: '-5%', position: 'absolute', height: '100vh'}} src={Photos.videobg} alt='video bg' />
                <div className='machine-video-container'>
                    <iframe 
                        title='How it Works.'
                        style={{width: '100%', height: '100%'}}
                        src="https://www.youtube.com/embed/e8Mf-9mZNT4" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        modestbranding={1}
                    />
                </div>
            </div> */}
        </div>
    )
}
//https://youtu.be/e8Mf-9mZNT4

export default Machines