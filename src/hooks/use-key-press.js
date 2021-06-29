import { useEffect } from "react";

// this function listens for keypress made by the player

const useKeyPress = (callBack) => {

  useEffect(() => {
    window.addEventListener("keydown", callBack);
    return () => window.removeEventListener("keydown", callBack)
  }, [callBack]);

};


export default useKeyPress