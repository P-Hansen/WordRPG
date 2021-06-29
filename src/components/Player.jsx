import Actor from "./Actor";

const Player = ({ skin }) => {

  const data = {
    h: 32,
    w: 32,
  }
  
  return (
    <Actor sprite={`/sprites/skins/${skin}.png`} data={data}/>
  )
};

export default Player