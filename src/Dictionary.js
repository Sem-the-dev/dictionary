import React, { useState } from "react";
import axios from 'axios'
import Results from './Results'
// import Languages from "./Languages";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [responseData, setResponseData] = useState("")
  const [language, setLanguage] = useState("en_GB");


  function changeLanguageEN(e) {
      e.preventDefault();
      alert("Language switched to English 🇬🇧 ");
      setLanguage("en_GB");
      setSearchWord("")
    }
  function changeLanguageFR(e) {
      e.preventDefault();
      alert("Language switched to French 🇫🇷 ");
      setLanguage("fr")
      setSearchWord("");
    }

  function changeLanguageES(e) {
    e.preventDefault();
    alert("Language switched to Spanish 🇪🇸");
    
    setLanguage("es");
    setSearchWord("");
  }
  // function changeLanguageAR(e) {
  //   alert("Language switched to Arabic 🇵🇸");
  //   e.preventDefault();
  //   setLanguage("ar");
  // }      
  
  // function changeLanguageTR(e) {
  //   alert("Language switched to Turkish 🇹🇷");
  //   e.preventDefault();
  //   setLanguage("tr");
  // }

    

  function searchDictionary(e) {
    e.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${searchWord}`;
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
            type="button"
            value="English 🇬🇧"
            name="language"
            onClick={changeLanguageEN}
            className="language-button"
            
          />
          <input
            type="button"
            value="French 🇫🇷"
            name="language"
            onClick={changeLanguageFR}
            className="language-button"
          />
  
          <input
            type="button"
            value="Spanish 🇪🇸"
            name="language"
            onClick={changeLanguageES}
            className="language-button"
          />
   
        {/* <label>
          <input
            type="radio"
            value="Arabic"
            name="language"
            onChange={changeLanguageAR}
            className="language-button"
          />
          🇵🇸
        </label>
        <label>
          <input
            type="radio"
            value="Turkish"
            name="language"
            onChange={changeLanguageTR}
            className="language-button"
          />
          🇹🇷
        </label> */}
        <input
          type="search"
          autoFocus={true}
          onChange={inputValue}
          placeholder="What word are you looking for?"
          className="search-bar"
        />
      </form>
      <Results result={responseData} />
    </div>
  );
}
