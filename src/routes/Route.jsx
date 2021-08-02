// import React from 'react';
// import {
//   Route as ReactDOMRoute,
//   Redirect
// } from 'react-router-dom';
// import { Header } from '../components/Header';

// import { useAuth } from '../hooks/auth';

// export default function Route({isPrivate = false ,component:Component, ...rest}){
//   const {user} = useAuth();

//   return(
//     <ReactDOMRoute 
//       {...rest}
//       render={()=>{
//         return isPrivate === !!user 
//         ? (<Component>
//         <Header />

//         </Component> )
//         : (<Redirect to={{pathname: isPrivate ? '/' : '/batteries/dashboard'}}/>)
//       }}

//     />
//   )

// }


import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { useAuth } from '../hooks/auth';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { user } = useAuth();

  if (!(!!user) && isPrivate) {
    return <Redirect to="/" />;
  }
  if (!!user && !isPrivate) {
    return <Redirect to="/batteries/dashboard" />;
  }

  const Layout = !!user ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}