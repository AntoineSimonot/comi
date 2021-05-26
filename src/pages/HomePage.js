import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import "./HomePage.scss";


const Homepage = () => {
    let history = useHistory();
    return (
        <div className="homePage">
            <div>
                <header>
                    <img class="logo" src="./img/homepage/logo.png" alt="oui"/>
                    <ul>
                        <li onClick={() => history.push('/register') }>S'inscrire</li>
                        <li onClick={() => history.push('/login')}><span class="connect">Se connecter</span></li>
                    </ul>
                </header>
                <div class="container1">
                    <div class="sentence1">
                        <h2>Vous cherchez à amplifier seul vos compétences grâce à un seul outil ?</h2>
                        <p class="space">Ne cherchez plus ! Comi est une application vos promettant un accompagnement et une aide dans la gestion de travail de chacun. Facile à prendre en main et accessible, notre plateforme saura mettre en avant les compétences de travail de n'importe qui avec un confort de travail optimal !</p>
                        <div class="btn">
                            <button class="btn1">Ouvrir sur le navigateur</button>
                            <button class="btn2">Tarifs</button>
                        </div>
                    </div>
                    <div class="image">
                        <img class="visio" src="./img/homepage/page visio.png" alt="oui"/>
                    </div>
                </div>
                <div class="container2">
                    <div class="titleContainer2">
                        <h2 class="firstH2">Notre volonté ?</h2>
                        <h2 class="secondH2">sublimer VOS compétences</h2>
                    </div>
                    <p>Soyez à la pointe de l'efficacité grâce à Comi, vous permettant une gestion de vos travaux dans le secteur bancaire  à la pointe de la nouveauté !  </p>
                    <div class="rectangle"></div>
                </div>
                <div class="container3">
                    <div>
                        <img class="formation" src="./img/homepage/Page formation.png"alt="oui"/>
                    </div>
                    <div class="titleContainer3">
                        <h2>Formez vous facilement !</h2>
                        <p> Grâce à Comi, ayez une gestion de vos formations optimales, clair et précise.</p>
                    </div>
                </div>
                <div class="container4">
                    <div class="titleContainer4">
                        <h2>Ayez une bonne gestion E-Mailing !</h2>
                        <p>Gagnez du temps grâce à une gestion simple de vos contacts adaptée pour tous.</p>
                    </div>
                    <div class="mailContainer4">
                        <img class="mail" src="./img/homepage/page mail.png" alt="oui"/>
                    </div>
                </div>
                <div class="container5">
                    <div>
                        <img class="fichier" src="./img/homepage/page fichier.png" alt="oui"/>>
                    </div>
                    <div class="titleContainer5">
                        <h2>La fiabilité et la sécurité de vos données confidentielles !</h2>
                        <p>Ayez une gestion clair et ergonomique de vos fichiers pour un gain de temps et une meilleure performance de travail.</p>
                    </div>
                </div>
                <div class="container6">
                    <div class="titleContainer6">
                        <h2>Une gestion de votre emploi du temps optimal !</h2>
                        <p>Une grande accessibilité au niveau de calendrier afin de gérer ses rendez-vous, réunion et formations.</p>
                    </div>
                    <div>
                        <img class="calendrier" src="./img/homepage/CALENDRIER.png" alt="oui"/>
                    </div>
                </div>

                <div class="banktitle">
                    <h2>Les différentes banques associées</h2>
                    <div class="rectangle2"></div>
                </div>

                <div class="container7">
                    <div class="list1">
                        <img class="icon" src="./img/homepage/CA.png"alt="oui"/>
                        <img class="icon" src="./img/homepage/Axa.png"alt="oui"/>
                        <img class="icon" src="./img/homepage/bnp.png"alt="oui"/>
                        <img class="icon" src="./img/homepage/BanquePopulaire.png"alt="oui"/>
                        <img class="icon" src="./img/homepage/société générale.png"alt="oui"/>
                        <img class="icon" src="./img/homepage/Allianz.png"alt="oui"/>
                        <img class="icon" src="./img/homepage/cic.png"alt="oui"/>
                    </div>
                    <div class="list2">
                        <img class="icon2" src="./img/homepage/cetelem.png"alt="oui"/>
                        <img class="icon2" src="./img/homepage/banque postale.png"alt="oui"/>
                        <img class="icon2" src="./img/homepage/caisse d'épargne.png"alt="oui"/>
                        <img class="icon2" src="./img/homepage/hsbc.png"alt="oui"/>
                    </div>
                </div>
                <div class="container8">
                    <h2 class="data">Vos données sont confidentielles</h2>
                    <img class="cadena" src="./img/homepage/cadena.png"alt="oui"/>
                    <h3 class="confid">Clause de confidentialité à ce jour</h3>
                    <p class="protect">Ne vous inquiétez pas vos données seront protégé ! Vous retrouverez en souscrivant à notre offre une clause de confidentialité mettant en avant notre capacité à garder vos données sécurisées.</p>
                </div>
                <div class="container9">
                    <h2>Faites confiance à Comi pour VOS équipes</h2>
                    <p>Ne ratez rien à nos offres !</p>
                    <button class="start">commencer</button>
                </div>
                <div class="footer">
                    <img class="eye" src="./img/homepage/eye.png"alt="oui"/>
                    <ul class="ul1">
                        <li><h3>Contact</h3></li>
                        <li>Epitech Digital</li>
                        <li>95 avenue parmentier</li>
                        <li>75011 Paris</li>
                    </ul>
                    <ul class="ul2">
                        <li><h3>Nos services</h3></li>
                        <li>application</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                    <ul class="ul3">
                        <li><h3>Nous suivre</h3></li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                    <ul class="ul4">
                        <li><h3>Actualités</h3></li>
                        <li>Partenaires</li>
                        <li>Blog</li>
                        <li>Presse</li>
                    </ul>
                </div>
                <footer>
                    <ul>
                        <li><h3>© 2021 Comy. Tous les droits sont réservés</h3></li>
                        <li><h3>Polituque de confidentialité</h3></li>
                        <li><h3>Conditions d'utilisations</h3></li>
                        <li><h3>Sécurité</h3></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
};

export default Homepage;