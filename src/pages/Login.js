import React from 'react';
import "../components/Login/Login.scss";


import {
    useHistory,
    useLocation
  } from "react-router-dom";
import Auth from '../services/Auth';
const axios = require('axios').default;


// getter
// localStorage.getItem('myData');

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    
    let login = (event) => {
        event.preventDefault()
        axios.get(`http://localhost:3000/user?email=${email}&password=${password}`).then(function (response) {
            console.log(response.data.status )
            if (response.data.status !== "404") {
                localStorage.setItem('email', response.data.data[0].email);
                Auth.signin(() => {
                history.push('/mail');
                });
            }
            else{
                setError("Veillez renseinger un email et un mot de passe valide")
            }
        })
    };


    return (
        <form className="test" onSubmit={login}>
        <h1>Create Account</h1>
        
        
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />
        </label>
  
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required />
        </label>
  

        <button>Submit</button>
        <p >{error}</p>
      </form>
    );
};

export default Login;