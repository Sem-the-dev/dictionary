import React from "react";

export default function Meaning({ meaning }) {
  console.log(meaning);

  return (

    <div className="result-list">
      <h6 className="word-type">{meaning.partOfSpeech}</h6>

      {meaning.definitions.map(function (definition, index){
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <p className="example"> {definition.example}</p>
              <br/>
            </div>
          );
      })}
  
    </div>
  );
}