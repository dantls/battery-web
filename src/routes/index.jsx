import React from 'react';
import Route from './Route';
import {
    Switch
} from 'react-router-dom';

import SignIn from '../pages/SignIn';

import BrandCreate from '../pages/Brand/BrandCreate';
import BrandView from '../pages/Brand/BrandView';
import BrandUpdate from '../pages/Brand/BrandUpdate';

import StatusCreate from '../pages/Status/StatusCreate';
import StatusView from '../pages/Status/StatusView';
import StatusUpdate from '../pages/Status/StatusUpdate';

import TypeCreate from '../pages/Type/TypeCreate';
import TypeView from '../pages/Type/TypeView';
import TypeUpdate from '../pages/Type/TypeUpdate';

import ModeloCreate from '../pages/Modelo/ModeloCreate';
import ModeloView from '../pages/Modelo/ModeloView';
import ModeloUpdate from '../pages/Modelo/ModeloUpdate';

import DeviceView from '../pages/Device/DeviceView';
import DeviceCreate from '../pages/Device/DeviceCreate';
import DeviceUpdate from '../pages/Device/DeviceUpdate';

import BatteryView from '../pages/Battery/BatteryView';
import BatteryCreate from '../pages/Battery/BatteryCreate';
import BatteryUpdate from '../pages/Battery/BatteryUpdate';

import {DashboardServices} from '../pages/DashboardServices';
import {DashboardBatteries} from '../pages/DashboardBatteries';
import {DashboardDevices} from '../pages/DashboardDevices';

import {Service} from '../pages/Service';

export default function Routes(){
    return(

            <Switch>
                <Route component={SignIn} path="/"exact />
            
                <Route isPrivate path="/batteries/dashboard" component={DashboardBatteries} exact />
                <Route isPrivate path="/devices/dashboard" component={DashboardDevices} exact />
                <Route isPrivate path="/services/dashboard" component={DashboardServices} exact />
               
                <Route isPrivate path="/brands/create" component={BrandCreate} exact />
                <Route isPrivate path="/brands/view" component={BrandView} exact />
                <Route isPrivate path="/brands/update/:id" component={BrandUpdate} exact/> 

                <Route isPrivate path="/batteries/view" component={BatteryView} exact/>    
                <Route isPrivate path="/batteries/create" component={BatteryCreate} exact/>    
                <Route isPrivate path="/batteries/update/:id" component={BatteryUpdate} exact/> 

                <Route isPrivate path="/status/view" component={StatusView} exact/>    
                <Route isPrivate path="/status/create" component={StatusCreate} exact/>    
                <Route isPrivate path="/status/update/:id" component={StatusUpdate} exact/> 

                <Route isPrivate path="/types/view" component={TypeView} exact/>    
                <Route isPrivate path="/types/create" component={TypeCreate} exact/>    
                <Route isPrivate path="/types/update/:id" component={TypeUpdate} exact/>  

                <Route isPrivate path="/models/view" component={ModeloView} exact/>    
                <Route isPrivate path="/models/create" component={ModeloCreate} exact/>    
                <Route isPrivate path="/models/update/:id" component={ModeloUpdate} exact/>  

                <Route isPrivate path="/devices/view" component={DeviceView} exact/>    
                <Route isPrivate path="/devices/create" component={DeviceCreate} exact/>    
                <Route isPrivate path="/devices/update/:id" component={DeviceUpdate} exact/>  

                
                <Route isPrivate path="/services" component={Service}exact />
            </Switch>
    );
}