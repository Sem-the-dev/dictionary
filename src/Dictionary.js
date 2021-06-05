import React, { useState } from "react";
import axios from 'axios'
import Results from './Results'

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [responseData, setResponseData] = useState("")


  function searchDictionary(e) {
    e.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);
    
  }
  function inputValue(e) {
    setSearchWord(e.target.value);
  }

  function handleResponse(response){
      setResponseData(response.data[0])
      console.log(response.data[0])}



  return (
    <div>
      <form onSubmit={searchDictionary}>
        <input
          type="search"
          autoFocus={true}
          onChange={inputValue}
          placeholder="What word are you looking for?"
        />
      </form>

      <Results result={responseData} />
    </div>
  );
}
