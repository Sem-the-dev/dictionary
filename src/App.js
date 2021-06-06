import React from "react";
import Dictionary from './Dictionary'
import './style.css'
import Languages from './Languages'

function App() {


return (
  <div className="App">
    <main>
      <h1>Dictionary</h1>
      <Dictionary />
    </main>
    <footer>
      Coded by{" "}
      <a
        href="https://github.com/Sem-the-dev/dictionary"
        target="_blank"
        rel="noreferrer"
        className="github-link"
      >
        sem-the-dev
      </a>{" "}
      👩🏾‍💻
    </footer>
  </div>
);
}

export default App;
