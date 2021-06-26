import './App.scss';
import Battle from './components/Battle.jsx';
import Actor from "./components/Actor";

function App() {
  return (
    <>
      <div className="zone-container">
       <Actor />
      </div>
      <div>
        <Battle />
      </div>
    </>
  );
}

export default App;
