import React from 'react';

import {
    Switch
    ,Route 
} from 'react-router-dom';

import BrandCreate from './pages/Brand/BrandCreate';
import BrandView from './pages/Brand/BrandView';
import BrandUpdate from './pages/Brand/BrandUpdate';

import StatusCreate from './pages/Status/StatusCreate';
import StatusView from './pages/Status/StatusView';
import StatusUpdate from './pages/Status/StatusUpdate';

import TypeCreate from './pages/Type/TypeCreate';
import TypeView from './pages/Type/TypeView';
import TypeUpdate from './pages/Type/TypeUpdate';

import ModeloCreate from './pages/Modelo/ModeloCreate';
import ModeloView from './pages/Modelo/ModeloView';
import ModeloUpdate from './pages/Modelo/ModeloUpdate';

import DeviceView from './pages/Device/DeviceView';
import DeviceCreate from './pages/Device/DeviceCreate';
import DeviceUpdate from './pages/Device/DeviceUpdate';

import BatteryView from './pages/Battery/BatteryView';
import BatteryCreate from './pages/Battery/BatteryCreate';
import BatteryUpdate from './pages/Battery/BatteryUpdate';

import {DashboardServices} from './pages/DashboardServices';
import {DashboardBatteries} from './pages/DashboardBatteries';
import {DashboardDevices} from './pages/DashboardDevices';

import {Service} from './pages/Service';

export default function Routes(){
    return(
            <Switch>
                <Route path="/"exact>
                    <DashboardServices/>
                </Route>
            
                <Route path="/batteries/dashboard"exact>
                    <DashboardBatteries />
                </Route>
                <Route path="/devices/dashboard"exact>
                    <DashboardDevices />
                </Route>
                <Route path="/services/dashboard"exact>
                    <DashboardServices />
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


                <Route path="/status/create">
                    <StatusCreate />
                </Route>
                <Route path="/status/update/:id">
                    <StatusUpdate />
                </Route>
                <Route path="/status/view">
                    <StatusView />
                </Route>

                <Route path="/types/create">
                    <TypeCreate />
                </Route>
                <Route path="/types/update/:id">
                    <TypeUpdate />
                </Route>
                <Route path="/types/view">
                    <TypeView />
                </Route>

                <Route path="/models/create">
                    <ModeloCreate />
                </Route>
                <Route path="/models/update/:id">
                    <ModeloUpdate />
                </Route>
                <Route path="/models/view">
                    <ModeloView />
                </Route>

                <Route path="/devices/view">
                    <DeviceView />
                </Route>
                <Route path="/devices/create">
                    <DeviceCreate />
                </Route>
                <Route path="/devices/update/:id">
                    <DeviceUpdate />
                </Route>

                <Route path="/batteries/view">
                    <BatteryView />
                </Route>
                <Route path="/batteries/create">
                    <BatteryCreate />
                </Route>
                <Route path="/batteries/update/:id">
                    <BatteryUpdate />
                </Route>

               
                {/* <Route path="/batteries">
                    <Battery />
                </Route> */}
                <Route path="/services">
                    <Service />
                </Route>
            </Switch>

    );
}