import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from './carousel';

const BodegaPage = () => {

    return (
        <div className='bodega-page__container'>
            <Carousel name="Terraza"/>
        </div>
    )
}

export default BodegaPage;


