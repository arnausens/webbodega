import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
        <div className='home-page-container'>
            <div className='home-page'>
                <div className='home-page__top'>
                    <div className='home-page__content'>
                        <h3>Bodega</h3>
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
}

export default HomePage;
