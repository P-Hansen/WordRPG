import './App.scss';
import Battle from './components/Battle.jsx';
import Player from "./components/Player";

function App() {

  return (
    <>
      <div className="zone-container">
       <Player skin="m2"/>
      </div>
      <div>
        <Battle />
      </div>
    </>
  );
}

export default App;
