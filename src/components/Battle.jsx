import "./Battle.scss";

function Battle() {

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
                {Mage1.attacks[0]}<br/>
                {Mage1.attacks[1]}<br/>
                {Mage1.attacks[2]}
            </div>
        </div>
        </>
    )
}

export default Battle