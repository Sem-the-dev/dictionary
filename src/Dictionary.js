import React, { useState } from "react";
import axios from 'axios'
import Results from './Results'
import Photos from "./Photos";
import Synonyms from "./Synonyms";

;

export default function Dictionary(props) {
  const [searchWord, setSearchWord] = useState("sunset");
  const [responseData, setResponseData] = useState("");
  const [language, setLanguage] = useState("en_GB");
  const [languageMessage, setLanguageMessage] = useState(
    "Language set to English (GB) 🇬🇧 "
  );
  const [suggestedWords, setSuggestedWords] = useState(
    "suggested words: sunset, yoga, wine"
  );
  
  const [photo, setPhoto] = useState([]);
  const [location, setLocation] = useState("");
  const [loaded, setLoaded] = useState(false)

  function changeLanguageEN(e) {
    e.preventDefault();
    alert("Language switched to English 🇬🇧 ");
    setLanguage("en_GB");
    setLocation("en-US");
    setLanguageMessage("Language set to English (GB) 🇬🇧 ");
    setSuggestedWords("suggested words: sunset, yoga, wine");
  }
  function changeLanguageFR(e) {
    e.preventDefault();
    alert("Language switched to French 🇫🇷 ");
    setLanguage("fr");
    setLocation("fr-FR");
    setLanguageMessage("Language set to French 🇫🇷 ");
    setSuggestedWords("mots suggérés: chat, plage, café");
  }

  function changeLanguageES(e) {
    e.preventDefault();
    alert("Language switched to Spanish 🇪🇸");
    setLanguage("es");
    setLocation("es-ES");
    setLanguageMessage("Language set to Spanish 🇪🇸 ");
    setSuggestedWords("palabras sugeridas: noche, playa, casa");
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchDictionary()
    e.target.reset();
  }
  function searchDictionary() {
    
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${searchWord}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f917000010000018d9351ef436340f9acec5841b68eb407";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=9&locale=${location}`;
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
  // function handleSynonym(e) {
  //   return (response.data[0].meanings[0].definitions[0].synonyms)
  // searchDictionary(e.target.innerText)
  // }
  function load(){
    setLoaded(true)
    searchDictionary()
  }
 if (loaded){
  return (
    <div className="container">
      
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
   <p className="language-message">{languageMessage}</p>
      <form onSubmit={handleSubmit}>
     
        <input
          type="search"
          autoFocus={true}
          onChange={inputValue}
          className="search-bar"
        />
      </form>
      <div className="hint">{suggestedWords}</div>
      <Results result={responseData} />
      <Photos photos={photo} />
      {/* <Synonyms synonyms={handleSynonym} /> */}
    </div>
  )
} else {
    load()
    return "Loading"
  }
}
