import React from 'react';

import {
    Switch
    ,Route 
} from 'react-router-dom';

import BrandCreate from './pages/Brand/BrandCreate';
import Brand from './pages/Brand/Brand';
import BrandUpdate from './pages/Brand/BrandUpdate';

import StatusCreate from './pages/Status/StatusCreate';
import Status from './pages/Status/Status';
import StatusUpdate from './pages/Status/StatusUpdate';

import TypeCreate from './pages/Type/TypeCreate';
import Type from './pages/Type/Type';
import TypeUpdate from './pages/Type/TypeUpdate';

import {Home} from './pages/Home';

import {Modelo} from './pages/Modelo';


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
                    <Brand />
                </Route>


                <Route path="/status/create">
                    <StatusCreate />
                </Route>
                <Route path="/status/update/:id">
                    <StatusUpdate />
                </Route>
                <Route path="/status/view">
                    <Status />
                </Route>

                <Route path="/types/create">
                    <TypeCreate />
                </Route>
                <Route path="/types/update/:id">
                    <TypeUpdate />
                </Route>
                <Route path="/types/view">
                    <Type />
                </Route>

            

                <Route path="/models">
                    <Modelo />
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