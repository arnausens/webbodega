import React from 'react';

const TopComponent = () => {
    return (
        <div className='top-component-container'>
            <div className='top-component'>
                <div className='top-component__logo'>
                    <img className='top-component__logo-img' src='http://via.placeholder.com/430x130'/>
                </div>
                <div className='nav-bar'>
                    <div className='nav-bar__inicio'>Inicio</div>
                    <div className='nav-bar__productos'>Productos</div>
                    <div className='nav-bar__bodega'>La Bodega</div>
                    <div className='nav-bar__contacto'>Contacto</div>
                </div>
            </div>
        </div>
    );
};

export default TopComponent;
