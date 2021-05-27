import React, { useState } from 'react';
import "./QuizzContent.scss";

const QuizzContent = (props) => {

    let { title } = props

    const [currentQuestion, serCurrentQuestion] = useState(0);
    const questions = [
        {
            "id": 1,
            question: "Pour vous un contrat d'assurance vie c'est :",
            proposition: [ 
                { answerText: "L'autre nom pour une assurance de décès", isCorrect: false},
                { answerText: "Un produit d'épargne polyvalent", isCorrect: true },
                { answerText: "Un placement pour vieilles dames fortunées et qui suscite la  convoitise de proches mal intentionés", isCorrect: false},
            ],
        },
        {
            "id": 2,
            question: "Vous estimez que l'assurance-vie c'est :",
            proposition: [ 
                { answerText: "Une façon de diversifier ses investissements au sein d'un seul placement", isCorrect: true },
                { answerText: "Contraignant car l'argent est toujours bloqué et il faut attendre huit ans pour pouvoir y participer", isCorrect: false },
                { answerText: "Un produit tunnel qui ne produit des effets qu'au moment de la retraite", isCorrect: false }, 
            ],
        },
        {
            "id": 3,
            question: "La clause bénéficiaire d'un contrat c'est :",
            proposition: [ 
                { answerText: "Un moyen pour l'assureur de garder les bénéfices tout en laissant à l'assuré ses yeux pour pleurer lorsqu'il y a des pertes sur son contrat", isCorrect: false },
                { answerText: "Une étape essentielle lorsque l'assuré veut transmettre les capitaux de son contrat", isCorrect: true },
                { answerText: "Une autre manière de faire un testament sans mettre ses proches dans la confidence", isCorrect: false },
            ],
        },
        {
            "id": 4,
            question: "Combien de contrats d'assurance vie je peux détenir ?",
            proposition: [ 
                { answerText: "C'est comme le Livret A. Un seul et puis c'est tout !", isCorrect: false },
                { answerText: "C'est limité au nombres de membres composant un foyer fiscal", isCorrect: false },
                { answerText: "Autant qu'on veut.", isCorrect: true },
            ],
        },
        {
            "id": 5,
            question: "L'intérêt de souscrire une assurance-vie diminue après 70 ans parce que :",
            proposition: [ 
                { answerText: "On ne peut plus rien verser sur son contrat. L'épargne est bloquée et l'Etat veille à limiter les retraits effectués.", isCorrect: false },
                { answerText: "Par ce que c'est comme les artères, c'est moins performant sur la durée.", isCorrect: false },
                { answerText: "On peut toujours souscrire après cet âge, il y a juste une modification de la règle fiscale en matière d'abattement.", isCorrect: true },
            ],
        },
        {
            "id": 6, 
            question: "L'assurance vie ne permet d'investir que sur des fonds 'maison' et jamais sur des fonds émanant de sociétés de gestion reconnues ?",
            proposition: [ 
                { answerText: "Oh oui carrément !", isCorrect: false },
                { answerText: "Ah mais non !", isCorrect: true },
            ],
        },
        {
            "id": 7,
            question: "L'assurance vie c'est un truc de spécialiste, si tu ne connais rien à la gestion c'est foutu tu risques d'y perdre ta chemise parce que :",
            proposition: [ 
                { answerText: "C'est comme la roulette, on ne sait pas comment choisir entre les différents fonds disponibles", isCorrect: false },
                { answerText: "Tu ne peux jamais confier la gestion de ton épargne à un spécialiste des marchés", isCorrect: false },
                { answerText: "Il y a des supports dans le contrat qui sont garantis et d'autres pas. Mais on ne sait jamais lesquels.", isCorrect: true },
            ],
        },
        {
            "id": 8,
            question: "Les fonds en euros c'est comme la fonte de la banquise ça diminue d'année en année : ",
            proposition: [ 
                { answerText: "C'est vrai mais c'est un support qui permet de sécuriser son capital, le temps de guetter une nouvelle opportunité sur les marchés.", isCorrect: false },
                { answerText: "Non ça dépend entièrement de l'assureur et des réserves qu'il a pu constituer au fil des ans.", isCorrect: true },
            ],
        },
        {
            "id": 9,
            question: "Les frais d'entrée prélevés sur un contrat rognent la rentabilité d'un contrat :",
            proposition: [ 
                { answerText: "Oui", isCorrect: false },
                { answerText: "Non", isCorrect: true },
            ],
        },
        {
            "id": 10,
            question: "Quand on n'est pas content de son assurance -vie on peut toujours la transférer auprès d'un autre assureur ?",
            proposition: [ 
                { answerText: "Oui ça fonctionne de la même manière que les contrats Madelin pour les indépendants ou le PERP.", isCorrect: false },
                { answerText: "Non, on ne peut pas le faire. L'épargnant doit clôturer son contrat et en ouvrir un nouveau auprès d'un autre assureur", isCorrect: true },
            ],
        }
    ];
    const [end, setEnd] = useState(false);
    const [anwser, setAnwser] = useState('')
    const [score, setScore] = useState(0)


    const anwserQuestion = () => { 
        const nextQuestion = currentQuestion + 1
        if(nextQuestion < questions.length) {
            serCurrentQuestion(nextQuestion)
        } else {
            setEnd(true);
            console.log('dfsfsfdsdfsd');
        }
    }
    // console.log(question[incrementation].proposition);

    const verificationAnwser = () => {
        if (anwser === true){
            console.log('Cest bon');
            setScore(score + 1)
        }
    }

    const [pourcent, setPourcent] = useState(10);
    const pourcentageCalculator = () => {
        let pourcentage = ((currentQuestion+2) * 100 )/ 10;
        setPourcent(pourcentage)
    }

    return (
        <div className="QuizzContent-Body">
            <div className="title">
                <img
                onClick={() => props.setTrigger(false)}
                src="./img/mail/back.png"
                alt=""
                />
                <p>{title}</p>
            </div>
        
            <div className="quizz">
                {
                    !end ? 
                    (
                        <>
                            <div>
                                <p className="questionNum">Qestion {currentQuestion+1}/10</p>
                                <div className="pourcentage">
                                    <div style={{ width: `${pourcent}%` }}></div>
                                </div>
                                <p>{ questions[currentQuestion].question }</p>   
                            </div>
                        
                            <div className="question-option">
                                {questions[currentQuestion].proposition.map((anwserProposition) =>  ( 
                                        <div className="proposition" onClick={() => setAnwser(anwserProposition.isCorrect)}>
                                            <input className="radio" type="radio" id={anwserProposition.answerText} name="drone" value={anwserProposition.answerText}  />                  
                                            <label  for={anwserProposition.answerText} > {anwserProposition.answerText}</label>
                                        </div>
                                        
                                //  <button>{anwserProposition.answerText}</button>
                                ))
                                
                                }
                            </div>  
                            {  anwser === '' ? (
                                null
                            ):<button onClick={() => {
                                    anwserQuestion();
                                    verificationAnwser();
                                    pourcentageCalculator();
                                }}>Valider</button>
                            }
                        </>
                    ): (
                        <div className='result-page'>
                            <p>Quiz terminé !</p>
                            <div className="pourcentage">
                                <div style={{ width: `${pourcent}%`, background:'#2CC58C '}}></div>
                            </div>
                            <p> <span className="score">{score}</span> bonnes réponses sur <span className="score">10</span></p>
                            {
                                score <= 8 ? (
                                    <p className="fail">Afin de valider la formation, un total de 8 bonnes réponses est nécessaire</p>
                                ):null
                            }
                            <button className="restart" onClick={() => {
                                props.setTrigger(false)
                            }}>Recommencer</button>
                        </div>
                     )
                }

            </div>
        </div>
    );
};

export default QuizzContent;