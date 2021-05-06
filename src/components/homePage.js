import React, { useEffect } from 'react';
import {gsap} from 'gsap';

var tl = gsap.timeline();

const HomePage = () => {
    const topEndAnimationsIn = () => {
        tl
        .from("#container-home__top", {duration:1 ,opacity:0})
        .from("#content-home__top", {xPercent:-100, ease:"expo", opacity:0, duration:1})
        .from("#imagen-home__top", {xPercent:100, ease:"back", opacity:0, duration:2}, "<")
    }
    // const topEndAnimationsOut = () => {
    //     tl
    //     .to("#container-home__top", {duration:1 ,opacity:0})
    //     .to("#content-home__top", {xPercent:-100, ease:"back", opacity:0, duration:2})
    //     .to("#imagen-home__top", {xPercent:100, ease:"back", opacity:0, duration:3}, "<")
    // }
    useEffect (() => {
        topEndAnimationsIn()
    }, []);
    //     return () => topEndAnimationsOut();
    // }) 
    return (
        <div className='home-page-container'>
            <div className='home-page'>
                <div className='home-page__top' id='container-home__top'>
                    <div className='home-page__content' id="content-home__top">
                        <h3>Bodega</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='home-page__images' id='imagen-home__top'>
                        <img className='image-top__one' src='http://via.placeholder.com/300x500' id='imagen-home__top1'/>
                        <img className='image-top__two' src='http://via.placeholder.com/300x500' id='imagen-home__top1'/>
                    </div>
                </div>
                <div className='home-page__mid'>
                    <div className='home-page__images'>
                        <img className='image-top__one' src='http://via.placeholder.com/300x500'/>
                        <img className='image-top__two' src='http://via.placeholder.com/300x500'/>
                    </div>
                    <div className='home-page__content'>
                        <h3>Productos</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div> 
                </div>
                <div className='home-page__bottom'>
                    <div className='home-page__content'>
                    <h3>Degustación</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='home-page__images'>
                        <img className='image-top__one' src='http://via.placeholder.com/300x500'/>
                        <img className='image-top__two' src='http://via.placeholder.com/300x500'/>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default HomePage;
