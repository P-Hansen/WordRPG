import Sprite from "./Sprite";

// Actor is component responsible for positioning, movements and animation of the character sprite
const Actor = ({sprite, data, step = 0, dir = 0, position={ x: 0, y: 0 }}) => {
  const { h, w } = data;

  return(
    <Sprite 
    image={sprite}
    position={position}
    data={{
      x: step * w,
      y: dir * h,
      w,
      h,
    }}
  />
  )
};

export default Actor;