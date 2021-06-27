import React, { useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Carousel(props) {

    useEffect( 
        function Controlers() {
            const picture = document.querySelectorAll('.bodega-page__image');
            const numberOfPages = Math.ceil(picture.length / 5);
            const carousel= document.querySelector('.bodega-page__carousel-container');

            for(let i = 0; i < numberOfPages; i++) {
            const controler = document.createElement('button');

            if( i === 0) {
                controler.classList.add('active')
            }
            document.querySelector('.controlers').appendChild(controler);
            controler.addEventListener('click', (e) => {
                carousel.scrollLeft = i * carousel.offsetWidth;
                document.querySelector('.controlers .active').classList.remove('active');
                e.target.classList.add('active');
            })
        }
    })  
    
    function scrollToRight() {
        const carousel= document.querySelector('.bodega-page__carousel-container');
        carousel.scrollLeft += carousel.offsetWidth;

        const activeControler = document.querySelector('.controlers .active');
        if(activeControler.nextSibling) {
            activeControler.nextSibling.classList.add('active');
            activeControler.classList.remove('active');
        }
    }

    function scrollToLeft() {
        const carousel = document.querySelector('.bodega-page__carousel-container');
        carousel.scrollLeft -= carousel.offsetWidth;

        const activeControler = document.querySelector('.controlers .active');
        if(activeControler.previousSibling) {
            activeControler.previousSibling.classList.add('active');
            activeControler.classList.remove('active');
        }
    }

    return (
        <Fragment>
            <div className="bodega-page__title-controlers">
                <h3>{props.name}</h3>
                <div className="controlers">

                </div>
            </div>
            <div className="bodega-page__principal-container">  
                <button onClick={scrollToLeft} role="button" id="left-arrow" className="left-arrow"><FontAwesomeIcon icon={faAngleLeft}/></button>

                <div className="bodega-page__carousel-container">
                    <div className="bodega-page__carousel">
                        <div className="bodega-page__carousel-image">
                            <img className='bodega-page__image' src="https://images.unsplash.com/photo-1569339049412-8347971f38b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"/>
                            <img className='bodega-page__image' src="https://images.unsplash.com/photo-1576661929310-a29e8fc38c7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/> 
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1522243241105-733c7bdec860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'/> 
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1574096079513-d8259312b785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'/> 
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1534706438758-534c634c4591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=629&q=80'/> 
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1556911899-5df3026220fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80v'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1553682544-4ccf2778c9a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=637&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1453856908826-6bbeda0f8490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1525576064846-083dce8b33ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1560174075-8524881c6cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=641&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1599458627935-75de57aecfaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=630&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1610218588182-9d4cb0458519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1524250426644-e24b385c291a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'/>
                            <img className='bodega-page__image' src='https://images.unsplash.com/photo-1554230561-b04b0394d4ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'/>
                        </div>
                    </div>
                </div>

                <button onClick={scrollToRight} role="button" id="right-arrow" className="right-arrow"><FontAwesomeIcon icon={faAngleRight}/></button>
            </div>
        </Fragment>
    )
}

export default Carousel;
