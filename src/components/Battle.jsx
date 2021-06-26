import "./Battle.scss";

function Battle() {

    let Mage = {
        image: "/Lanto47.png",
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
            <img className="characterImage" width="1" height="1" style={{
                width: '32px',
                height: '32px',
                background: `url(${Mage.image}) 0 0`,
                zIndex: '1'
                }} />
            <div className="menuBox">
                {Mage.attacks[0]}<br/>
                {Mage.attacks[1]}<br/>
                {Mage.attacks[2]}
            </div>
        </div>
        </>
    )
}

export default Battle