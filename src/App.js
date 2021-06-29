import './App.scss';
import Battle from './components/Battle.jsx';
import Actor from "./components/Actor";

function App() {

  const data = {
    h: 32,
    w: 32,
  }

  return (
    <>
      <div className="zone-container">
       <Actor sprite={`/sprites/skins/m2.png`} data={data}/>
      </div>
      <div>
        <Battle />
      </div>
    </>
  );
}

export default App;
