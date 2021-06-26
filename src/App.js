import './App.scss';
import Battle from './components/Battle.jsx';
import Sprite from "./components/Sprite";

function App() {
  return (
    <>
      <div className="zone-container">
        <Sprite 
          image={"/sprites/skins/m1.png"} 
          data={{
            x: 0,
            y: 0,
            w: 32,
            h: 32,
          }}
        />
      </div>
      <div>
        <Battle />
      </div>
    </>
  );
}

export default App;
