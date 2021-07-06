
const MapMaker = () => {

  return(
    <div
      style={{
        position: "relative",
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "grey",
        overflow: "hidden",
        border: "1px solid black"
      }}
    >
      <div
        style={{
          position: "absolute",
          border: "1px solid black",
          top: 0,
          left: 0,
          zIndex: 100,
          width: 200,
          height: 200,
          backgroundColor: "white"
        }}
      >
      </div>
    </div>
  )

};

export default MapMaker;