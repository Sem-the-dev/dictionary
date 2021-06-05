import React from "react";
import Meaning from './Meaning'
import Phonetics from "./Phonetics";

export default function Results( {result} ) {
  if (result.word) {
    return (
      <div className="results-section">
        <h3>{result.word}</h3>
        {result.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
       
        {result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
              <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
