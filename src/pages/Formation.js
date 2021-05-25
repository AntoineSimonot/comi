import React, { useState } from 'react';
import Cards from '../components/Formation/Cards';
import ContentOfFormation from '../components/Formation/ContentOfFormation';
import HeadApp from '../components/HeadApp';
import "./FormationStyle/Formation.scss";





const Formation = () => {
    const [trigger, setTrigger] = useState(false)
    const [id, setId] = useState(1)
    const [type, setType] = useState('')



    const [titleFormation, setTitleFormation] = useState('')
    const [filterData, setFilterData] = useState([])

    const [cardData, setCardData] = useState([
        {
         "type" : "text",
         "title":"Lutte contre le blanchiment et le financement du Terrorisme.",
         "content": "Une formation apportant les informations concernant le blanchiment et le financement du terrorisme",
         "time": "10 minutes",
         "id": 1,
        },
        {
         "type" : "quizz",
         "title":"Les Fondamentaux de l'assurance",
         "content": "Une formation apportant les informations concernant le blanchiment et le financement du terrorisme",
         "time": "15 minutes",
         "id": 3,
        },
        {
         "type" : "video",
         "title": "Fiscalité de l'assurance vie",
         "content": "Une formation apportant les informations concernant le blanchiment et le financement du terrorisme",
         "time": "15 minutes",
         "id": 2,
        }
    ])

    



    const filterSetting = (arg) => {
        if(filterData !== arg) return setFilterData(arg)
        if(filterData == arg) return setFilterData('')
    }






    return (
        <div className='Formation-Page'>
            <HeadApp/>



            
            <div className="content-formationPage">
                <div className="trie">
                    <p>Vos formations du mois</p>
                    <div className="trie-name">
                        <button onClick={() => filterSetting('video')}>Formation vidéo</button>
                        <button onClick={() => filterSetting('text')}>Formation texte</button>
                        <button onClick={() => filterSetting('quizz')}>Formation quiz</button>
                    </div>
                </div>

                <div className="cardsFormation">
                    {
                     filterData ? // '?' veut dire 'if' dans ce cas 'y a une valeur dans filterData ?'
                      cardData.
                      filter((data) => data.type.includes(filterData)) //on filter la valeur qu'on veut map, en comparant le type avec le contrenu de filterData
                      .map((data) => (
                        <Cards data={data} setTrigger={setTrigger} setTitleFormation={setTitleFormation} setId={setId} setType={setType}/>  
                      ))
                      : // ':' veut dire 'else'. Dans ce cas on fait un map de tout les valeur si y a rien dans filderData
                      cardData.map((data) => (
                        <Cards data={data} setTrigger={setTrigger} setTitleFormation={setTitleFormation} setId={setId} setType={setType}/>
                    ))}
                </div>
                
                {trigger ?
                    <div className="popUp">
                        <ContentOfFormation setTrigger={setTrigger} title={titleFormation} id={id} type={type}/>
                    </div>
                : null
                }


            </div>
        </div>
    );
};

export default Formation;