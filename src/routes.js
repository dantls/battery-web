import React from 'react';

import {
    Switch
    ,Route 
} from 'react-router-dom';

import BrandCreate from './pages/Brand/BrandCreate';
import BrandView from './pages/Brand/BrandView';
import BrandUpdate from './pages/Brand/BrandUpdate';

import {Home} from './pages/Home';

import {Modelo} from './pages/Modelo';

import {Type} from './pages/Type'; 

import {Status} from './pages/Status'; 

import {Device} from './pages/Device';

import {Battery} from './pages/Battery';

import {Service} from './pages/Service';

export default function Routes(){
    return(
            <Switch>
                <Route path="/"exact>
                    <Home />
                </Route>
                <Route path="/devices">
                    <Device />
                </Route>

                <Route path="/brands/create">
                    <BrandCreate />
                </Route>
                <Route path="/brands/update/:id">
                    <BrandUpdate />
                </Route>
                <Route path="/brands/view">
                    <BrandView />
                </Route>

                <Route path="/models">
                    <Modelo />
                </Route>
                <Route path="/types">
                    <Type />
                </Route>
                <Route path="/status">
                    <Status />
                </Route>
                <Route path="/batteries">
                    <Battery />
                </Route>
                <Route path="/services">
                    <Service />
                </Route>
            </Switch>

    );
}