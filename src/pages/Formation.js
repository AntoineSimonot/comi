import React, { useState } from 'react';
import Cards from '../components/Formation/Cards';
import HeadApp from '../components/HeadApp';
import "./FormationStyle/Formation.scss";





const Formation = () => {

    const [cardData, setCardData] = useState([
        {
         "type" : "text",
         "title":"Lutte contre le blanchiment et le financement du Terrorisme.",
         "content": "Une formation apportant les informations concernant le blanchiment et le financement du terrorisme",
         "time": "10 minutes"
        },
        {
         "type" : "quizz",
         "title":"Les Fondamentaux de l'assurance",
         "content": "Une formation apportant les informations concernant le blanchiment et le financement du terrorisme",
         "time": "15 minutes"
        },
        {
         "type" : "video",
         "title":"Les Fondamentaux de l'assurance",
         "content": "Une formation apportant les informations concernant le blanchiment et le financement du terrorisme",
         "time": "15 minutes"
        },
        {
         "type" : "video",
         "title":"Les Fondamentaux de l'assurance",
         "content": "Une formation apportant les informations concernant le blanchiment et le financement du terrorisme",
         "time": "15 minutes"
        }
    ])









    return (
        <div className='Formation-Page'>
            <HeadApp/>
            <div className="content-formationPage">
                <div className="trie">
                    <p>Vos formations du mois</p>
                    <div className="trie-name">
                        <span>Formation vidéo</span>
                        <span>Formation texte</span>
                        <span>Formation quiz</span>
                    </div>
                </div>

                <div className="cardsFormation">
                    {cardData.map((data) => ( 
                    <Cards data={data} />
                    ))}
                </div>



            </div>
        </div>
    );
};

export default Formation;