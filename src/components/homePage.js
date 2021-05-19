import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { useInView } from 'react-intersection-observer';

var tl = gsap.timeline();

const HomePage = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
    });
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0
    });
    
    const topAnimationsIn = () => {
        tl
        .to('#container-home__top', {duration:0.5 ,opacity:1})
        .from("#content-home__top", {xPercent:-100, ease:"expo", opacity:0 , duration:1.5})
        .from('#imagen-home__top', {xPercent:100, ease:"back", opacity:0 , duration:1.5}, "<")
    }

    const midAnimationsIn = () => {
        tl
        .to('#container-home__mid', {duration:0.5 ,opacity:1})
        .from("#content-home__mid", {xPercent:100, ease:"expo", opacity:0 , duration:1.5})
        .from('#imagen-home__mid', {xPercent:-100, ease:"back", opacity:0 , duration:1.5}, "<")
    }

    const bottomAnimationsIn = () => {
        tl
        .to('#container-home__bottom', {duration:0.5 ,opacity:1})
        .from("#content-home__bottom", {xPercent:-100, ease:"expo", opacity:0 , duration:1.5})
        .from('#imagen-home__bottom', {xPercent:100, ease:"back", opacity:0 , duration:1.5}, "<")
    }
    
    useEffect(() => {
    if (inView) {
        topAnimationsIn();
    } 
    }, [inView]);

    useEffect(() => {
    if (inView1) {
        midAnimationsIn();
    } 
    }, [inView1]);

    useEffect(() => {
    if (inView2) {
        bottomAnimationsIn();
    } 
    }, [inView2]);
    

    return (
        <div className='home-page-container'>
            <div className='home-page'>
                <div ref={ref} className='home-page__top' id='container-home__top'>
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
                <div ref={ref1} className='home-page__mid' id='container-home__mid'>
                    <div className='home-page__images' id='imagen-home__mid'>
                        <img className='image-top__one' src='http://via.placeholder.com/300x500'/>
                        <img className='image-top__two' src='http://via.placeholder.com/300x500'/>
                    </div>
                    <div className='home-page__content' id="content-home__mid">
                        <h3>Productos</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div> 
                </div>
                <div ref={ref2} className='home-page__bottom'  id='container-home__bottom'>
                    <div className='home-page__content' id="content-home__bottom">
                    <h3>Degustación</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='home-page__images' id='imagen-home__bottom'>
                        <img className='image-top__one' src='http://via.placeholder.com/300x500'/>
                        <img className='image-top__two' src='http://via.placeholder.com/300x500'/>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default HomePage;
