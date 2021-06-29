import Actor from "./Actor";
import useKeyPress from "../hooks/use-key-press";

// this is the component that listens for player input
const Player = ({ skin }) => {

  const data = {
    h: 32,
    w: 32,
  };

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  useKeyPress((event) => {
    event.preventDefault();
    const dir = event.key.replace("Arrow", "").toLowerCase();
    console.log(dir);
  });
  
  return (
    <Actor sprite={`/sprites/skins/${skin}.png`} data={data}/>
  )
};

export default Player