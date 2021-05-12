// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

import Sidebar from "./components/Sidebar";
import Mails from "./pages/Mail";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => null,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/mail",
    sidebar: () => <Sidebar />,
    main: () => <Mails />,
  },
  {
    path: "*",
    sidebar: () => null,
    main: () => <NotFound />,
  },
  {
    path: "mail/:id",
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
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
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
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
    </Router>
  );
}

export default App;
