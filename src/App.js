// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React from "react";

import Sidebar from "./components/Sidebar";
import Mails from "./pages/Mail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

//service
import Auth from './services/Auth'; 

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => null,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/login",
    sidebar: () => null,
    main: () => <Login />,
  },
  {
    path: "/mail",
    sidebar: () => <Sidebar />,
    main: () => <Mails />,
    auth: true
  },
  {
    path: "/register",
    sidebar: () => null,
    main: () => <Mails />,
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

if (localStorage.getItem('email')){
  Auth.isAuthenticated = true
}
else{
  Auth.isAuthenticated = false
}

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
