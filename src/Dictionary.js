import React, { useState } from "react";
import axios from 'axios'

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [responseData, setResponseData] = useState("")


  function searchDictionary(e) {
    e.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);
    alert(keyword);
  }
  function inputValue(e) {
    setSearchWord(e.target.value);
  }

  function handleResponse(response){
      setResponseData({
        word: response.data[0].word,
        phonetics: response.data[0].phonetics[0].text,
        definition1: response.data[0].meanings[0].definitions[0].definition,
        wordType1: response.data[0].meanings[0].partOfSpeech,
        definition2: response.data[0].meanings[1].definitions[0].definition,
        wordType2: response.data[0].meanings[1].partOfSpeech,
      });
     console.log(response.data)
    // console.log(response.data[0].meanings[0].partOfSpeech);
   
  }


  return (
    <div>
      <form onSubmit={searchDictionary}>
        <input type="search" autoFocus={true} onChange={inputValue} />
      </form>
      <h3>{responseData.word}</h3>
      <p style={{ "font-style": "italic" }}>{responseData.phonetics}</p>
      <ol>
        <li>
          {responseData.wordType1}: {responseData.definition1}
        </li>
        <br />
        <li>
          {responseData.wordType2}
          : {responseData.definition2}
        </li>
      </ol>
      <p> </p>
    </div>
  );
}
