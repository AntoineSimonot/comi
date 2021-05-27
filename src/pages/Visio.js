import React, { useEffect, useState } from "react";
import HeadApp from "../components/HeadApp";
import "./Visio.scss";

const Visio = () => {
    return (
    <div className="Visio-Page">
      <HeadApp></HeadApp>
      <div className="visioContent">
        <div>
            <div>
                <img src="./img/visio/plus.png" alt="" srcset=""/>
                <p>Ajouter à la conversation</p>
            </div>
        </div>
        <div>
            <div className="div">
                <div><img src="./img/visio/option.png" alt="" srcset=""/>
                </div>
                <div><p>V.L</p></div>
                <div>
                    <ul>
                        <div><p>V.L</p></div>
                        <div>
                            <img src="./img/visio/mic.png" alt="" srcset=""/>
                            <img src="./img/visio/screen.png" alt="" srcset=""/>
                            <img src="./img/visio/cam.png" alt="" srcset=""/>
                            <img src="./img/visio/raccrocher.png" alt="" srcset=""/>
                        </div>
                        <div><img src="./img/visio/grand.png" alt="" srcset=""/></div>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div><p>Robert</p></div>
                            </div>
                            <div>Salut je cherche un travail!</div>
                            <div>08:42</div>
                        </div>
                        <div>
                            <div>08:43</div>
                            <div>
                                <p>Super conférence! J'adore</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="./img/visio/points.png" alt="" srcset=""/>    
                        <input type="text" placeholder="Ecrire"></input>
                    </div>
                    <div>
                        <img src="./img/visio/send.png" alt="" srcset=""/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Visio;