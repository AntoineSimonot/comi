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
                console.log(response)
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
      <div id="Login">        
        <form className="test" onSubmit={login}>
          
          <div>
            <h1>Connection</h1>
          </div>
          
        <div>
          <div>
            <label>Adresse mail: </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required />
          </div>
       

        
          <div> 
            <label>Mot de passe:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required />
              <a href="/register">Vous n'avez pas de compte? S'inscrire</a>
              
          </div>
        </div>
      
        <div>
          <button>Se connecter</button>
        </div>
        
        <p>{error}</p>
      </form>
    </div>

  );
};

export default Login;