import "./Battle.scss";

function Battle() {

    const attacks = ["spell 1", "spell 2", "spell 3"];

    return (
        <div className="background" style={{
            backgroundImage: 'url(/paper.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
            }} >
            <div className="menuBox">
                {attacks[0]}<br/>
                {attacks[1]}<br/>
                {attacks[2]}
            </div>
        </div>
    )
}

export default Battle