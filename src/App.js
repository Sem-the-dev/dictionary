import React from "react";
import Dictionary from './Dictionary'
import './style.css'
import Languages from './Languages'

function App() {
  return (
    <div className="App" >
      <nav>
        Languages
        <Languages />
      </nav>
      <main>
        <h1>Dictionary</h1>
        <Dictionary />
      </main>
      <footer >
        Coded by sem-the-dev 👩🏾‍💻
      </footer>
    </div>
  );
}

export default App;
