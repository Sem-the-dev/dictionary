import React from "react";

export default function Results( {result} ) {
    if(result.word){
  return (
    <>
      <h3>{result.word}</h3>
      <p style={{ "font-style": "italic" }}>{result.phonetics}</p>
      
      <ol>
        <li>
          {result.wordType1}: {result.definition1}
        </li>
        <br />
        <li>
          {result.wordType2}: {result.definition2}
        </li>
      </ol>
    </>
  );}
  else {
      return null
  }
}
