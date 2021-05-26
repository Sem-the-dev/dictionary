import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function searchDictionary(e) {
    e.preventDefault();
    alert(keyword );
  }
  function inputValue(e) {
    setKeyword(e.target.value);
  }

  return (
    <div>
      <form onSubmit={searchDictionary}>
        <input type="search" autoFocus={true} onChange={inputValue} />
      </form>
    </div>
  );
}
