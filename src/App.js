// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React from "react";

import Sidebar from "./components/Sidebar";
import Mails from "./pages/Mail";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Calendrier from "./pages/Calendrier";
import File from "./pages/File";
import HomePage from "./pages/HomePage";
//service
import Auth from './services/Auth'; 
import Formation from "./pages/Formation";
import Visio from "./pages/Visio";


if (localStorage.getItem('email')){
  Auth.isAuthenticated = true
}
else{
  Auth.isAuthenticated = false
}



const routes = [
  
  {
    path: "/register",
    sidebar: () => null,
    main: () => <Register />,
  },
  {
    path: "/login",
    sidebar: () => null,
    main: () => <Login />,
    auth: false
  },
  {
    path: "/mail",
    sidebar: () => <Sidebar />,           
    main: () => <Mails />,                
    auth: true                            
  },
 
  {
    path: "/file",
    sidebar: () => <Sidebar />,
    main: () => <File />,        
    auth: true                        
  },
  {
    path: "/formation",
    sidebar: () => <Sidebar />,
    main: () => <Formation />,        
    auth: true                        
  },
  {
    path: "/visio",
    sidebar: () => <Sidebar />,
    main: () => <Visio />,        
    auth: true                        
  },
  {
    path: "mail/:id",
    sidebar: () => null,
    main: () => <NotFound />,
    auth: true
  },
  {
    path: "/calendar",
    sidebar: () => <Sidebar />,
    main: () => <Calendrier />,
    auth: true
  },
  {
    path: "/",
    sidebar: () => null,
    main: () => <HomePage></HomePage>,
    auth: false
  },
  {
    path: "*",
    sidebar: () => null,
    main: () => <NotFound />,
  }
];


function App() {
  const isLogged = true;

  return (
    <Router>
        <div className="body">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
    

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={ ({ location }) => { 
                  if (route.auth)
                    {
                      return (
                        Auth.isAuthenticated ? (<route.main />) : (<Redirect to={{ pathname: '/', state:{ from: location } }}/> )
                      ) 
                    } else
                    {
                      return ((<route.main />))
                    }
                  }
                }
              />
            ))}
          </Switch>
        </div>
    </Router>
  );
}

export default App;
