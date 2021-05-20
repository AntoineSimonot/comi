import React from 'react';
import "../components/Register/Register.scss";


import {
    useHistory,
    useLocation
  } from "react-router-dom";
import Auth from '../services/Auth';
const axios = require('axios').default;

const Register = () => {
    const [email, setEmail] = React.useState("");
    const [emailConfi, setEmailConfi] = React.useState("");
    const [tel, setTel] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    
    let register = (event) => {
        event.preventDefault()
        if (emailConfi === email) {
          axios({
            method: 'post',
            url: 'http://localhost:3000/user',
            data: {
              email: email,
              password: password,
              tel: tel
            }
          }).then((response) => {
            console.log("response");
          }, (error) => {
            console.log(error);
          });
          history.push('/login');
        }
      }


    return (
      <div id="Register">        
        <form className="test" onSubmit={register}>
          
          <div>
            <h1>Inscription</h1>
          </div>
          
        <div>
          <div>
            <label>Adresse email professionnelle: </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required />
          </div>
       
          <div>
            <label>Confirmation de l'adresse email </label>
            <input
              name="emailConfi"
              type="email"
              value={emailConfi}
              onChange={e => setEmailConfi(e.target.value)}
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
             
              
          </div>

          <div> 
            <label>Numéro de téléphone (facultatif)</label>
            <input
              name="tel"
              type="text"
              value={tel}
              onChange={e => setTel(e.target.value)}
              required />
            
              
          </div>
        </div>
      
        <div>
          <button>S'inscrire</button>
        </div>
        
        <p>{error}</p>
      </form>
    </div>

  );
};

export default Register;