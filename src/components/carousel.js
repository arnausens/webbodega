import React, { useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Carousel(props) {

    // useEffect( 
    //     function Controlers() {
    //         const picture = document.querySelectorAll('.bodega-page__image');
    //         const numberOfPages = Math.ceil(picture.length / 5);
    //         const carousel= document.querySelector('.bodega-page__carousel-container');

    //         for(let i = 0; i < numberOfPages; i++) {
    //         const controler = document.createElement('button');

    //         if( i === 0) {
    //             controler.classList.add('active')
    //         }
    //         document.querySelector('.controlers').appendChild(controler);
    //         controler.addEventListener('click', (e) => {
    //             carousel.scrollLeft = i * carousel.offsetWidth;
    //             document.querySelector('.controlers .active').classList.remove('active');
    //             e.target.classList.add('active');
    //         })
    //     }
    // })  
    
    function scrollToRight() {
        const carousel= document.querySelector(props.queryClass);
        carousel.scrollLeft += carousel.offsetWidth;

        // const activeControler = document.querySelector('.controlers .active');
        // if(activeControler.nextSibling) {
        //     activeControler.nextSibling.classList.add('active');
        //     activeControler.classList.remove('active');
        // }
    }

    function scrollToLeft() {
        const carousel = document.querySelector(props.queryClass);
        carousel.scrollLeft -= carousel.offsetWidth;

        // const activeControler = document.querySelector('.controlers .active');
        // if(activeControler.previousSibling) {
        //     activeControler.previousSibling.classList.add('active');
        //     activeControler.classList.remove('active');
        // }
    }

    return (
        <Fragment>
            <div className="bodega-page__title-controlers">
                <h3>{props.name}</h3>
                {/* <div className="controlers">

                </div> */}
            </div>
            <div className="bodega-page__principal-container">  
                <button onClick={scrollToLeft} role="button" id="left-arrow" className="left-arrow"><FontAwesomeIcon icon={faAngleLeft}/></button>

                <div className={props.class}>
                    <div className="bodega-page__carousel">
                        <div className="bodega-page__carousel-image">
                            <img className='bodega-page__image' src={props.image1}/>
                            <img className='bodega-page__image' src={props.image2}/> 
                            <img className='bodega-page__image' src={props.image3}/> 
                            <img className='bodega-page__image' src={props.image4}/> 
                            <img className='bodega-page__image' src={props.image5}/> 
                            <img className='bodega-page__image' src={props.image6}/>
                            <img className='bodega-page__image' src={props.image7}/>
                            <img className='bodega-page__image' src={props.image8}/>
                            <img className='bodega-page__image' src={props.image9}/>
                            <img className='bodega-page__image' src={props.image10}/>
                            <img className='bodega-page__image' src={props.image11}/>
                            <img className='bodega-page__image' src={props.image12}/>
                            <img className='bodega-page__image' src={props.image13}/>
                            <img className='bodega-page__image' src={props.image14}/>
                            <img className='bodega-page__image' src={props.image15}/>
                            <img className='bodega-page__image' src={props.image16}/>
                            <img className='bodega-page__image' src={props.image17}/>
                            <img className='bodega-page__image' src={props.image18}/>
                            <img className='bodega-page__image' src={props.image19}/>
                            <img className='bodega-page__image' src={props.image20}/>
                        </div>
                    </div>
                </div>

                <button onClick={scrollToRight} role="button" id="right-arrow" className="right-arrow"><FontAwesomeIcon icon={faAngleRight}/></button>
            </div>
        </Fragment>
    )
}

export default Carousel;
