import './App.scss';
import { useState } from "react";
import Battle from './components/Battle.jsx';
import Player from "./components/Player";
import characters from './helpers/characters';
import MapMaker from "./components/MapMaker";
import letters from './helpers/Letters';

function App() {

  let [state, setState] = useState("BATTLE");

  return (
    <>
      <div className="zone-container">
          {state === "WORLD" && (
          <Player skin="f1"/>
          )}
      </div>
      <div>
          {state === "EDIT" && (
            <MapMaker />
          )}
      </div>
      <div>
          {state === "BATTLE" && (
            <Battle characters={characters} letters={letters} />
          )}
      </div>
    </>
  );
}

export default App;
