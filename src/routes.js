import React from 'react';

import {
    Switch
    ,Route } from 'react-router-dom';

import Brand from './pages/Brand';

import {Home} from './pages/Home';

import {Modelo} from './pages/Modelo';

import {Type} from './pages/Type'; 

import {Device} from './pages/Device';

export default function Routes(){
    return(
            <Switch>
                <Route path="/"exact>
                    <Home />
                </Route>
                <Route path="/devices">
                    <Device />
                </Route>
                <Route path="/brands">
                    <Brand />
                </Route>
                <Route path="/models">
                    <Modelo />
                </Route>
                <Route path="/types">
                    <Type />
                </Route>
            </Switch>

    );
}