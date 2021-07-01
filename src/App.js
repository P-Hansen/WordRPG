import './App.scss';
import { useState } from "react";
import Battle from './components/Battle.jsx';
import Player from "./components/Player";

function App() {

  let [state, setState] = useState("BATTLE");

  let Mage1 = {
    image: "Lanto47.png",
    hp: 100,
    armor: 2,
    dodge: 10,
    speed: 5,
    resistance: 5,
    attacks: [{name:"spell 1", description: "description here", dmg: 100}, {name:"spell 2", description: "description here", dmg: 200}, {name:"spell 3", description: "description here", dmg: 50}],
  }

  let Mage2 = {
      image: "Lanto138.png",
      hp: 100,
      armor: 2,
      dodge: 10,
      speed: 5,
      resistance: 5,
      attacks: [{name:"spell 4", description: "description here", dmg: 100}, {name:"spell 5", description: "description here", dmg: 200}, {name:"spell 6", description: "description here", dmg: 50}],
  }

  let Mage3 = {
      image: "Lanto113.png",
      hp: 100,
      armor: 2,
      dodge: 10,
      speed: 5,
      resistance: 5,
      attacks: [{name:"spell 7", description: "description here", dmg: 100}, {name:"spell 8", description: "description here", dmg: 200}, {name:"spell 9", description: "description here", dmg: 50}],
  }

  return (
    <>
      <div className="zone-container">
      {state === "WORLD" && (
       <Player skin="m2"/>
      )}
      </div>
      <div>
      {state === "BATTLE" && (
        <Battle characters={[Mage1, Mage2, Mage3]} />
      )}
      </div>
    </>
  );
}

export default App;
