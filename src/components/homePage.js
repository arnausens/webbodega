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
                        <img className='image-top__one' src='https://images.unsplash.com/photo-1520279406162-c955e67194ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80' id='imagen-home__top1'/>
                        <img className='image-top__two' src='https://images.unsplash.com/photo-1516154767575-2146adebdf32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80' id='imagen-home__top1'/>
                    </div>
                </div>
                <div ref={ref1} className='home-page__mid' id='container-home__mid'>
                    <div className='home-page__images' id='imagen-home__mid'>
                        <img className='image-top__one' src='https://images.unsplash.com/photo-1560148218-1a83060f7b32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'/>
                        <img className='image-top__two' src='https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80'/>
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
                        <img className='image-top__one' src='https://images.unsplash.com/photo-1565599837634-889309b9f5d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80'/>
                        <img className='image-top__two' src='https://images.unsplash.com/photo-1560174122-cbbf1db52c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'/>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default HomePage;
