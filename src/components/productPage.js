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
                                <img className='product-image' src='https://images.unsplash.com/photo-1560148218-1a83060f7b32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1611571940159-425a28706d6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1549873916-b1bb7dc758c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1582673937754-8d0cfed5dcc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1595506071728-08ef92e2dc72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1614208406223-5b78888e8b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'/>
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
                                <img className='product-image' src='https://images.unsplash.com/photo-1593969430155-d2b315c03c6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1590457426911-84fd475f91fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1618569629551-ac5b990b1ef6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1519666213631-be6e024eac6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1568584952743-6e30d4f404eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1519420638722-a2a5749c32be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1584663639349-9398e7387244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1609607285694-e283bd2ea9a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1610273145098-311c77fe74a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
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
                                <img className='product-image' src='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                                <img className='product-image' src='https://images.unsplash.com/photo-1488477181946-6428a0291777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductsPage;
