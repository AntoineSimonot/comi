import React, { useEffect, useState } from "react";
import "./Task.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;

const Task = (props) => {
    let { trigger, data } = props
    const [finished, setFinished ] = useState (false)

    let changeFinished = (id, finished) => {
    
        if (finished == 1) {
            let bool = 0
            axios({
                method: 'put',
                url: `http://localhost:3000/tasks?id=${id}&finished=${bool}`,
            })
            toast(`Vous avez fini la mission bravo!`)

        }
        else{
            let bool = 1
            axios({
                method: 'put',
                url: `http://localhost:3000/tasks?id=${id}&finished=${bool}`,
            })
            toast(`La mission est de nouveau en cours!`)
        }
    }

    if (trigger == true) {
        return (
            <div className="task">
                
                <img onClick={() => props.setTrigger(false)} src="./img/mail/back.png" alt="" srcset=""/>
                <h1>Voici la liste des tâches à faire pour le {data[0].date.substr(0,10)}</h1>
                {data.map((task, i) => {     
                    return (
                        <div> 
                            <p className={task.finished == 1 ? 'finished' : null}> - {task.content}</p>
                            <img onClick={() => changeFinished(task.id, task.finished)} src="./img/calendar/check_mark.png" alt="" srcset=""/>
                        </div>
                       
                        ) 
                })}
            </div>
        );
    }
    else{
        return null
    }
   
};

export default Task;