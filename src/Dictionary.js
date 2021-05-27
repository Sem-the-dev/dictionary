import React, { useState } from "react";
import axios from 'axios'

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function searchDictionary(e) {
    e.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse);
    alert(keyword);
  }
  function inputValue(e) {
    setKeyword(e.target.value);
  }

  function handleResponse(response){
    console.log(response.data)
  }


  return (
    <div>
      <form onSubmit={searchDictionary}>
        <input type="search" autoFocus={true} onChange={inputValue} />
      </form>
      <h3>{keyword}</h3>
    </div>
  );
}
