import React, { useState } from 'react';
import "./Cards.scss";

const Cards = (props) => {
    const {data} = props


    




    return (
        <div className="card" data-type={data.type}>
            <p>{data.title}</p>
            <p>{data.content}</p>
            <p>Temps nécessaire : environ {data.time}</p>
            <button>Accéder à la formation</button>
        </div>
    );
};

export default Cards;