import { useEffect, useState } from "react";

const MapMaker = () => {

  const [position, setPosition] = useState({ x:0, y:0 });

  useEffect(() => {
    const handle = document.getElementById("handle")
    handle.addEventListener("mousedown", (event) => {
      event.preventDefault();
      handle.style.pointerEvents = "none"

      document.body.addEventListener("mousemove", move)
      document.body.addEventListener("mouseup", () => {
        document.body.removeEventListener("mousemove", move)
        handle.style.pointerEvents = "intial"
      });
    });

    function move(event) {
      const pos = {
        x: event.clientX,
        y: event.clientY,
      };

      setPosition(pos);
    };

    return () => {
      document.body.removeEventListener("mousedown", move);
      document.body.removeEventListener("mousedup", move);
      document.body.removeEventListener("mousemove", move);
      handle.removeEventListener("mousedown", move);
    };

  }, []);

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
          top: position.y,
          left: position.x,
          zIndex: 100,
          width: 200,
          height: 200,
          backgroundColor: "white"
        }}
      >
        <img id="handle" src="/mapEditor/drag-handle.png" alt="handle" />
      </div>
    </div>
  )

};

export default MapMaker;