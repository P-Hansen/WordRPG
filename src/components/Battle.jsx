import { useEffect, useState } from "react";
import "./Battle.scss";
import useKeyPress from "../hooks/use-key-press";

function Battle() {

    let [state, setState] = useState("SELECTACTION");
    let [selection, setSelection] = useState(0);

    let Mage1 = {
        image: "Lanto47.png",
        hp: 100,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: ["spell 1", "spell 2", "spell 3"],
    }

    let Mage2 = {
        image: "Lanto138.png",
        hp: 100,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: ["spell 1", "spell 2", "spell 3"],
    }

    let Mage3 = {
        image: "Lanto113.png",
        hp: 100,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: ["spell 1", "spell 2", "spell 3"],
    }

    let Enemy1 = {
        image: "oviraptor.png",
        hp: 100,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: ["spell 1", "spell 2", "spell 3"],
    }

    let Enemy2 = {
        image: "oviraptor.png",
        hp: 100,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: ["spell 1", "spell 2", "spell 3"],
    }

    //this should just take the input and update state but it starts an input cascade
    // window.addEventListener("keyup", (key)=>{
    //     key.preventDefault();
    //     console.log(key.key);
    //     if (key.key === 's') {
    //         setSelection(selection + 1);
    //         console.log("list selection:", selection);
    //     }
    //     if (key.key === 'w') {
    //         setSelection(selection - 1);
    //         console.log("list selection:", selection);
    //     }
    // });

    useKeyPress((event) => {
        event.preventDefault();
        const dir = event.key.replace("Arrow", "").toLowerCase();
        if (dir === "down" || dir === "up") {
            if (dir === 'down') {
                setSelection(selection + 1);
                console.log("list selection:", selection);
            }
            if (dir === 'up') {
                setSelection(selection - 1);
                console.log("list selection:", selection);
            }
        }
      });

    function attacksMenu() {
        return (
        <>
        {Mage1.attacks.map((attack, index)=>{
            if (index === selection) {
                return <>➤{attack}<br/></>
            } else {
                return <>{attack}<br/></>
            }
            })}
        </>
        )
    }

    return (
        <>
        <div className="background" style={{
            backgroundImage: 'url(/paper.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            zIndex: '-10'
        }} >
            <img className="characterImage1" style={{
                width: '33px',
                height: '33px',
                background: `url(${Mage1.image}) 0 -64px`,
                zIndex: '1'
                }} />
            <img className="characterImage2" style={{
                width: '33px',
                height: '33px',
                background: `url(${Mage2.image}) 0 -64px`,
                zIndex: '1'
                }} />
            <img className="characterImage3" style={{
                width: '33px',
                height: '33px',
                background: `url(${Mage3.image}) 0 -64px`,
                zIndex: '1'
                }} />
            <img className="enemy1" src={Enemy1.image} style={{
                width: '250px',
                height: '250px',
                zIndex: '1'
                }} />
            <img className="enemy2" src={Enemy2.image} style={{
                width: '250px',
                height: '250px',
                zIndex: '1'
                }} />
            <div className="menuBox">
                {state === "SELECTACTION" && (
                    attacksMenu()
                )}
                {state === "SELECTTARGET" && (
                    <>
                    
                    </>
                )}
            </div>
        </div>
        </>
    )
}

export default Battle