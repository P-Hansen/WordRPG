import Sprite from "./Sprite";

// Actor is component responsible for positioning, movements and animation of the character sprite
const Actor = () => {
  return(
    <Sprite 
    image={"/sprites/skins/m1.png"} 
    data={{
      x: 0,
      y: 0,
      w: 32,
      h: 32,
    }}
  />
  )
};

export default Actor;