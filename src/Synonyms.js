import React, {useState} from "react";
import Dictionary from './Dictionary'

export default function Synonyms(props) {
    const [synonym, setSynonym] = useState("")
    //console.log(props.synonyms);

    function handleSynonym(e){
        console.log(e.target.innerText);
        setSynonym(e.target.innerText);
        <Dictionary synonym={synonym}/>
    }

    if (props.synonyms) {
    return (
        <div >
        {props.synonyms.map(function(synonym, index){
            return (<ul className="synonyms">
               
                <li key={index} onClick={handleSynonym}>
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