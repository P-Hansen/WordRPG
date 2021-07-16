import useKeyPress from "../hooks/use-key-press";
import enemyArray from "../helpers/enemies";
import enemyTurn from "../helpers/enemyTurn";
import HealthBar from "./HealthBar";
import { useState } from "react";
import "./Battle.scss";

function Battle(props) {
    let [state, setState] = useState("SELECTACTION");
    let [selection, setSelection] = useState(0);
    let [attack, setAttack] = useState({});
    let [activePlayer, setActivePlayer] = useState(0);
    let [enemies, setEnemies] = useState(enemyArray);
    let [requirements, setRequirements] = useState(true);

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
                //check to see if the letters of the word are available
                if (dir === 'enter' & props.letters.requirements(props.characters[activePlayer].attacks[selection].name)) {
                    //save attack for later once target is selected
                    setAttack(props.characters[activePlayer].attacks[selection]);
                    setSelection(0);
                    setState("SELECTTARGET");
                };
            }
        //controls for selecting target
        } else if (state === "SELECTTARGET" && attack.dmg > 0) {
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
                    console.log(attack.name);
                    //subtract letters of attack from alphabet
                    props.letters.subtract(attack.name);
                    console.log("hp after", enemies[selection].hp);
                    //remove dead enemies/loot
                    if (enemies[selection].hp <= 0) {
                        //add letters from enemy killed
                        props.letters.add(enemies[selection].loot);
                        enemies.splice(selection, 1);
                    }
                    setState("SELECTACTION");
                    //switch to next player in the array
                    if ((activePlayer + 1) >= props.characters.length) {
                        enemyTurn(enemies, props.characters);
                        setActivePlayer(0);
                    } else {
                        setActivePlayer(activePlayer + 1);
                    }
                    setSelection(0);
                };
            }
            //controls for selecting healing target
        } else if (state === "SELECTTARGET" && attack.dmg < 0) {
            if (dir === "down" || dir === "up" || dir === "enter") {
                if (dir === 'down') {
                    setSelection((selection + 1) > props.characters.length-1 ? props.characters.length-1 : selection + 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'up') {
                    setSelection((selection - 1) < 0 ? 0 : selection - 1);
                    console.log("list selection:", selection);
                };
                if (dir === 'enter') {
                    //deal dmg
                    console.log("hp before", props.characters[selection].hp);
                    props.characters[selection].hp -= attack.dmg;
                    console.log(attack.name);
                    //subtract letters of attack from alphabet
                    props.letters.subtract(attack.name);
                    console.log("hp after", props.characters[selection].hp);
                    setState("SELECTACTION");
                    //switch to next player in the array
                    if ((activePlayer + 1) >= props.characters.length) {
                        console.log("enemy turn");
                        enemyTurn(enemies, props.characters);
                        setActivePlayer(0);
                    } else {
                        setActivePlayer(activePlayer + 1);
                    }
                    setSelection(0);
                    setRequirements(props.letters.requirements(props.characters[0].attacks[0].name));
                };
            }
            //pass
        } else if (state === "SELECTTARGET" && attack.dmg === 0) {
            //switch to next player in the array
            if ((activePlayer + 1) >= props.characters.length) {
                console.log("enemy turn");
                enemyTurn(enemies, props.characters);
                setActivePlayer(0);
            } else {
                setActivePlayer(activePlayer + 1);
            }
            setSelection(0);
            setRequirements(props.letters.requirements(props.characters[0].attacks[0].name));
            setState("SELECTACTION");
        };
    });

    //show a list of the active players attacks and an arrow in front of the currently selected one
    function attacksMenu() {
        return (
        <>
        {/* {props.characters[activePlayer].name}<br/><br/> */}
        {props.characters[activePlayer].attacks.map((attack, index)=>{
            if (index === selection) {
                return <div className="menuItem">➤{props.letters.wordColour(attack.name)} {attack.description} {attack.dmg} Damage<br/></div>
            } else {
                return <div className="menuItem">{props.letters.wordColour(attack.name)} {attack.description} {attack.dmg} Damage<br/></div>
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
                {state === "SELECTTARGET" && selection === 0 && (attack.dmg < 0) && (<div>➤</div>)}
                <img style={{
                width: '33px',
                height: '33px',
                background: `url(${props.characters[0].image}) 0 -64px`,
                zIndex: '1'
                }} />
                <HealthBar currentHp={props.characters[0].hp} maxHp={props.characters[0].maxHp} />
            </div>
            <div className="characterImage2">
                {state === "SELECTACTION" && activePlayer === 1 && (<div>➤</div>)}
                {state === "SELECTTARGET" && selection === 1 && (attack.dmg < 0) && (<div>➤</div>)}
                <img style={{
                width: '33px',
                height: '33px',
                background: `url(${props.characters[1].image}) 0 -64px`,
                zIndex: '1'
                }} />
                <HealthBar currentHp={props.characters[1].hp} maxHp={props.characters[1].maxHp} />
            </div>
            <div className="characterImage3">
                {state === "SELECTACTION" && activePlayer === 2 && (<div>➤</div>)}
                {state === "SELECTTARGET" && selection === 2 && (attack.dmg < 0) && (<div>➤</div>)}
                <img style={{
                width: '33px',
                height: '33px',
                background: `url(${props.characters[2].image}) 0 -64px`,
                zIndex: '1'
                }} />
                <HealthBar currentHp={props.characters[2].hp} maxHp={props.characters[2].maxHp} />
            </div>
            <div className="enemy1" >
                {selection === 0 && state === "SELECTTARGET" && (enemies[0]) && (attack.dmg > 0) && (<div>➤</div>)}
                <div>
                    {(enemies[0]) && <img src={enemies[0].image} style={{
                        width: '250px',
                        height: '250px',
                        zIndex: '1'
                    }} />}
                    {(enemies[0]) && <HealthBar currentHp={enemies[0].hp} maxHp={enemies[0].maxHp} />}
                </div>
            </div>
            <div className="enemy2" >
                {selection === 1 && state === "SELECTTARGET" && (enemies[1]) && (attack.dmg > 0) && (<div>➤</div>)}
                <div>
                    {(enemies[1]) && <img src={enemies[1].image} style={{
                        width: '250px',
                        height: '250px',
                        zIndex: '1'
                    }} />}
                    {(enemies[1]) && <HealthBar currentHp={enemies[1].hp} maxHp={enemies[1].maxHp} />}
                </div>
            </div>
            <div className="menuBox">
                <div className="letters">
                {['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].map((char)=>{
                        return <>{props.letters.wordColour(char)}<div className="count">{props.letters.howMany(char)}</div></>
                    })
                }
                </div>
                <br/>
                {state === "SELECTACTION" && (
                    attacksMenu()
                )}
                {state === "SELECTTARGET" && enemies && (attack.dmg > 0) && (
                    <div>
                        Name: {enemies[selection].name}<br/>
                        Hp: {enemies[selection].hp}<br/>
                        Armor: {enemies[selection].armor}<br/>
                        Dodge: {enemies[selection].dodge}<br/>
                        Speed: {enemies[selection].speed}<br/>
                        Resistance: {enemies[selection].resistance}
                    </div>
                )}
                {state === "SELECTTARGET" && (attack.dmg < 0) && (
                    <div>
                        Name: {props.characters[selection].name}<br/>
                        Hp: {props.characters[selection].hp}<br/>
                        Armor: {props.characters[selection].armor}<br/>
                        Dodge: {props.characters[selection].dodge}<br/>
                        Speed: {props.characters[selection].speed}<br/>
                        Resistance: {props.characters[selection].resistance}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Battle