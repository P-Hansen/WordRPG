import { useEffect, useState } from "react";
import "./Battle.scss";
import useKeyPress from "../hooks/use-key-press";

function Battle(props) {

    let [state, setState] = useState("SELECTACTION");
    let [selection, setSelection] = useState(0);
    let [attack, setAttack] = useState({});
    let [activePlayer, setActivePlayer] = useState(0);
    let [letters, setLetters] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

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
    }];

    let [enemies, setEnemies] = useState(enemyArray);

    useKeyPress((event) => {
        event.preventDefault();
        const dir = event.key.replace("Arrow", "").toLowerCase();
        //controls for selecting action
        if (state === "SELECTACTION") {
            if (dir === "down" || dir === "up" || dir === "enter") {
                if (dir === 'down') {
                    setSelection((selection + 1) > props.characters[activePlayer].attacks.length-1 ? props.characters[activePlayer].attacks.length-1 : selection + 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'up') {
                    setSelection((selection - 1) < 0 ? 0 : selection - 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'enter') {
                    //save attack for later once target is selected
                    setAttack(props.characters[activePlayer].attacks[selection]);
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
                    //deal dmg
                    console.log("hp before", enemies[selection].hp);
                    enemies[selection].hp -= attack.dmg;
                    console.log("hp after", enemies[selection].hp);
                    setState("SELECTACTION");
                    //switch to next player in the array
                    if ((activePlayer + 1) >= props.characters.length) {
                        setActivePlayer(0);
                    } else {
                        setActivePlayer(activePlayer + 1);
                    }
                    setSelection(0);
                };
            }
        }
    });

    //show a list of the active players attacks and an arrow in front of the currently selected one
    function attacksMenu() {
        return (
        <>
        {props.characters[activePlayer].name}<br/><br/>
        {props.characters[activePlayer].attacks.map((attack, index)=>{
            if (index === selection) {
                return <>➤ {attack.name} {attack.description} {attack.dmg} Damage<br/></>
            } else {
                return <>{attack.name} {attack.description} {attack.dmg} Damage<br/></>
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
            <div className="characterImage1">
            {state === "SELECTACTION" && activePlayer === 0 && (<div>➤</div>)}
            <img style={{
                width: '33px',
                height: '33px',
                background: `url(${props.characters[0].image}) 0 -64px`,
                zIndex: '1'
                }} />
            </div>
            <div className="characterImage2">
            {state === "SELECTACTION" && activePlayer === 1 && (<div>➤</div>)}
            <img style={{
                width: '33px',
                height: '33px',
                background: `url(${props.characters[1].image}) 0 -64px`,
                zIndex: '1'
                }} />
            </div>
            <div className="characterImage3">
            {state === "SELECTACTION" && activePlayer === 2 && (<div>➤</div>)}
            <img style={{
                width: '33px',
                height: '33px',
                background: `url(${props.characters[2].image}) 0 -64px`,
                zIndex: '1'
                }} />
            </div>
            <div className="enemy1" >
                {selection === 0 && state === "SELECTTARGET" && (enemies[0].hp > 0) && (<div>➤</div>)}
                {(enemies[0].hp > 0) && <img src={enemies[0].image} style={{
                    width: '250px',
                    height: '250px',
                    zIndex: '1'
                    }} />}
            </div>
            <div className="enemy2" >
                {selection === 1 && state === "SELECTTARGET" && (enemies[1].hp > 0) && (<div>➤</div>)}
                {(enemies[1].hp > 0) && <img src={enemies[1].image} style={{
                    width: '250px',
                    height: '250px',
                    zIndex: '1'
                    }} />}
            </div>
            <div className="menuBox">
                {state === "SELECTACTION" && (
                    attacksMenu()
                )}
                {state === "SELECTTARGET" && enemies && (
                    <div>
                        Name: {enemies[selection].name}<br/>
                        Hp: {enemies[selection].hp}<br/>
                        Armor: {enemies[selection].armor}<br/>
                        Dodge: {enemies[selection].dodge}<br/>
                        Speed: {enemies[selection].speed}<br/>
                        Resistance: {enemies[selection].resistance}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Battle