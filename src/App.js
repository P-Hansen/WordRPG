import './App.scss';
import { useState } from "react";
import Battle from './components/Battle.jsx';
import Player from "./components/Player";
import characters from './helpers/characters';

function App() {

  let [state, setState] = useState("BATTLE");

  return (
    <>
      <div className="zone-container">
      {state === "WORLD" && (
       <Player skin="m2"/>
      )}
      </div>
      <div>
      {state === "BATTLE" && (
        <Battle characters={characters} />
      )}
      </div>
    </>
  );
}

export default App;
