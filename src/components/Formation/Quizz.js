import React, { useEffect, useState }from 'react';
import "./Quizz.scss";
import marked from 'marked'
import QuizzContent from './QuizzContent';


const Quizz = (props) => {

    let { type, id} = props

    const [content, setContent] = useState('')
    const [trigger, setTrigger] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:3000/markdown?file=${id}`).then((res) =>{
        if (!res.ok) {
            console.log('Not Found')
        }
        res.text().then((text) => setContent(text))
        })
    },[])













    return (
        <div className="Body-Quizz" data-type={type}>
            <div dangerouslySetInnerHTML={{__html: marked(content)}}/>
            <button onClick={() => setTrigger(true)}>Je valide la formation</button>
            <div>
                {trigger ?
                        <div className="popUp">
                            <QuizzContent setTrigger={setTrigger} title={props.title} /> 
                        </div>
                    : null
                }
            </div>
        </div>
            
    );
};

export default Quizz;