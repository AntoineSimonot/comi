import React, { useState } from 'react';
import "./Cards.scss";
import ContentOfFormation from './ContentOfFormation';

const Cards = (props) => {
    const {data} = props



  



    return (
        <div className="card" data-type={data.type}>
            <p>{data.title}</p>
            <p>{data.content}</p>
            <p>Temps nécessaire : environ {data.time}</p>
            <button className="btn-card"  data-type={data.type} onClick={() => {
                props.setTrigger(true) 
                props.setTitleFormation(data.title)
                props.setId(data.id)
                props.setType(data.type)
                }}>
              Accéder à la formation
            </button>
            
            
            

        </div>
    );
};

export default Cards;