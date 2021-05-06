import React from 'react';
import { NavLink } from "react-router-dom";

const TopComponent = () => {
    
    return (
        <div className='top-component-container'>
            <div className='top-component'>
                <div className='top-component__logo'>
                    <img className='top-component__logo-img' src='http://via.placeholder.com/430x130'/>
                </div>
                <div className='nav-bar'>
                    <NavLink className='nav-bar__inicio' to='/'>Inicio</NavLink>
                    <NavLink className='nav-bar__productos' to='/productos'>Productos</NavLink>
                    <NavLink className='nav-bar__bodega' to='/bodega'>La Bodega</NavLink>
                    <NavLink className='nav-bar__contacto' to='/contacto'>Contacto</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopComponent;
