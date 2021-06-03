import React from "react";
import Meaning from './Meaning'

export default function Results( {result} ) {
  console.log(result.word);



  if (result.word) {
    return (
      <div className="results-section">
        <h3>{result.word}</h3>
        
        <p className="phonetics">{result.phonetics[0].text}</p>  
         {result.meanings.map(function(meaning, index){
        
        return (
          <div key={index}>
              <Meaning meaning={meaning} /> 
          </div>

        )
       })}
  
      </div>
    );
  } else {
    return null;
  }
}
