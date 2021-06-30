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

    let enemyArray = [
    {
        name: "Oviraptor",
        image: "oviraptor.png",
        hp: 100,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: ["spell 1", "spell 2", "spell 3"],
    },
    {
        name: "Oviraptor",
        image: "oviraptor.png",
        hp: 50,
        armor: 5,
        dodge: 15,
        speed: 6,
        resistance: 3,
        attacks: ["spell 1", "spell 2", "spell 3"],
    }
    ]

    useKeyPress((event) => {
        event.preventDefault();
        const dir = event.key.replace("Arrow", "").toLowerCase();
        //controls for selecting action
        if (state === "SELECTACTION") {
            if (dir === "down" || dir === "up" || dir === "enter") {
                if (dir === 'down') {
                    setSelection((selection + 1) > Mage1.attacks.length-1 ? Mage1.attacks.length-1 : selection + 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'up') {
                    setSelection((selection - 1) < 0 ? 0 : selection - 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'enter') {
                    setSelection(0);
                    setState("SELECTTARGET");
                };
            }
        //controls for selecting target
        } else if (state === "SELECTTARGET") {
            if (dir === "down" || dir === "up" || dir === "enter") {
                if (dir === 'down') {
                    setSelection((selection + 1) > enemyArray.length-1 ? enemyArray.length-1 : selection + 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'up') {
                    setSelection((selection - 1) < 0 ? 0 : selection - 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'enter') {
                    setSelection(0);
                    setState("ACTION");
                };
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
    };

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
            <img className="enemy1" src={enemyArray[0].image} style={{
                width: '250px',
                height: '250px',
                zIndex: '1'
                }} />
            <img className="enemy2" src={enemyArray[1].image} style={{
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
                        Name: {enemyArray[selection].name}<br/>
                        Hp: {enemyArray[selection].hp}<br/>
                        Armor: {enemyArray[selection].armor}<br/>
                        Dodge: {enemyArray[selection].dodge}<br/>
                        Speed: {enemyArray[selection].speed}<br/>
                        Resistance: {enemyArray[selection].resistance}
                    </>
                )}
            </div>
        </div>
        </>
    )
}

export default Battle