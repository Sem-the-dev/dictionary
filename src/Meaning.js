import React from "react";
import Synonyms from './Synonyms'

export default function Meaning({ meaning }) {
 

  return (

    <div className="result-list">
      <h6 className="word-type">{meaning.partOfSpeech}</h6>

      {meaning.definitions.map(function (definition, index){
          return (
            <div key={index} className="meanings">
              
              <p>{definition.definition}</p>
              <p className="example"> {definition.example}</p>
                <Synonyms synonyms={definition.synonyms} />
              <br />
              
            </div>
          );
          
      })}
  
    </div>
  );
}