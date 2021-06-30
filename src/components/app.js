import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopComponent from "./topComponent";
import BottomPage from './bottomPage';
import HomePage from './homePage';
import ProductsPage from './productPage';
import BodegaPage from './bodegaPage';
import ContactPage from './contactPage';




export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Router>
                    <TopComponent/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path="/productos" component={ProductsPage}/>
                        <Route path="/bodega" component={BodegaPage}/>
                        <Route path="/contacto" component={ContactPage}/>
                    </Switch>
                    <BottomPage/>
                </Router>
            </div>
        );
    }
}
