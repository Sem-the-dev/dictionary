import React from "react";


export default function Synonyms(props) {

    if (props.synonyms) {
    return (
        <div >
        {props.synonyms.map(function(synonym, index){
            return (<ul className="synonyms">
                <li key={index}>
                    {synonym}
                </li>
                </ul>
            )
        })} 
        </div>
        )
    } else {
        return null
    }
}