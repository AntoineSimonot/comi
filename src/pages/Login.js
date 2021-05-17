import React from 'react';
import {
    useHistory,
    useLocation
  } from "react-router-dom";
import Auth from '../services/Auth';

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    // La fonction en dessous est juste un test pour faire une fake auth
    let login = () => {
        Auth.signin(() => {
        history.replace(from);
        });
    };
    
// cree une fonction qui fetch ton api pour te log, au clique envoie les donne de ton form vers ton api

    return (
            <button onClick={ login }>Connect</button>
    );
};

export default Login;