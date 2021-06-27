import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { useInView } from 'react-intersection-observer';

var tl = gsap.timeline();

const ProductsPage = () => {

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
        .to('#container-product__top', {duration:0.5 ,opacity:1})
        .from("#content-product__top", {scale:0 , ease:"power1.in", opacity:0 , duration:1})
        .from('#imagen-product__top', {scale:0, ease:"power1.in", opacity:0 , duration:1, delay:0.5}, "<")
    }
    const midAnimationsIn = () => {
        tl
        .to('#container-product__mid', {duration:0.5 ,opacity:1})
        .from("#content-product__mid", {scale:0 , ease:"power1.in", opacity:0 , duration:1})
        .from('#imagen-product__mid', {scale:0, ease:"power1.in", opacity:0 , duration:1, delay:0.5}, "<")
    }
    const bottomAnimationsIn = () => {
        tl
        .to('#container-product__bottom', {duration:0.5 ,opacity:1})
        .from("#content-product__bottom", {scale:0 , ease:"power1.in", opacity:0 , duration:1})
        .from('#imagen-product__bottom', {scale:0, ease:"power1.in", opacity:0 , duration:1, delay:0.5}, "<")
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
        <div className='product-page-container'>
            <div className='product-page'>
                    <div ref={ref} className='product-page__top' id='container-product__top'>
                        <div className='product-page__content' id="content-product__top">
                            <h3>Vino, cava y champagne</h3>
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className='product-page__images' id='imagen-product__top'>
                            <div className="product-scroll">
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                            </div>
                        </div>
                    </div>
                    <div ref={ref1} className='product-page__mid' id='container-product__mid'>
                        <div className='product-page__content' id="content-product__mid">
                            <h3>Conservas gourmet, patés, salsas...</h3>
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div> 
                        <div className='product-page__images' id='imagen-product__mid'>
                            <div className="product-scroll">
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                            </div>
                        </div>
                    </div>
                    <div ref={ref2} className='product-page__bottom'  id='container-product__bottom'>
                        <div className='product-page__content' id="content-product__bottom">
                        <h3>Nuestros platillos de degustación</h3>
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className='product-page__images' id='imagen-product__bottom'>
                            <div className="product-scroll">
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                                <img className='product-image' src='http://via.placeholder.com/300x400'/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductsPage;
