import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HeadApp from "../components/HeadApp";
import "./Calendar.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Task from "../components/Mail/Task";
const axios = require('axios').default;

const Calendrier = () => {

    const [value, setValue] = useState(new Date());
    const [trigger, setTrigger] = useState (false)
    const [data, setData] = useState({})

    const onChange = (value) => {
        setValue(value)
       
        axios({
            method: 'get',
            url: `http://localhost:3000/tasks?id=${localStorage.getItem("id")}&date=${value.toLocaleDateString().replaceAll('/', '-').split("-").reverse().join("-")}`,
          }).then((response) => {
            if (response.data.status == 200){
              setData(Object.values(response.data.data))
              console.log(Object.values(response.data.data))
              setTrigger(true)
            }
            else(
              toast(`Vous n'avez rien de prévu pour le ${value.toLocaleDateString().replaceAll('/', '-').split("-").reverse().join("-")}`)
            )
            
          }, (error) => {
            console.log(error);
          });


      } 

    return (
        <div className="Calendar-Page">
            <div> </div>
            <div>
                <Calendar value={value} onChange={onChange}/>
            </div>
            <ToastContainer />
            <Task trigger={trigger} setTrigger= {setTrigger} data={data}></Task>
        </div>
    );
};

export default Calendrier;