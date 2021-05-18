// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React from "react";

import Sidebar from "./components/Sidebar";
import Mails from "./pages/Mail";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

//service
import Auth from './services/Auth'; 
import Formation from "./pages/Formation";


if (localStorage.getItem('email')){
  Auth.isAuthenticated = true
}
else{
  Auth.isAuthenticated = false
}



const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => null,                  // L'etat specifiant si la page requiert une sidebar 
    main: () => <h2>Home</h2>,            // Page afficher sur le path en question
    auth: false                           // L'etat specifiant si la page requiert une autification
  },
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
    path: "/formation",
    sidebar: () => <Sidebar />,
    main: () => <Formation />,        
    auth: true                        
  },
  {
    path: "mail/:id",
    sidebar: () => null,
    main: () => <NotFound />,
    auth: true
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
                        Auth.isAuthenticated ? (<route.main />) : (<Redirect to={{ pathname: '/login', state:{ from: location } }}/> )
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
