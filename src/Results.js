import React from "react";

export default function Results( {result} ) {
    if(result.word){
  return (
    <div className="results-section">
      <h3>{result.word}</h3>
      <p className="phonetics">{result.phonetics}</p>

      <ul className="result-list">
        <li>{result.wordType1}</li>
        <li>{result.definition1}</li>
        <br />
        <li>
          {result.wordType2}
        </li>
        <li>
          {result.definition2}
        </li>
      </ul>
    </div>
  );}
  else {
      return null
  }
}
