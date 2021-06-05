import React, {useState} from "react";
import axios from "axios";


export default function Languages() {
 const [language, setLanguage] = useState("")

    function changeLanguageFR(e) {
        e.preventDefault();
        setLanguage("fr")
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${searchWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return 
}
