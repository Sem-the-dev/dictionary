import React, {useState, useEffect} from "react";
import Meaning from './Meaning'
import Phonetics from "./Phonetics";
import LastSearched from "./LastSearched";

export default function Results( {result} ) {
  const [lastSearched, setLastSearched] = useState("");

  // useEffect(() => {
  //   setLastSearched(result.word)
  // }, [])
 

  if (result.word) {
   
    return (
      
      <div className="results-section">
        <section>
        <h3>{result.word}</h3>
        
        {result.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}</section>
        {/* <LastSearched lastSearched={localStorage.getItem("message")} /> */}
     
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
