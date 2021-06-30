import { useEffect, useState } from "react";
import "./Battle.scss";
import useKeyPress from "../hooks/use-key-press";

function Battle() {

    let [state, setState] = useState("SELECTACTION");
    let [selection, setSelection] = useState(0);
    let [attack, setAttack] = useState({});

    let Mage1 = {
        image: "Lanto47.png",
        hp: 100,
        armor: 2,
        dodge: 10,
        speed: 5,
        resistance: 5,
        attacks: [{name:"spell 1", description: "description here", dmg: 100}, {name:"spell 2", description: "description here", dmg: 200}, {name:"spell 3", description: "description here", dmg: 50}],
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

    let [enemies, setEnemies] = useState(enemyArray);

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
                    //save attack for late once target is selected
                    setAttack(Mage1.attacks[selection]);
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
                    setSelection(0);
                };
            }
        }
    });

    function attacksMenu() {
        return (
        <>
        {Mage1.attacks.map((attack, index)=>{
            if (index === selection) {
                return <>➤{attack.name} {attack.description} {attack.dmg} Damage<br/></>
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
            <div className="enemy1" >
                {selection === 0 && state === "SELECTTARGET" && (<div>➤</div>)}
                <img  src={enemyArray[0].image} style={{
                    width: '250px',
                    height: '250px',
                    zIndex: '1'
                    }} />
            </div>
            <div className="enemy2" >
                {selection === 1 && state === "SELECTTARGET" && (<div>➤</div>)}
                <img  src={enemyArray[1].image} style={{
                    width: '250px',
                    height: '250px',
                    zIndex: '1'
                    }} />
            </div>
            <div className="menuBox">
                {state === "SELECTACTION" && (
                    attacksMenu()
                )}
                {state === "SELECTTARGET" && enemies && (
                    <div>
                        {/* <h4>Select Target</h4> */}
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