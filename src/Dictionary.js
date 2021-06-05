import React, { useState } from "react";
import axios from 'axios'
import Results from './Results'
import Photos from "./Photos";
;

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [responseData, setResponseData] = useState("")
  const [language, setLanguage] = useState("en_GB");
  const [photo, setPhoto] = useState([]);


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
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${searchWord}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f917000010000018d9351ef436340f9acec5841b68eb407";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePhotosResponse);

    
  }
  function inputValue(e) {
    setSearchWord(e.target.value);
  }

  function handleDictionaryResponse(response) {
    setResponseData(response.data[0]);
   
  }
    function handlePhotosResponse(response) {

      setPhoto(response.data.photos);
    }


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

        <input
          type="search"
          autoFocus={true}
          onChange={inputValue}
          placeholder="What word are you looking for?"
          className="search-bar"
        />
      </form>
      <Results result={responseData} />
     <Photos photos={photo} />
      
    </div>
  );
}
