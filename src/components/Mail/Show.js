import React from 'react';
import "./Show.scss";


const Show = (props) => {
    let { id } = props
    console.log(id)
    return (
        <div className="show">
            <div>

            </div>
            <div>
                <div>
                    <h1>{id.title} (Objet du mail)</h1>
                    <ul>
                        <img src="" alt="" srcset=""/>
                        <img src="" alt="" srcset=""/>
                        <img src="" alt="" srcset=""/>
                    </ul>
                </div>
               
                <p> {id.content}</p>
            </div>
            {/* <div>

            </div>
            <div>
                <div>
                    <p></p>
                </div>
            </div>
           
             */}
        </div>
    );
};

export default Show;