import './App.scss';
import Battle from './components/Battle.jsx';
import Player from "./components/Player";

function App() {

  let [state, setState] = useState("WORLD");

  return (
    <>
      <div className="zone-container">
      {state === "WORLD" && (
       <Player skin="m2"/>
      )}
      </div>
      <div>
      {state === "BATTLE" && (
        <Battle />
      )}
      </div>
    </>
  );
}

export default App;
