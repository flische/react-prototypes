import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Welcome from './welcome';
import OurMacarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';


export default () => {
    return (
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons}/>
            <Route path="/gifts-parties" component={GiftsParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

