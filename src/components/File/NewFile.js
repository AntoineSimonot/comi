import React, { useEffect, useState } from "react";
import "./newFile.scss";
const axios = require('axios').default;

const newFile = (props) => {
    let { trigger } = props
    
    
    if (trigger === true) {
        return (
            <div>
                <div className="newFile">
                    <div>
                        <div>
                            <img onClick={() => props.setTrigger(false)} src="./img/file/croix.png" alt="" srcset=""/>
                        </div>
                        <div>
                        <img src="./img/file/file.png" alt="" srcset=""/>
                            <p>Glissez les fichiers que vous voulez mettre en ligne</p>
                            <button>Sélectionner les fichier</button>
                        </div>
                    </div>
                </div>
            </div>
        );
       
    }
    else{
        return null
    }
};

export default newFile;