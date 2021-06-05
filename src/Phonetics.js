import React from "react";


export default function Phonetics(props) {
  let audio = new Audio(props.phonetics.audio);

    function playSound(){
        audio.play();

    }
    if(props.phonetics.audio) {

    return (
    <>
    <button onClick={playSound} className="audio">
          🔊
        </button> {"  "}
    <span className="phonetics">{props.phonetics.text}</span><br/> 
    </>
    )
  } else {return (
      <>
        
        
        <span className="phonetics">{props.phonetics.text}</span><br/>
      </>)
      }
  
}

