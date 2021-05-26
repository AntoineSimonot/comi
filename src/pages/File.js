import React, { useEffect, useState } from "react";
import "./File/File.scss";
import HeadApp from "../components/HeadApp";
import NewFile from '../components/File/NewFile';

const File = () => {
    const [trigger, setTrigger] = useState (false)

    const newFile = () => {
        setTrigger(true)
        console.log(trigger)
      } 
    return (

        <div className="file">
            <div>
                <ul>
                    <div>
                        <div>
                        <li>Fichier Récents</li>
                        </div>
                        <div><li>Fichier téléchargés</li></div>
                        <div><li>Fichier Partagés</li></div>
                    </div>
                    <div>
                        <div onClick={() => newFile()}><p>Mettre en ligne</p></div>
                    </div>
                </ul>
            </div>
            <div>
                <div>
                    <ul>
                        <div>
                            <p>Nom</p>
                        </div>
                        <div>
                            <p>Taile</p>
                        </div>
                        <div>
                            <p>Type</p>
                        </div>
                        <div>
                            <p>Date d'ajout</p>
                        </div>
                    </ul>
                    <ul>
                        <div>
                            <p>BRIEF IMPORTANT</p>
                        </div>
                        <div>
                            <p>120 mo</p>
                        </div>
                        <div>
                            <p>.PDF</p>
                        </div>
                        <div>
                            <p>Dimanche 5 mai</p>
                        </div>
                    </ul>
                    <ul>
                        <div>
                            <p>BRIEF IMPORTANT</p>
                        </div>
                        <div>
                            <p>120 mo</p>
                        </div>
                        <div>
                            <p>.PDF</p>
                        </div>
                        <div>
                            <p>Dimanche 5 mai</p>
                        </div>
                    </ul>
                    <ul>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                    </ul>
                    <ul>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                    </ul>
                    <ul>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                    </ul>
                    <ul>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                    </ul>
                    <ul>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                        <div>
                           
                        </div>
                        <div>
                            
                        </div>
                    </ul>
                </div>
            </div>
            <NewFile trigger={trigger} setTrigger= {setTrigger}></NewFile>
        </div>
    );
};

export default File;